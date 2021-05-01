<template>
  <div>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-row>
          <b-col>
            <h1>Sign in</h1>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col>
            <b-form-input
              v-model="email"
              type="email"
              placeholder="Enter Email"
              required
              ></b-form-input>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col>
            <b-form-input
              v-model="name"
              placeholder="Enter Name"
              required
              ></b-form-input>
          </b-col>
        </b-row>
        <br>
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
        <br>
        <b-row>
          <b-col>
            <b-form-input
              v-model="password"
              type="password"
              placeholder="Enter Password"
              required
              ></b-form-input>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col>
            <b-form-input
              v-model="password_confirmation"
              type="password"
              placeholder="Enter Password Confirmation"
              required
              ></b-form-input>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col>
            <b-button @click="signup">sign up</b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <hr>
        <b-link to="/">log in</b-link>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
  </div>
</template>


<script>
export default {
  auth: false,
  data() {
    return {
      email: '',
      name: '',
      department_id: null,
      grade_id: null,
      pc_name: '',
      pc_cpu: '',
      pc_memory: '',
      pc_ssd: '',
      password: '',
      password_confirmation: '',
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
  methods: {
    signup() {
      const url = '/api/auth?email=' + this.email + '&name=' + this.name + '&department_id=' + this.department_id + '&grade_id=' + this.grade_id + '&role_id=' + this.role_id + '&pc_name=' + this.pc_name + '&pc_cpu=' + this.pc_cpu + '&pc_memory=' + this.pc_memory + '&pc_ssd=' + this.pc_ssd + '&password=' + this.password + '&password_confirmation=' + this.password_confirmation + '&role_id=2'
      this.$axios.defaults.headers.common['Content-Type'] = 'application/json';
      this.$axios.post(url).then(
        (response) => {
          localStorage.setItem('access-token', response.headers['access-token'])
          localStorage.setItem('client', response.headers['client'])
          localStorage.setItem('uid', response.headers['uid'])
          this.$router.push("/")
        }
      )
    }
  }
}
</script>
