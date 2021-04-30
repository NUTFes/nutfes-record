<template>
  <div>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
      <h1>{{ user.name }}</h1>
      <hr>
      <b-jumbotron>
        <p>{{ department }}</p>
        <p>{{ grade }}</p>
        <p>{{ user.pc_name }}</p>
        <p>{{ user.pc_cpu }}</p>
        <p>{{ user.pc_ssd }}</p>
      </b-jumbotron>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-button to="/members">Back</b-button>
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
    }
  },
  mounted() {
    this.$axios.get('/api/v1/user/' + this.$route.params.id, {
      headers: { 
        "Content-Type": "application/json", 
      },
    }).then(response => {
        this.user = response.data.user
        this.department = response.data.department
        this.grade = response.data.grade
      })
  },
}
</script>
