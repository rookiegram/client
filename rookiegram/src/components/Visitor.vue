<template>
  <div>
    <div class="row">
      <div class="col-lg-6 border">
        <Item :item="payload[0]"></Item>
      </div>
      <div class="col-lg-6 border">
        <Login></Login>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Item from '@/components/Item'
import axios from 'axios'
export default {
  components: {
    Login, Item
  },
  data () {
    return {
      payload: [],
      url: this.$route.params.id
    }
  },
  methods: {
    fetchPost () {
      let self = this
      axios.get(`http://localhost:3000/posts/id/${self.url}`)
        .then(function (response) {
          self.payload = response.data.data
          console.log(self.payload)
        })
    }
  },
  created () {
    this.fetchPost()
  }
}
</script>

<style scoped>
  .row {
    margin: 0
  }
</style>
