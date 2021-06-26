<template>
  <div>
  <b-row>
    <b-col cols=3></b-col>
    <b-col>
      <h1>Curriculum</h1>
      <hr>
      <div>
        <b-card no-body>
              <b-card-text>
                <b-table striped hover :items="curriculums" :fields="fields">
                  <template #cell(category_id)="data">
                    <b-badge variant="primary" v-if="data.item.category_id == 1">React.js</b-badge>
                    <b-badge variant="danger" v-if="data.item.category_id == 2">Go</b-badge>
                  </template>
                  <template #cell(Title)="data">
                    <nuxt-link :to="`/curriculums/${data.item.id}`">{{ data.item.title }}</nuxt-link>
                  </template>
                </b-table>
              </b-card-text>
        </b-card>
      </div>
    </b-col>
    <b-col cols=3></b-col>
  </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users_1: [],
      users_2: [],
      curriculums: [],
      user: [],
      fields: [
        { key: 'category_id', label: 'Category'  },
        'Title'
      ],
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
    this.$axios.get('/api/v1/get_role_1', {
      headers: { 
        "Content-Type": "application/json", 
      },
    }).then(response => {
        this.users_1 = response.data
      })
    this.$axios.get('/api/v1/get_role_2', {
      headers: { 
        "Content-Type": "application/json", 
      },
    }).then(response => {
        this.users_2 = response.data
      })
    this.$axios.get('/curriculums', {
      headers: { 
        "Content-Type": "application/json", 
      },
    }).then(response => {
        this.curriculums = response.data
      })

  },
}
</script>
