<template>
  <div id="manage-layout">
    <div class="sidebar">
      <sidebar :menuGroup="menuGroup"></sidebar>
    </div>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'ManageLayout',
  components: {
    [Sidebar.name]: Sidebar
  },
  data: () => {
    return {
      menuGroup: [
        {
          index: '/manage',
          name: '当年职称申报管理',
          children: [
            {
              index: '/manage/identify',
              name: '职称认定',
              children: []
            },
            {
              index: '/manage/reviews',
              name: '职称评审',
              children: []
            },
            {
              index: '/manage/reconfirm',
              name: '重新确认',
              children: []
            },
            {
              index: '/manage/lost',
              name: '遗失补办',
              children: []
            },
            {
              index: '/manage/record',
              name: '评审公示记录',
              children: []
            }
          ]
        },
        {
          index: '/manage/staff',
          name: '工作人员操作管理',
          children: []
        },
        {
          index: '/manage/before',
          name: '历年申报情况',
          children: []
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#manage-layout {
  width: 100%;
  height: calc(100% - 88px);
  .sidebar {
    float: left;
    box-sizing: border-box;
    width: 200px;
    height: 100%;
  }
  .content-wrapper {
    box-sizing: border-box;
    height: 100%;
    padding-left: 200px;
    padding-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
}
</style>
