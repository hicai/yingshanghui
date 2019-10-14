<template>
  <div class="home">   
  <el-container direction="vertical">
        <v-head></v-head>
      <el-container>
        <el-aside>
             <v-sidebar></v-sidebar>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import vHead from '@/components/common/head.vue'
import vSidebar from '@/components/common/Sidebar.vue'
export default {
  name: 'home',
  components: {
    vHead,
    vSidebar
  }
}
</script>

<style lang="scss" scoped>

</style>