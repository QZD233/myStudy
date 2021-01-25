<template>
  <div class="login">
    <login-header class="login-header"></login-header>
    <login-container class="login-container"></login-container>
    <login-footer class="login-footer"></login-footer>
  </div>
</template>

<script>
import LoginHeader from '@/views/Login/components/LoginHeader'
import LoginContainer from '@/views/Login/components/LoginContainer'
import LoginFooter from '@/views/Login/components/LoginFooter'
export default {
  name: 'Login',
  components: {
    [LoginHeader.name]: LoginHeader,
    [LoginContainer.name]: LoginContainer,
    [LoginFooter.name]: LoginFooter
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  .login-header {
    width: 100%;
  }
  .login-container {
    flex-grow: 1;
  }
  .login-footer {
    width: 100%;
  }
}
</style>
