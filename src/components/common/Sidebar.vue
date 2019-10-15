<template>
  <div class="sidebar_wrap">
    <el-menu
      default-active="2"
       :default-openeds="['1']"
      class="sidebar"
       background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-zoom-in"></i>
            <span>查看</span>
            </template>
             <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link to="./search">查看名单
                  </router-link>
                  </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
        <i class="el-icon-circle-plus-outline"></i>
        <span slot="title">
          <router-link to="./add">
             新增
          </router-link>  
        </span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-download"></i>
        <span slot="title">导入</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-upload2"></i>
        <span slot="title">导出</span>
      </el-menu-item>
     <el-submenu index="5">
            <template slot="title">
            <i class="el-icon-document"></i>
             <span>门禁数据</span>
            </template>
             <el-menu-item-group>
                <el-menu-item index="5-1">实时数据</el-menu-item>
            </el-menu-item-group>
             <el-menu-item-group>
                <el-menu-item index="5-2">详细数据</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
             <el-submenu index="6">
            <template slot="title">
            <i class="el-icon-user"></i>
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
    height: 700px;
    width:100%;
    a{
      color:#fff;
      text-decoration: none;
       &.active {
        color: rgb(255, 208, 75);
      }
    }
}
</style>