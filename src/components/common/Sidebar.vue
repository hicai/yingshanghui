<template>
  <div class="sidebar_wrap">
    <el-menu
      default-active="2"
      :collapse="collapse"
      class="sidebar"
    >
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
            </template>
             <el-menu-item-group>
                <el-menu-item index="1-1">查看名单</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
        <i class="el-icon-setting"></i>
        <span slot="title">新增</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导入</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导出</span>
      </el-menu-item>
     <el-submenu index="5">
            <template slot="title">
            <i class="el-icon-location"></i>
             <span>门禁数据</span>
            </template>
             <el-menu-item-group>
                <el-menu-item index="5-1">实时数据</el-menu-item>
            </el-menu-item-group>
             <el-menu-item-group>
                <el-menu-item index="5-1">详细数据</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
             <el-submenu index="6">
            <template slot="title">
            <i class="el-icon-location"></i>
             <span>权限管理</span>
            </template>
             <el-menu-item-group>
                <el-menu-item index="6-1">管理员列表</el-menu-item>
            </el-menu-item-group>
             <el-menu-item-group>
                <el-menu-item index="6-2">新增管理员</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="6-3">修改密码</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="6-4">退出登录</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.sidebar{
    overflow: hidden;
}
</style>