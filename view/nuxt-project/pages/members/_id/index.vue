<template>
  <div>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
      <h1>{{ user.name }}</h1>
      <hr>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Record" active>
            <b-card-text v-if="user.role_id==1">
              <div v-for="t_record in teacher_records">
                <nuxt-link :to="`/members/${t_record.user_id}/${t_record.id}`">{{ t_record.title }}</nuxt-link>
                <br>
                <p style="text-align:right">{{ t_record.updated_at }}</p>
                <hr>
              </div>
            </b-card-text>
            <b-card-text v-if="user.role_id==2">
              <div v-for="record in records" :key="record.id">
                <nuxt-link :to="`/members/${user.id}/${record.id}`">{{ record.title }}</nuxt-link>
                <br>
                <p style="text-align:right">{{ record.updated_at }}</p>
                <hr>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="Profile">
            <b-card-text>
              <b-jumbotron>
                <div v-if="edit_mode==false">
                  <p>{{ department }}</p>
                  <p>{{ grade }}</p>
                  <p>{{ user.pc_name }}</p>
                  <p>{{ user.pc_cpu }}</p>
                  <p>{{ user.pc_ssd }}</p>
                </div>
                <div v-if="edit_mode==true">
                  <b-row>
                    <b-col>
                      <b-form-select 
                     v-model="department_id" 
                     :options="departments">
                      </b-form-select>
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col>
                      <b-form-select 
                     v-model="grade_id" 
                     :options="grades">
                      </b-form-select>
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col>
                      <b-form-input
                        v-model="pc_name"
                        placeholder="Enter PC Name"
                        required
                        ></b-form-input>
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col>
                      <b-form-input
                        v-model="pc_cpu"
                        placeholder="Enter PC CPU"
                        required
                        ></b-form-input>
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col>
                      <b-form-input
                        v-model="pc_memory"
                        placeholder="Enter PC Memory"
                        required
                        ></b-form-input>
                    </b-col>
                  </b-row>
                  <br>
                  <b-row>
                    <b-col>
                      <b-form-input
                        v-model="pc_ssd"
                        placeholder="Enter PC SSD"
                        required
                        ></b-form-input>
                    </b-col>
                  </b-row>
                </div>
              </b-jumbotron>
              <b-button v-if="edit_mode==false" @click="edit_mode=true" variant="success">Edit</b-button>
              <b-button v-if="edit_mode==true" @click="edit_mode=false">Cancel</b-button>
              <b-button v-if="edit_mode==true" @click="edit" variant="danger">Done</b-button>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-button to="/members">Back</b-button>
        <b-button v-if="user.role_id==2" :to="`/members/${this.$route.params.id}/new`" variant="danger">New</b-button>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      department: [],
      grade: [],
      records: [],
      teacher_records: [],
      edit_mode: false,
      department_id: null,
      grade_id: null,
      pc_name: '',
      pc_cpu: '',
      pc_memory: '',
      pc_ssd: '',
      departments: [
        { value: null, text: '課程/専攻' },
        { value: 1, text: '機械創造工学課程' },
        { value: 2, text: '電気電子情報工学課程' },
        { value: 3, text: '物質材料工学課程' },
        { value: 4, text: '環境社会基盤工学課程' },
        { value: 5, text: '生物機能工学課程' },
        { value: 6, text: '情報・経営システム工学課程' },
        { value: 7, text: '機械創造工学専攻' },
        { value: 8, text: '電気電子情報工学専攻' },
        { value: 9, text: '物質材料工学専攻' },
        { value: 10, text: '環境社会基盤工学専攻' },
        { value: 11, text: '生物機能工学専攻' },
        { value: 12, text: '情報・経営システム工学専攻' },
        { value: 13, text: '原子力システム安全工学専攻' },
        { value: 14, text: 'システム安全専攻' },
        { value: 15, text: '技術科学イノベーション専攻' },
        { value: 16, text: '情報・制御工学専攻' },
        { value: 17, text: '材料工学専攻' },
        { value: 18, text: 'エネルギー・環境工学専攻' },
        { value: 19, text: '生物統合工学専攻' },
        { value: 20, text: 'その他' },
      ],
      grades: [
        { value: null, text: '学年' },
        { value: 1, text: 'B1[学部1年]' },
        { value: 2, text: 'B2[学部2年]' },
        { value: 3, text: 'B3[学部3年]' },
        { value: 4, text: 'B4[学部4年]' },
        { value: 5, text: 'M1[修士1年]' },
        { value: 6, text: 'M2[修士2年]' },
        { value: 7, text: 'D1[博士1年]' },
        { value: 8, text: 'D2[博士2年]' },
        { value: 9, text: 'D3[博士3年]' },
        { value: 10, text: 'GD1[イノベ1年]' },
        { value: 11, text: 'GD2[イノベ2年]' },
        { value: 12, text: 'GD3[イノベ3年]' },
        { value: 13, text: 'GD4[イノベ4年]' },
        { value: 14, text: 'GD4[イノベ5年]' },
        { value: 15, text: 'その他' },
      ]
    }
  },
  mounted() {
    this.get();
    this.$axios.get('/api/v1/get_records_from_user/' + this.$route.params.id, {
      headers: { 
        "Content-Type": "application/json", 
      },
    }).then(response => {
      this.teacher_records = response.data
    })
  },
  methods: {
    get: function(){
      this.$axios.get('/api/v1/user/' + this.$route.params.id, {
        headers: { 
          "Content-Type": "application/json", 
        },
      }).then(response => {
          this.user = response.data.user
          this.department_id = this.user.department_id
          this.grade_id = this.user.grade_id
          this.pc_name = this.user.pc_name
          this.pc_cpu = this.user.pc_cpu
          this.pc_memory = this.user.pc_memory
          this.pc_ssd = this.user.pc_ssd
          this.department = response.data.department
          this.grade = response.data.grade
        })
      this.$axios.get('/api/v1/records/' + this.$route.params.id, {
        headers: { 
          "Content-Type": "application/json", 
        },
      }).then(response => {
          this.records = response.data
        })
    },
    edit: function(){
      const edit_url = '/api/v1/user/update/' + this.$route.params.id + '?department_id=' + this.department_id + '&grade_id=' + this.grade_id + '&pc_name=' + this.pc_name + '&pc_cpu=' + this.pc_cpu + '&pc_memory=' + this.pc_memory + '&pc_ssd=' + this.pc_ssd
      this.$axios.put(edit_url, {
        headers: { 
          "Content-Type": "application/json", 
        },
      }).then(response => {
        this.get();
        this.edit_mode = false
      })
    }
  }
}
</script>
