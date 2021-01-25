<template>
  <div id="sidebar">
    <p class="menu-title">职称申报管理</p>
    <el-menu :default-active="active" router>
      <div
        v-for="(item, key) in menuGroup"
        :key="key"
        style="overflow: hidden;"
      >
        <el-menu-item v-if="item.children.length === 0" :index="item.index"
          >{{ item.name }}
        </el-menu-item>
        <el-submenu v-else :index="item.index">
          <template slot="title">{{ item.name }}</template>
          <el-menu-item
            v-for="(item, key) in item.children"
            :index="item.index"
            :key="key"
            >{{ item.name }}</el-menu-item
          >
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    menuGroup: Array
  },
  data: () => {
    return {}
  },
  computed: {
    active () {
      console.log(this.$route.path)
      return this.$route.path
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#sidebar {
  margin: 8px;
  background-color: #16498e;
  .menu-title {
    padding: 4px;
    margin: 0;
    color: white;
    font-size: 18px;
  }
}
</style>
