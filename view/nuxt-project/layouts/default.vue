<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="/members">NUTFES RECORD</b-navbar-brand>
      <b-button @click="logout">Log out</b-button>
      <b-navbar-brand href="/">{{ user }}</b-navbar-brand>
    </b-navbar> 
    <br>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
    }
  },
  mounted() {
    this.$axios.get('/api/v1/get_current_user{
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
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
      localStorage.removeItem('access-token')
      localStorage.removeItem('client')
      localStorage.removeItem('uid')
      this.$router.push('/')
    }
  }
}
</script>
