<template>
  <div id="password">
    <div class="form-wrapper">
      <div class="header"><p>修改密码</p></div>
      <div class="main">
        <el-form :model="form">
          <el-form-item label="手机号码">
            <el-input disabled v-model="phone"></el-input>
          </el-form-item>
          <el-form-item label="原密码" prop="oldPassword" :error="oldErr">
            <el-input
              v-model="form.oldPassword"
              clearable
              type="password"
              @blur="validOld"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword" :error="newErr">
            <el-input
              clearable
              type="password"
              v-model="form.newPassword"
              @blur="validNew"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item
            label="重复新密码"
            prop="repeatPassword"
            :error="repeatErr"
          >
            <el-input
              clearable
              v-model="form.repeatPassword"
              type="password"
              @blur="validRepeat"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <el-button type="primary" @click="validAll" :loading="loading"
          >确认修改</el-button
        >
        <el-button @click="$router.push('/')">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from '@/api/user'
import ACTIONS from '@/constants/actions'
export default {
  name: 'Password',
  data: () => {
    return {
      loading: false,
      form: {
        oldPassword: '',
        newPassword: '',
        repeatPassword: ''
      },
      newErr: '',
      oldErr: '',
      repeatErr: ''
    }
  },
  computed: {
    phone () {
      return this.$store.state.user.userInfo.phonenumber
    },
    validPassword () {
      return this.$store.state.user.userInfo.password
    }
  },
  methods: {
    validOld () {
      console.log('validOld')
      if (this.form.oldPassword.length === 0) {
        this.oldErr = '请输入原密码'
      } else if (this.form.oldPassword !== this.validPassword) {
        this.oldErr = '与原密码不一致'
      } else {
        this.oldErr = ''
      }
    },
    validNew () {
      console.log('validNew')
      if (this.form.newPassword.length === 0) {
        this.newErr = '请输入新密码'
      } else if (this.form.newPassword === this.validPassword) {
        this.newErr = '新密码不能与原密码一致'
      } else {
        this.newErr = ''
      }
    },
    validRepeat () {
      console.log('validRepeat')
      if (this.form.repeatPassword.length === 0) {
        this.repeatErr = '请再次输入新密码'
      } else if (this.form.newPassword !== this.form.repeatPassword) {
        this.repeatErr = '两次密码不一致'
      } else {
        this.repeatErr = ''
      }
    },
    validAll () {
      this.loading = true
      this.validOld()
      this.validNew()
      this.validRepeat()
      if (!this.oldErr && !this.newErr && !this.repeatErr) {
        const userInfo = this.$store.state.user.userInfo
        userInfo.password = this.form.newPassword
        console.log('更改密码')
        console.log(userInfo)
        userAPI.updateUser(userInfo).then(
          async () => {
            await this.$store.dispatch(ACTIONS.USER.USERINFO, this.phone)
            this.loading = false
            this.$notify({
              type: 'success',
              title: '修改成功',
              duration: 3 * 1000
            })
            this.$router.push('/')
          },
          err => {
            console.log(err)
            this.loading = false
            this.$notify({
              type: 'error',
              title: '修改失败',
              duration: 3 * 1000
            })
          }
        )
      } else {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#password {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #ecf0f1;
  .form-wrapper {
    box-sizing: border-box;
    width: 632px;
    margin: 16px auto 0 auto;
    background: white;
    .header {
      p {
        display: inline-block;
        padding: 5px 20px;
        margin: 0;
        font-size: 20px;
        color: #fff;
        background-color: #1a56a8;
      }
    }
    .main {
      padding: 8px;
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px;
    }
  }
}
</style>
