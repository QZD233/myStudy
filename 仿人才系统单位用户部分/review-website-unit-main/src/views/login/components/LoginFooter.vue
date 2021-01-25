<template>
  <div id="login-footer">
    <ul class="footer-top">
      <li>
        主办：广西壮族自治区职称改革工作领导小组办公室，承办：广西流动人员职称改革办公室
      </li>
      <li>
        工作时间：周一至周五，09:00-12:00，14:00-18:00 职称热线：0771-5505013
      </li>
    </ul>
    <ul class="footer-bottom">
      <li>
        <el-image
          style="width: 20px; height: 20px;"
          :src="gonganbeianhao"
        ></el-image>
        桂公网安备 45010302001627号&nbsp;&nbsp;&nbsp;
        <a
          href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action"
          target="_blank"
          style="color: rgb(255, 255, 255);"
          >桂ICP备05004874号</a
        >
      </li>
      <li>通讯地址：广西南宁金洲路33号广西人才大厦三楼301 邮编：530021</li>
    </ul>
  </div>
</template>

<script>
import gonganbeianhao from '@/assets/images/gonganbeianhao.png'
export default {
  name: 'LoginFooter',
  data: () => ({
    gonganbeianhao
  })
}
</script>

<style lang="scss" scoped>
#login-footer {
  box-sizing: border-box;
  width: 100%;
  padding: 0 400px;
  margin: 0;
  font-size: 14px;
  background: #103587;
  ul {
    li {
      color: white;
      list-style: none;
      a {
        text-decoration: none;
      }
    }
  }
  .footer-top {
    li {
      line-height: 2.2;
      list-style: none;
    }
  }
  .footer-bottom {
    li {
      padding-left: 20px;
      line-height: 2.2;
      list-style: none;
    }
  }
}
</style>
