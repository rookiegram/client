<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
  <a class="navbar-brand text-warning font-weight-bold" @click="toTimeline">ROOKIEGRAM</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto right ">
      <li class="nav-item">
        <a class="nav-link text-warning" @click="toTimeline">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-warning" @click="toMyUpload">My Upload</a>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li class="nav-item text-white">
        <a class="nav-link disabled text-warning" href="#">Hi, {{nickname}}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-warning" v-on:click="logout"><i class="fas fa-sign-out-alt"></i></a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  props: ['nickname'],
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
    toMyUpload () {
      this.$router.push('/myupload')
    },
    toTimeline () {
      this.$router.push('/timeline')
    }
  }
}
</script>

<style scoped>
</style>
