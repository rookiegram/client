<template>
<div>
  <Navbar :nickname="nickname"></Navbar>
  <div class="container mb-5">
    <div class="row">
        <Item v-for="(item,index) in items" v-bind:key='index' :item="item" class ="margin-right-lg col-lg-4 mb-3"></Item>
      </div>
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
      axios.get('http://35.186.158.81/posts/all/', {
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
