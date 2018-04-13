<template>
  <div>
    <div class="row">
      <div class="col-lg-6 border">
        <Item></Item>
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
      payload: {}
    }
  },
  methods: {
    fetchPost () {
      // let self = this
      axios.get(`http://localhost:3000/posts/id/5ad0156ef542a53970255fca`)
        .then(function (response) {
        })
    }
  },
  created () {
  }
}
</script>

<style scoped>
  .row {
    margin: 0
  }
</style>
