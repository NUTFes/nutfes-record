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
            <b-card-text>
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
                <p>{{ department }}</p>
                <p>{{ grade }}</p>
                <p>{{ user.pc_name }}</p>
                <p>{{ user.pc_cpu }}</p>
                <p>{{ user.pc_ssd }}</p>
              </b-jumbotron>
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
        <b-button :to="`/members/${this.$route.params.id}/new`" variant="danger">New</b-button>
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
      records: []
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
    this.$axios.get('/api/v1/records/' + this.$route.params.id, {
      headers: { 
        "Content-Type": "application/json", 
      },
    }).then(response => {
        this.records = response.data
      })
  },
}
</script>
