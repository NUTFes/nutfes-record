<template>
  <div>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-card
          :header="`${user} の学習記録`"
          header-tag="header"
          >
          <h1 v-if="edit_mode==false">{{ record.title }}</h1>
          <b-form-input
            v-if="edit_mode==true"
            v-model="title"
            placeholder="Title"
            ></b-form-input>
          <hr>
          <b-card-title>内容</b-card-title>
          <b-card-text v-if="edit_mode==false">{{ record.content }}</b-card-text>
          <b-form-textarea
            v-if="edit_mode==true"
            id="textarea"
            v-model="content"
            placeholder="Content"
            rows="5"
            max-rows="10"
            ></b-form-textarea>
          <br>
          <b-card-title>宿題</b-card-title>
          <b-card-text v-if="edit_mode==false">{{ record.homework }}</b-card-text>
          <b-form-textarea
            v-if="edit_mode==true"
            id="textarea"
            v-model="homework"
            placeholder="HomeWork"
            rows="5"
            max-rows="10"
            ></b-form-textarea>
          <br>
          <b-card-title>担当</b-card-title>
          <b-card-text>{{ teacher }}</b-card-text>
          <br>
          <b-card-title>日時</b-card-title>
          <b-card-text>
            作成日時: {{ record.created_at | format-date }}<br>
            編集日時: {{ record.updated_at | format-date }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-button v-if="edit_mode==false" :to="`/members/${record.user_id}`">Back</b-button>
        <b-button v-if="edit_mode==false && current_role==1 && teacher_id==current_user_id" @click="edit_mode=true" variant="success">Edit</b-button>
        <b-button v-b-modal.modal-center variant="danger" v-if="edit_mode==false && current_role==1 && teacher_id==current_user_id">Delete</b-button>
        <b-button v-if="edit_mode==true" @click="edit_mode=false" variant="primary">Cancel</b-button>
        <b-button v-if="edit_mode==true" @click="edit" variant="danger">Done</b-button>

        <b-modal id="modal-center" centered  title="Are you sure?">
          <p class="my-4">本当に削除してよろしいですか？</p>
          <template #modal-footer="{ ok, cancel }">
            <b-button variant="primary" @click="cancel()">No</b-button>
            <b-button variant="danger" @click="destroy_yes">Yes</b-button>
          </template>
        </b-modal>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:  '',
      content:  '',
      homework:  '',
      record: [],
      teacher: [],
      user: [],
      edit_mode: false,
      current_role: [],
      current_user_id: [],
      teacher_id: []
    }
  },
  mounted() {
    this.get()
    this.$axios.get('/api/v1/get_current_user', {
      headers: { 
        "Content-Type": "application/json", 
        "access-token": localStorage.getItem('access-token'),
        "client": localStorage.getItem('client'),
        "uid": localStorage.getItem('uid')
      },
    }).then(response => {
        this.current_user_id = response.data.id
        this.current_role = response.data.role_id
      })
  },
  methods: {
    destroy_yes: function(){
      this.$axios.delete('/records/' + this.$route.params.id)
      this.$router.push('/members/' + this.record.user_id)
    },
    get: function(){
      this.$axios.get('/api/v1/record/' + this.$route.params.id, {
        headers: { 
          "Content-Type": "application/json", 
        },
      }).then(response => {
        this.record = response.data.record
        this.title = this.record.title
        this.content = this.record.content
        this.homework = this.record.homework
        this.user = response.data.user
        this.teacher = response.data.teacher
        this.teacher_id = response.data.teacher_id
      })
    },
    edit: function(){
      const edit_url = '/records/' + this.$route.params.id + '?title=' + this.title + '&content=' + this.content + '&homework=' + this.homework
      this.$axios.put(edit_url, {
        headers: { 
          "Content-Type": "application/json", 
        },
      }).then(response => {
        this.get();
        this.edit_mode = false
      })
    },
  }
}
</script>
