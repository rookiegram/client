<template lang="html">
  <div>
    <button type="button" class="btn btn-outline-danger btn-lg" data-toggle="modal" data-target="#exampleModalCenter">+</button>
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
              <div class="form-group">
                <label for="message-text" class="col-form-label">Caption:</label>
                <textarea class="form-control" id="message-text" v-model='caption'></textarea>
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

    <div class="modal fade" id="modalEdit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="message-text" class="col-form-label">New Caption:</label>
                <textarea class="form-control" id="message-text" v-model='newCaption'></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="editPhoto" data-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  data () {
    return {
      name: localStorage.getItem('name'),
      token: localStorage.getItem('token'),
      caption: '',
      file: null,
      formData: new FormData(),
      foto: [],
      newCaption: '',
      id: '',
      status: ''
    }
  },
  created: function () {
    this.getPhoto()
  },
  methods: {
    ambilFoto: function (event) {
      this.file = event.target.files[0]
      console.log(this.file)
    },
    addPhoto: function () {
      console.log(this.caption)
      this.formData.set('item', this.file)
      this.formData.set('caption', this.caption)
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/upload',
        headers: {
          token: this.token
        },
        data: this.formData
      }).then(({ data }) => {
        console.log(data)
        this.getPhoto()
      })
    },
    getPhoto: function () {
      axios({
        method: 'get',
        url: 'http://localhost:3000/api'
      }).then(({ data }) => {
        console.log(data)
        this.foto = data.data
      })
    },
    editPhoto: function (obj) {
      this.id = obj
    },
    deletePhoto: function (id) {
      console.log(id)
      axios({
        method: 'delete',
        url: `http://localhost:3000/api/delete/${id}`,
        headers: {
          token: this.token
        }
      }).then(({ data }) => {
        console.log(data)
        if (data.data.n === 0) {
          swal('Cannot delete, you are not the owner')
        } else {
          this.getPhoto()
        }
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