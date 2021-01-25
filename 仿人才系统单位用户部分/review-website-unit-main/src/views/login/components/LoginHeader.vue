<template>
  <div id="login-header">
    <el-image :src="logo"></el-image>
    <el-image style="width: 200px; height: 56px;" :src="help"></el-image>
  </div>
</template>

<script>
import logo from '@/assets/images/logo_login_dw.png'
import help from '@/assets/images/help.png'
export default {
  name: 'LoginHeader',
  data: () => ({
    logo,
    help
  })
}
</script>

<style lang="scss" scoped>
#login-header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #fff;
  box-shadow: 0 0 5px 5px #eee;
}
</style>
