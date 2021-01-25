<template>
  <div id="login-container">
    <div class="main">
      <el-alert type="info" show-icon>
        <template v-solt:title>
          <p class="alert-title">成功提示的文案</p>
          <p class="alert-desc">
            为了获得更好的用户体验，请使用以下浏览器：<a
              target="_blank"
              rel="noopener"
              href="https://www.google.cn/chrome/"
              >谷歌浏览器(Chrome)
            </a>
            ,
            <a
              target="_blank"
              rel="noopener"
              href="https://www.mozilla.org/zh-CN/firefox/new/"
              >火狐浏览器(Firefox)
            </a>
            ,
            <a target="_blank" rel="noopener" href="http://se.360.cn/"
              >360安全浏览器</a
            >
          </p>
        </template>
      </el-alert>
      <el-row type="flex">
        <el-col style="align-self: center;" :span="12">
          <el-form
            ref="loginForm"
            class="login-form"
            :model="loginForm"
            :rules="loginFormRules"
          >
            <el-form-item prop="phone">
              <el-input v-model="loginForm.phone" type="tel" clearable>
                <template v-slot:prepend>手机号码</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                show-password
                clearable
              >
                <template v-slot:prepend>密码</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                class="login-button"
                type="primary"
                :loading="loading"
                @click="login"
                >登录</el-button
              >
            </el-form-item>
            <el-form-item>
              <el-button
                class="register-button"
                type="primary"
                plain
                @click="goRegister"
                >注册</el-button
              >
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <div class="adv">
            <a href="#">
              <el-image :src="loginAd5"></el-image>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import loginAd5 from '@/assets/images/login_ad_5.jpg'
import ACTIONS from '@/constants/actions'
export default {
  name: 'LoginContainer',
  data: () => {
    const validPhone = (rule, value, callback) => {
      const reg = /^1[3-9]\d{9}$/
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号码'))
      }
    }
    return {
      loginAd5,
      loading: false,
      loginForm: {
        phone: '',
        password: ''
      },
      loginFormRules: {
        phone: [
          { required: true, message: '电话号码不能为空' },
          {
            validator: validPhone,
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '密码不为空', trigger: 'blur' },
          {
            min: 6,
            max: 16,
            message: '密码为6到16个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$store.dispatch(ACTIONS.USER.LOGIN, this.loginForm).then(
        res => {
          const resData = res.data
          if (res.status === 200 && resData) {
            console.log('登录成功')
            console.log(resData)
            this.$notify({
              title: '登陆成功',
              type: 'success',
              duration: 3000
            })
            this.$router.push('/')
          } else {
            this.$notify({
              title: '登陆失败',
              type: 'error',
              duration: 3000
            })
          }
          this.loading = false
        },
        err => {
          console.log(err)
          this.$notify({
            title: '登陆失败',
            type: 'error',
            duration: 3000
          })
          this.loading = false
        }
      )
    },
    goRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
#login-container {
  padding: 40px 0;
  margin: 0;
  .main {
    width: 980px;
    margin: 0 auto;
    .el-alert {
      margin-bottom: 27px;
      color: #1a56a8;
      .alert-title {
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        color: #1a56a8;
      }
      .alert-desc {
        font-size: 14px;
        color: #1a56a8;
      }
    }
    .login-form {
      .login-button {
        width: 100%;
      }
      .register-button {
        width: 100%;
      }
    }
    .adv {
      border-left: 1px solid black;
      padding: 40px 0 40px 20px;
      margin-left: 20px;
    }
  }
}
</style>
