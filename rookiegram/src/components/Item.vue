<template>
  <div class="container rounded">
    <img v-bind:src="item.image" alt="" class="rounded size">
    <div class="row justify-content-center">
      <div class="col-xs-4 mr-2 font-weight-bold">{{item.userid.nickname}}</div>
      <a v-on:click="share()"><i class="fas fa-share-alt"></i></a>
      <div class="ml-5">
        <a v-on:click="like()"><i class="far fa-thumbs-up grow"></i></a>
        <span class="badge badge-light">{{item.likes.length}}</span>
      </div>
      <div class="">
        <a v-on:click="dislike()"><i class="far fa-thumbs-down grow"></i></a>
        <span class="badge badge-light">{{item.dislikes.length}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['item'],
  methods: {
    like () {
      let token = localStorage.getItem('token')
      axios.put(`http://localhost:3000/posts/like/${this.item._id}`, {}, {
        headers: {
          token: token
        }
      })
        .then(function (response) {
          location.reload()
        })
    },
    dislike () {
      let token = localStorage.getItem('token')
      axios.put(`http://localhost:3000/posts/dislike/${this.item._id}`, {}, {
        headers: {
          token: token
        }
      })
        .then(function (response) {
          location.reload()
        })
    },
    share () {
      let text = `Check this post, guys @ ${this.item.image} `
      // let postId = this.item._id
      axios.post(`http://localhost:3000/twitter`, {tweet: text})
        .then(function (response) {
          alert('twitter sent !')
        })
    }
  }
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
.size {
  width: 300px;
  height: 300px;
}
</style>
