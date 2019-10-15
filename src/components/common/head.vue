<template>
  <div class="head">
    <div class="head_logo">赢商会会务管理系统</div> 
    <div class="head_meun">
        <el-dropdown>
            <span class="el-dropdown-link">
                用户名<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

};
</script>
<style lang="scss" scoped>
 .head{
    width: 100%;
    height: 60px;
    background: #8672ad;
    overflow: hidden;
    .head_logo{
       float: left;
       line-height: 60px;
       margin-left: 50px;
       color:#fff;
    }
    .head_meun{
        float: right;
        margin-right: 50px;
        line-height: 60px;
    }
    .el-dropdown-link{
        color:#fff;
    }
 }

</style>
