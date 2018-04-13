<template lang="html">
  <div>
    <label class="btn btn-default text-warning font-weight-bold" data-toggle="modal" data-target="#exampleModalCenter">
    <i class="fas fa-upload"></i> Upload Here Bro !
    </label>
    <!-- modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Choose your Photo</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Photo:</label>
                <input type="file" class="form-control" id="recipient-name" @change="ambilFoto">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addPhoto" data-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      file: null,
      formData: new FormData(),
      foto: []
    }
  },
  methods: {
    ambilFoto: function (event) {
      this.file = event.target.files[0]
    },
    addPhoto: function () {
      let token = localStorage.getItem('token')
      this.formData.set('image', this.file)
      axios({
        method: 'post',
        url: 'http://localhost:3000/posts',
        data: this.formData,
        headers: {
          token: token
        }
      }).then(({ data }) => {
        console.log(data)
        location.reload()
      })
    }
  }
}
</script>

<style lang="css">
.card {
  margin-bottom: 28px;
}
</style>

<style lang="css">
.card {
  margin-bottom: 28px;
}
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: #000;
}
</style>
