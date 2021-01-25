<template>
  <div id="home-header">
    <div class="header-logo">
      <el-image :src="logoUrl"></el-image>
      <ul>
        <li>
          <a href="#" @click="requestFullscreen"
            ><i class="el-icon-full-screen"></i
          ></a>
        </li>
        <li>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-setting"
                ><span class="el-icon-caret-bottom"></span
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-edit-outline"
                ><router-link to="/userinfo/password"
                  >修改密码</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-edit-outline"
                ><router-link to="/userinfo/phone"
                  >修改手机号码</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-edit-outline"
                ><router-link to="/userinfo/email"
                  >修改邮箱</router-link
                ></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <a href="#" @click="quit"><i class="el-icon-switch-button"></i></a>
        </li>
      </ul>
    </div>
    <div class="header-nav">
      <ul>
        <li><router-link to="/manage">职称申报管理</router-link></li>
        <li><router-link to="/notify">通知公告</router-link></li>
        <li><router-link to="/recommend">评委专家推荐</router-link></li>
        <li><router-link to="/cost">费用管理</router-link></li>
        <li><router-link to="/promise">单位承诺书</router-link></li>
        <li><router-link to="/help">操作说明</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import ACTIONS from '@/constants/actions'
import logoUrl from '@/assets/images/logo_zc.png'
import tools from '@/utils/tools'
export default {
  name: 'HomeHeader',
  data: () => {
    return {
      logoUrl
    }
  },
  methods: {
    requestFullscreen () {
      if (tools.isFullScreen()) {
        tools.exitFullscreen()
      } else {
        tools.fullscreen(document.body)
      }
    },
    quit () {
      this.$store.dispatch(ACTIONS.USER.LOGOUT)
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #606266;
}
#home-header {
  width: 100%;
  height: 88px;
  background-color: #1a56a8;
  .header-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      li {
        list-style: none;
        i {
          margin-left: 16px;
          font-size: 24px;
          color: white;
          &:hover {
            color: #337ab7;
          }
        }
      }
    }
  }
  .header-nav {
    background-color: #16498e;
    ul {
      display: flex;
      padding: 4px 0;
      margin: 0;
      li {
        margin-left: 64px;
        list-style: none;
        a {
          text-decoration: none;
          color: white;
          &:hover {
            color: #32c6d0;
          }
        }
      }
    }
  }
}
</style>
