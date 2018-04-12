<template>
<div>
  <Navbar></Navbar>
  <div class="container mb-5">
    <div class="row">
        <Item class="margin-right-lg col-lg-4 mb-3"></Item>
        <Item class="margin-right-lg col-lg-4"></Item>
        <Item class="margin-right-lg col-lg-4"></Item>
        <Item class="margin-right-lg col-lg-4"></Item>
        <Item class="margin-right-lg col-lg-4"></Item>
        <Item class="margin-right-lg col-lg-4"></Item>
        <Item class="margin-right-lg col-lg-4"></Item>
        <Item class="margin-right-lg col-lg-4"></Item>
        <Item class="margin-right-lg col-lg-4"></Item>        
      </div>
    </div>
    <Footer class="fixed-bottom bg-primary"></Footer>
  </div>
</template>

<script>
import Item from '@/components/Item'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Item, Navbar, Footer
  }
}
</script>

<style scoped>
</style>
