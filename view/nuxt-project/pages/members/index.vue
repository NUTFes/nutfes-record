<template>
  <div>
  <b-row>
    <b-col cols=3></b-col>
    <b-col>
      <h1>Members</h1>
      <hr>
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Students" active>
              <b-card-text>
                <b-table striped hover :items="users_2" :fields="fields">
                  <template #cell(role_id)="data">
                    <b-badge variant="primary" v-if="data.item.role_id == 1">teacher</b-badge>
                    <b-badge variant="danger" v-if="data.item.role_id == 2">student</b-badge>
                  </template>
                  <template #cell(name)="data">
                    <nuxt-link :to="`/members/${data.item.id}`">{{ data.item.name }}</nuxt-link>
                  </template>
                </b-table>
              </b-card-text>
            </b-tab>
            <b-tab title="Teachers">
              <b-card-text>
                <b-table striped hover :items="users_1" :fields="fields">
                  <template #cell(role_id)="data">
                    <b-badge variant="primary" v-if="data.item.role_id == 1">teacher</b-badge>
                    <b-badge variant="danger" v-if="data.item.role_id == 2">student</b-badge>
                  </template>
                  <template #cell(name)="data">
                    <nuxt-link :to="`/members/${data.item.id}`">{{ data.item.name }}</nuxt-link>
                  </template>
                </b-table>
              </b-card-text>
            </b-tab>
          </b-tabs>
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
      user: [],
      fields: [
        { key: 'role_id', label: 'Role'  },
        'name'
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
  },
}
</script>
