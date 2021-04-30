<template>
  <b-row>
    <b-col cols=3></b-col>
    <b-col>
      <h1>members</h1>
      <hr>
      <div v-for="user in users" :key=user.id>
        <li style="font-size:22px">
          <b-badge variant="primary" v-if="user.role_id == 1">講師</b-badge>
          <b-badge variant="primary" v-if="user.role_id == 2">生徒</b-badge>
          <nuxt-link :to="`/members/${user.id}`">{{ user.name }}</nuxt-link>
        </li>
      </div>
    </b-col>
    <b-col cols=3></b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.$axios.get('/api/v1/users', {
      headers: { 
        "Content-Type": "application/json", 
      },
    }).then(response => {
        this.users = response.data
      })
  },
}
</script>
