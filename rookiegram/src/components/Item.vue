<template>
  <div class="container rounded">
    <img src="http://i0.kym-cdn.com/photos/images/newsfeed/000/484/441/038.png" alt="" class="rounded">
    <div class="row justify-content-center">
      <div class="col-xs-4 mr-2 font-weight-bold">Richo Andy Bong</div>
      <i class="fas fa-share-alt"></i>
      <div class="ml-5">
        <i class="far fa-thumbs-up grow"></i>
        <span class="badge badge-light">4</span>
      </div>
      <div class="">
        <i class="far fa-thumbs-down grow"></i>
        <span class="badge badge-light">4</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  @media only screen and (max-width: 980px) {
    .container {
      width: 400px;
    }  
  }

.grow {
  -webkit-transition:all 0.5s ease-out;
  -moz-transition:all 0.5s ease-out;
  -ms-transition:all 0.5s ease-out;
  -o-transition:all 0.5s ease-out;
  transition:all 0.5s ease-out;
}

.grow:hover {
  -webkit-transform:scale(1.3);
  -moz-transform:scale(1.3);
  -ms-transform:scale(1.3);
  -o-transform:scale(1.3);
  transform:scale(1.3);
}
</style>
