<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <div>
<div class="container">
  <div v-for="time in times" :key="time.id">
    <card :time="time"></card>
  </div>
</div>
</div>
</template>

<script>

  import Card from '../components/Card.vue'

  const API_URL = `https://api-football-standings.azharimm.dev/leagues/ita.1/standings?season=2023&sort=asc`

  export default{
    data: () => ({
      nome: '',
      times: []
    }),
    methods: {
      async getTimes () {
        const response = await fetch(API_URL)
        const data = await response.json()
        
        //console.log(data.data.standings)

        this.nome = data.data.name
        this.times = data.data.standings
        console.log(this.times)
      }
    },
    created() {
      this.getTimes ()
    },
    components:{
      Card
    }
  }
</script>
