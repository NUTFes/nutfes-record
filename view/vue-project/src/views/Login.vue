<template>
  <div>
    <b-row>
      <b-col cols=3></b-col>
      <b-col cols=6>
        <h1>Log In</h1>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols=3></b-col>
      <b-col cols=6>
        <b-form-input
          v-model="email"
          type="email"
          placeholder="Enter Email"
          required
          ></b-form-input>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols=3></b-col>
      <b-col cols=6>
        <b-form-input
          v-model="password"
          type="password"
          placeholder="Enter Password"
          required
          ></b-form-input>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols=3></b-col>
      <b-col cols=6>
        <b-button @click="submit">log in</b-button>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submit: function(){
      const url = process.env.VUE_APP_URL + '/api/auth/sign_in'
      var params = new URLSearchParams();
      params.append('email', this.email);
      params.append('password', this.password);
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      axios.post(url, params).then(
        (response) => {
          localStorage.setItem('access-token', response.headers['access-token'])
          localStorage.setItem('client', response.headers['client'])
          localStorage.setItem('uid', response.headers['uid'])
          localStorage.setItem('token-type', response.headers['token-type'])
          this.$router.push('students')
        },
        (error) => {
          this.message = 'ログインに失敗しました。<br>Failed to SignIn'
          return error
        }
      )},
  }    
}
</script>
