<template>
  <div>
    <p>Name: {{ table.name }}</p>
    <p>Symbol: {{ table.symbol }}</p>
    <p>Price (USD): {{ table.price_usd }}</p>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'table',

    data() {
      return {
        table: {}
      }
    },

    created() {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      fetchData() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/'+this.$route.params.id+'/')
        .then((resp) => {
          this.table = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>