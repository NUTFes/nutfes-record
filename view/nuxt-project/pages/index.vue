<template>
  <div>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-row>
          <b-col>
            <h1>Log in</h1>
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
            <b-button @click="loginWithAuthModule">log in</b-button>
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
        <b-link to="/signup">sign up</b-link>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async loginWithAuthModule() {
      await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(
          response => {
            localStorage.setItem("access-token", response.headers["access-token"]);
            localStorage.setItem("client", response.headers.["client"]);
            localStorage.setItem("uid", response.headers.["uid"]);
            return response;
          },
          error => {
            return error;
          }
        );
    }
  }
}
</script>

