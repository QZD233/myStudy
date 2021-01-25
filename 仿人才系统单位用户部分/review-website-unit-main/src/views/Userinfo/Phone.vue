<template>
  <div id="phone">
    <div class="form-wrapper">
      <div class="header"><p>修改手机号</p></div>
      <div class="main">
        <el-form :model="form">
          <el-form-item label="旧手机号" prop="oldPhone" :error="oldErr">
            <el-input v-model="form.oldPhone" @blur="validOld"></el-input>
          </el-form-item>
          <el-form-item label="输入验证码" prop="oldCode" :error="oldCodeErr">
            <el-input v-model="form.oldCode" @blur="validOldCode">
              <template v-slot:append>
                <el-button
                  v-if="!oldvalidating"
                  @click="getOldCode('oldvalidating', 'oldtime')"
                  :disabled="oldDisabled"
                  >获取验证码</el-button
                >
                <el-button v-else disabled>({{ oldtime }})获取中</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="新手机号" prop="newPhone" :error="newErr">
            <el-input v-model="form.newPhone" @blur="validNew"></el-input>
          </el-form-item>
          <el-form-item label="输入验证码" prop="newCode" :error="newCodeErr">
            <el-input v-model="form.newCode" @blur="validNewCode">
              <template v-slot:append>
                <el-button
                  v-if="!newvalidating"
                  @click="getOldCode('newvalidating', 'newtime')"
                  :disabled="newDisabled"
                  >获取验证码</el-button
                >
                <el-button v-else disabled>({{ newtime }})获取中</el-button>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <el-button type="primary" :loading="loading" @click="validAll"
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
  name: 'Phone',
  data: () => {
    return {
      loading: false,
      oldvalidating: false,
      oldtime: 30,
      oldDisabled: true,
      newvalidating: false,
      newtime: 30,
      newDisabled: true,
      form: {
        oldPhone: '',
        oldCode: '',
        newPhone: '',
        newCode: ''
      },
      oldErr: '',
      oldCodeErr: '',
      newErr: '',
      newCodeErr: ''
    }
  },
  computed: {
    phone () {
      return this.$store.state.user.userInfo.phonenumber
    }
  },

  methods: {
    getOldCode (validating, time) {
      const interval = setInterval(() => {
        this[validating] = true
        this[time]--
      }, 1000)
      setTimeout(() => {
        clearInterval(interval)
        this[validating] = false
        this[time] = 30
      }, 30 * 1000)
    },
    validOld () {
      const reg = /^1[3-9]\d{9}$/
      if (this.form.oldPhone.length === 0) {
        this.oldDisabled = true
        this.oldErr = '请输入原手机号'
      } else if (!reg.test(this.form.oldPhone)) {
        this.oldDisabled = true
        this.oldErr = '请输入正确的手机号码'
      } else if (this.form.oldPhone !== this.phone) {
        this.oldDisabled = true
        this.oldErr = '原手机号不一致'
      } else {
        this.oldDisabled = false
        this.oldErr = ''
      }
    },
    validOldCode () {
      if (this.form.oldCode.length === 0) {
        this.oldCodeErr = '请输入验证码'
      } else {
        this.oldCodeErr = ''
      }
    },
    validNew () {
      const reg = /^1[3-9]\d{9}$/
      if (this.form.newPhone.length === 0) {
        this.newDisabled = true
        this.newErr = '请输入新手机号'
      } else if (!reg.test(this.form.newPhone)) {
        this.newDisabled = true
        this.newErr = '请输入正确的手机号码'
      } else if (this.form.newPhone === this.phone) {
        this.newDisabled = true
        this.newErr = '新旧手机号一致'
      } else {
        this.newDisabled = false
        this.newErr = ''
      }
    },
    validNewCode () {
      if (this.form.newCode.length === 0) {
        this.newCodeErr = '请输入验证码'
      } else {
        this.newCodeErr = ''
      }
    },
    validAll () {
      this.validOld()
      this.validOldCode()
      this.validNew()
      this.validNewCode()
      if (
        !this.oldErr &&
        !this.oldCodeErr &&
        !this.newErr &&
        !this.newCodeErr
      ) {
        const userInfo = this.$store.state.user.userInfo
        userInfo.phonenumber = this.form.newPhone
        console.log('更改手机号')
        console.log(userInfo)
        userAPI.updateUser(userInfo).then(
          async () => {
            await this.$store.dispatch(
              ACTIONS.USER.USERINFO,
              this.form.newPhone
            )
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
#phone {
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
