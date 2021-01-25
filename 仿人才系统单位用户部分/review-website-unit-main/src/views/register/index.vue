<template>
  <div id="register">
    <el-form
      ref="registerForm"
      :model="registerForm"
      class="register-form"
      :rules="validateRules"
    >
      <el-form-item label="单位用户名" prop="UnitUsername">
        <el-input v-model="registerForm.UnitUsername" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="registerForm.password"
          type="password"
          show-password
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password2" :error="password2Error">
        <el-input
          v-model="registerForm.password2"
          type="password"
          @blur="repeatPassword"
          show-password
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerForm.email" clearable></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="phonenumber">
        <el-input v-model="registerForm.phonenumber" clearable></el-input>
      </el-form-item>
      <el-form-item class="register-btn">
        <el-button icon="el-icon-d-arrow-left" @click="goLogin"
          >返回登陆</el-button
        >
      </el-form-item>
      <el-form-item class="register-btn">
        <el-button
          type="primary"
          style="position: absolute; right: 0;"
          @click="register"
          :loading="loading"
          >立即注册</el-button
        >
      </el-form-item>
    </el-form>
    <el-dialog title="注册须知" :visible.sync="showRegisterInfo" width="40%">
      <div class="info-body">
        <p>
          <span class="info-badge">1</span
          >进行证书审验的专业技术人员，必须先进行注册，注册后才能进行证书审验。
        </p>
        <p>
          <span class="info-badge">2</span
          >请专业技术人员认真、如实填写有关个人信息。其中姓名、身份证号作为证书审验基本信息，手机号码和邮箱作为专业技术人员登录系统和找回密码工具，一旦确认即不可随意更改。
        </p>

        <p>
          <span class="info-badge">3</span
          ><b>相同身份证号，姓名，手机号码和邮箱只允许注册一次。</b>
        </p>
        <p>
          <span class="info-badge">4</span
          >账号、密码、邮箱、安全问题和安全答案要妥善保管，如密码丢失，可通过注册时预留邮箱、安全问题和安全答案找回密码。账号和密码如被他人盗用责任自负
        </p>
        <p>
          <span class="info-badge">5</span>注册时身份证号错误需要更改的，请致电
          0771-5505013 联系客服处理。
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="showRegisterInfo = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import moment from 'moment'
import ACTIONS from '@/constants/actions'
export default {
  name: 'Register',
  data: () => {
    const validEmail = (rule, value, callback) => {
      const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的邮箱地址'))
      }
    }
    const validPhone = (rule, value, callback) => {
      const reg = /^1[3-9]\d{9}$/
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号码'))
      }
    }
    return {
      loading: false,
      password2Error: '',
      showRegisterInfo: false,
      registerForm: {
        UnitUserid: 0,
        UnitUsername: '',
        password: '',
        password2: '',
        email: '',
        phonenumber: '',
        headphoto: '',
        createdate: ''
      },
      passwordValidation: '',
      validateRules: {
        UnitUsername: [{ required: true, message: '单位用户名不能为空' }],
        password: [
          { required: true, message: '密码不为空', trigger: 'blur' },
          {
            min: 6,
            max: 16,
            message: '密码为6到16个字符',
            trigger: 'blur'
          }
        ],
        email: [
          { required: true, message: '邮箱不能为空' },
          {
            validator: validEmail,
            trigger: 'blur'
          }
        ],
        phonenumber: [
          { required: true, message: '电话号码不能为空' },
          {
            validator: validPhone,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted () {
    this.showRegisterInfo = true
  },
  methods: {
    repeatPassword () {
      console.log(this.registerForm.password2.length)
      if (this.registerForm.password2.length === 0) {
        this.password2Error = '请再次输入密码'
      } else {
        if (this.registerForm.password !== this.registerForm.password2) {
          this.password2Error = '两次密码输入不一致'
        } else {
          this.password2Error = ''
        }
      }
    },
    register () {
      this.loading = true
      this.repeatPassword()
      if (this.password2Error.length !== 0) {
        this.loading = false
        this.$notify({
          type: 'error',
          message: '注册失败',
          duration: 3000
        })
        return null
      }
      this.$refs.registerForm.validate(validResult => {
        if (validResult) {
          this.registerForm.createdate = moment().format('YYYY-MM-DD HH:mm:ss')
          this.$store.dispatch(ACTIONS.USER.REGISTER, this.registerForm).then(
            res => {
              const resDate = res.data
              if (res.status === 200) {
                console.log('注册成功')
                console.log(resDate)
                this.$notify({
                  type: 'success',
                  message: '注册成功',
                  duration: 3000
                })
                this.$router.push('/')
              } else {
                this.$notify({
                  type: 'error',
                  message: '注册失败',
                  duration: 3000
                })
              }
              this.loading = false
            },
            err => {
              console.log(err)
              this.$notify({
                type: 'error',
                message: '注册失败',
                duration: 3000
              })
              this.loading = false
            }
          )
        } else {
          this.loading = false
          this.$notify({
            type: 'error',
            message: '注册失败',
            duration: 3000
          })
        }
      })
    },
    goLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
#register {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #ecf0f1;
  overflow: hidden;
  .register-form {
    width: 632px;
    padding: 16px 16px;
    margin: 16px auto 0 auto;
    box-shadow: 0 0 3px #888888;
    background: white;
    .register-btn {
      display: inline-block;
      width: 50%;
    }
  }
  .info-body {
    .info-badge {
      display: inline-block;
      min-width: 10px;
      padding: 3px 4px;
      margin-right: 4px;
      font-size: 12px;
      font-weight: 700;
      line-height: 1;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      background-color: #777;
      border-radius: 10px;
    }
    p {
      margin: 0 0 10px;
      font-size: 14px;
      line-height: 2;
    }
  }
}
</style>
