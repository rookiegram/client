import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Timeline from '@/components/Timeline'
import MyUpload from '@/components/MyUpload'
import MyProfile from '@/components/MyProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/myupload',
      name: 'MyUpload',
      component: MyUpload
    },
    {
      path: '/myprofile',
      name: 'MyProfile',
      component: MyProfile
    }
  ]
})
