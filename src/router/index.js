import Vue from 'vue'
import Router from 'vue-router'

 const Login=()=>import('views/login/Login')
 const Register=()=>import('views/login/childComp/Register')
 const ChangePassword=()=>import('views/login/childComp/ChangePassword')
 const FirstPage=()=>import('views/firstpage/FirstPage')
Vue.use(Router)
  

const routes =[
  {
    path: '',
   redirect:'/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/login/register',
    component:Register
  },
  {
    path:'/login/changepassword',
    component:ChangePassword
  },
  {
    path:'/homepage',
    component:FirstPage
  },
]

const router = new Router ({
  routes,
  mode:'history'
})

export default router