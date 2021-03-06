import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Timeline from '@/components/Timeline'
import Visitor from '@/components/Visitor'
import MyUpload from '@/components/MyUpload'
import MyProfile from '@/components/MyProfile'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      meta: {auth: true},
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      meta: {auth: true},
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
      path: '/public/:id',
      name: 'Visitor',
      component: Visitor
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
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.auth)) {
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       next({path: '/'})
//     }
//   }
// })

export default router
