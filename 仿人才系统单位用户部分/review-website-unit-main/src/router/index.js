import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '@/utils/auth'
import userAPI from '@/api/user'
import store from '@/store/index'
import ACTIONS from '@/constants/actions'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "register" */ '@/views/Register')
  },
  {
    path: '/',
    name: 'HomeLayout',
    component: () =>
      import(/* webpackChunkName: "homelayout" */ '@/layouts/HomeLayout.vue'),
    children: [
      {
        path: '/',
        redirect: '/manage'
      },
      {
        path: '/manage',
        name: 'ManageLayout',
        component: () =>
          import(
            /* webpackChunkName: "ManageLayout" */ '@/layouts/ManageLayout.vue'
          ),
        children: [
          {
            path: '/manage/identify',
            name: 'Identify'
          },
          {
            path: '/manage/reviews',
            name: 'Reviews',
            component: () =>
              import(/* webpackChunkName: "reviews" */ '@/views/Reviews')
          },
          {
            path: '/manage/reconfirm',
            name: 'Reconfirm'
          },
          {
            path: '/manage/lost',
            name: 'lost'
          },
          {
            path: '/manage/record',
            name: 'record'
          },
          {
            path: '/manage/staff',
            name: 'staff'
          },
          {
            path: '/manage/before',
            name: 'before'
          }
        ]
      },
      {
        path: '/notify',
        name: 'Notify'
      },
      {
        path: '/recommend',
        name: 'Recommend'
      },
      {
        path: '/cost',
        name: 'Cost'
      },
      {
        path: '/promise',
        name: 'Promise'
      },
      {
        path: '/help',
        name: 'Help'
      },
      {
        path: '/reviewdetail/:userid/:reviewid',
        name: 'ReviewDetail',
        component: () =>
          import(/* webpackChunkName: "reviewdetail" */ '@/views/ReviewDetail')
      }
    ]
  },
  {
    path: '/userinfo/password',
    name: 'Password',
    component: () =>
      import(/* webpackChunkName: "password" */ '@/views/Userinfo/Password.vue')
  },
  {
    path: '/userinfo/phone',
    name: 'Phone',
    component: () =>
      import(/* webpackChunkName: "phone" */ '@/views/Userinfo/Phone.vue')
  },
  {
    path: '/userinfo/email',
    name: 'Email',
    component: () =>
      import(/* webpackChunkName: "email" */ '@/views/Userinfo/Email.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path !== '/login' && to.path !== '/register') {
    const { phone, password } = auth.getToken()
    userAPI.login(phone, password).then(
      res => {
        if (res.status === 200) {
          next()
        } else {
          next('/login')
        }
      },
      _ => {
        next('/login')
      }
    )
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (store.state.user.userInfo.phonenumber.length === 0) {
    const userAuth = auth.getToken()
    console.log(userAuth)
    if (userAuth.phone) {
      store.dispatch(ACTIONS.USER.USERINFO, userAuth.phone)
    }
  }
  next()
})

export default router
