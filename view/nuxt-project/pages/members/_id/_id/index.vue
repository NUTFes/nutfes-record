<template>
  <div>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-card
          header="Record"
          header-tag="header"
          >
          <h1>{{ record.title }}</h1>
          <hr>
          <b-card-title>内容</b-card-title>
          <b-card-text>{{ record.content }}</b-card-text>
          <br>
          <b-card-title>宿題</b-card-title>
          <b-card-text>{{ record.homework }}</b-card-text>
          <br>
          <b-card-title>担当</b-card-title>
          <b-card-text>{{ teacher }}</b-card-text>
          <br>
          <b-card-title>日時</b-card-title>
          <b-card-text>
            作成日時: {{ record.created_at }}<br>
            編集日時: {{ record.updated_at }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols=3></b-col>
      <b-col>
        <b-button :to="`/members/${record.user_id}`">Back</b-button>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      record: [],
      teacher: [],
    }
  },
  mounted() {
    this.$axios.get('/api/v1/record/' + this.$route.params.id, {
      headers: { 
        "Content-Type": "application/json", 
      },
    }).then(response => {
        this.record = response.data.record
        this.teacher = response.data.teacher
      })
  },
}
</script>
