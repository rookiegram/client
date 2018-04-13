<template>
<section id="body" style="height: 100vh;">
    <div style="background-image: url(images/arka.jpg); background-attachment: fixed; background-size: cover; width: 100%; height: 100vh; position: relative;"  >
    <div class="baslik">
        <b style="font-size: 70px; text-align: center; margin-bottom: -21px; display: block;">R-GRAM</b>
        <span style="font-size: 19px; text-align: center; display: block; margin-bottom: 25px;">Upload Here Bro!</span>
    </div>
    <section>
    <form method="post" action="">
        <div class="arkalogin">
            <div class="loginbaslik">Sign-In</div>
            <hr style="border: 1px solid #ccc;">
            <div>
              <p id='error'>{{erremail}}</p>
              <p id='error'>{{errpassword}}</p>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1" >Email</span>
              </div>
                <input v-model="email" type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-bind:style="{ border: emailbordercolor }" v-on:keyup="validateEmail">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Password</span>
              </div>
                <input v-model="password" type="password" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-bind:style="{ border: passwordbordercolor }" v-on:keyup="validatePassword">
            </div>
            <button type="button" @click="signin" class="btn btn-primary">Login</button>
            <button type="button" @click="toRegister" class="btn btn-primary">Register</button>
        </div>
    </form>
    </section><br>
    <span style="font-size: 17px; text-align: center; display: block; color: #fff;
    ">localhost aja bro</span>
    </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: '',
      emailbordercolor: '',
      erremail: ''
    }
  },
  methods: {
    signin () {
      let obj = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3000/login', obj)
        .then(response => {
          alert('login success')
          console.log(response.data)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('id', response.data.user._id)
          localStorage.setItem('email', response.data.user.email)
          this.$router.push('/timeline')
        })
        .catch(err => {
          alert('login failed')
          console.log(err.message)
        })
    },
    toRegister () {
      this.$router.push('/register')
    },
    isEmailValid: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validateEmail: function () {
      var isEmailValid = this.isEmailValid(this.email)
      if (!isEmailValid) {
        this.emailbordercolor = '2px solid red'
        this.erremail = 'email is invalid'
      } else {
        this.emailbordercolor = ''
        this.erremail = ''
      }
    },
    isPasswordValid: function (password) {
      var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
      return re.test(password)
    },
    validatePassword: function () {
      let isPasswordValid = this.isPasswordValid(this.password)

      if (!isPasswordValid) {
        this.passwordbordercolor = '2px solid red'
        this.errpassword = 'password is invalid'
      } else {
        this.passwordbordercolor = ''
        this.errpassword = ''
      }
    }
  }
}
</script>

<style scoped>
        #body {
                background: linear-gradient(132deg, #f44336, #E91E63, #9C27B0, #673AB7, #3F51B5, #2196F3,#03A9F4, #00BCD4, #009688, #4CAF50, #FFC107, #FF9800, #f44336, #E91E63, #9C27B0, #673AB7, #3F51B5, #2196F3,#03A9F4, #00BCD4, #009688, #4CAF50, #FFC107, #FF9800);
                background-size: 400% 400%;
                animation: BackgroundGradient 30s ease infinite;
            }
            @keyframes BackgroundGradient {
                0% {background-position: 0% 50%;}
                50% {background-position: 100% 50%;}
                100% {background-position: 0% 50%;}
            }
            .baslik
{
    color: #fff;
    text-align: center;
    font-family: 'Fira Sans', sans-serif;
}
.arkalogin
{
    width: 300px;
    text-align: center;
    background: #fff;
    height: 300px;
    padding: 10px;
    margin: 50px auto;
}
.loginbaslik
{
    color: #888888;
    text-align: left;
    font-size: 19px;
    margin-top: 15px;
}
.giris
{
    width: 100%;
    height: 40px;
    margin-top: 10px;
    border: none;
    background: #E5E5E5;
    outline: none;
    padding: 0 10px;
}
.butonlogin
{
    width: 100%;
    margin-top: 10px;
    height: 40px;
    font-weight: bold;
    background: #2196F3;
    border: none;
    color: #fff;
    transition: all 250ms;
}
.butonlogin:hover
{
    background: #1E88E5;
}
#error
{
    color: red;
    float: left;
}
#body
{
    margin: 0;
}
</style>
