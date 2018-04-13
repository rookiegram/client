<template>
  <div>
    <Navbar :nickname="nickname"></Navbar>
    <div id="titl">
      <h3>My Profile:</h3>
    </div>
    <Footer class="fixed-bottom bg-primary"></Footer>
  </div>
</template>

<script>
import Item from '@/components/Item'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import axios from 'axios'
export default {
  components: {
    Item, Navbar, Footer
  },
  data () {
    return {
      items: [],
      nickname: localStorage.getItem('email').split('@')[0]
    }
  },
  methods: {
    fetchTimeline () {
      let self = this
      let token = localStorage.getItem('token')
      axios.get('http://35.186.158.81/posts/user/', {
        headers: {
          token: token
        }
      })
        .then(function (response) {
          self.items = response.data.data
        })
    }
  },
  created () {
    this.fetchTimeline()
  }
}
</script>

<style scoped>
#titl {
  float: left;
}
</style>
