<template>
  <div>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <h1>Let's Studying</h1>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-form-input
          v-model="title"
          placeholder="Title"
          required
          ></b-form-input>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-form-textarea
          id="textarea"
          v-model="content"
          placeholder="Content"
          rows="5"
          max-rows="10"
          ></b-form-textarea>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-form-textarea
          id="textarea"
          v-model="homework"
          placeholder="HomeWork"
          rows="5"
          max-rows="10"
          ></b-form-textarea>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-button :to="`/members/${$route.params.id}`">Back</b-button>
        <b-button @click="post" variant="danger">Post</b-button>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      homework: '',
      user: [],
    }
  },
  mounted() {
    this.$axios.get('/api/v1/get_current_user', {
      headers: { 
        "Content-Type": "application/json", 
        "access-token": localStorage.getItem('access-token'),
        "client": localStorage.getItem('client'),
        "uid": localStorage.getItem('uid')
      },
    }).then(response => {
        this.user = response.data
      })
  },
  methods: {
    post: function(){
      const record_url = '/records?title=' + this.title + '&content=' + this.content + '&homework=' + this.homework + '&user_id=' + this.$route.params.id
      this.$axios.defaults.headers.common['Content-Type'] = 'application/json';
      this.$axios.post(record_url).then(
        (response) => {
          console.log(response.data.id)
          const teacher_url = '/teachers?user_id=' + this.user.id + '&record_id=' + response.data.id
          this.$axios.post(teacher_url)
          this.$router.push("/members/" + this.$route.params.id + '/' + response.data.id)
          
        }
      )
    }
  }
}
</script>

