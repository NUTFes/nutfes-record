<template>
  <div>
    <b-row>
      <b-col cols=3></b-col>
      <b-col cols=6>
        <b-row>
          <h1>Members</h1>
        </b-row>
        <hr>
        <b-row>
          <div v-for="user in users" :key="user.id">
            <li style="font-size:25px"><b-link>{{ user.name }}</b-link></li>
          </div>
        </b-row>
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
      users: [],
    }
  },
  mounted() {
    const url = process.env.VUE_APP_URL + "/api/v1/users";
    axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      this.users = response.data;
    });
  }
}
</script>
