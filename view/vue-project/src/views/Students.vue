<template>
  <div>
    <b-row>
      <b-col cols=3></b-col>
      <b-col cols=6>
        <h1>メンバー一覧</h1>
      </b-col>
      <b-col cols=3></b-col>
    </b-row>
  </div>
</template>

<script>
export default{
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submit: function(){
      console.log(this.email)
      console.log(this.password)
    }
  }
}
</script>
