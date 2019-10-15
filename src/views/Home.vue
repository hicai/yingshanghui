<template>
  <div class="home">   
   <div class="v-head">
      <v-head></v-head>
   </div>
   <div class="v-contain">
     <div class="v-side">
        <v-sidebar></v-sidebar>
     </div>
     <div class="v-main">
      <transition name="move" mode="out-in">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
       </transition> 
     <div class="v-footer">
      <v-footer></v-footer>
      </div>
     </div>

   </div>

  </div>
</template>

<script>
import vHead from '@/components/common/head.vue'
import vSidebar from '@/components/common/Sidebar.vue'
import vFooter from '@/components/common/footer.vue'
export default {
  name: 'home',
  components: {
    vHead,
    vSidebar,
    vFooter
  }
}
</script>

<style lang="scss" scoped>
.v-contain{
  overflow: hidden;
}
.v-side{
//  width:10%;
//   float: left;
position: absolute;
width: 250px;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow-x:hidden;
    overflow-y:hidden;
}
.v-main{
  position: absolute;
  // width:90%;
  float: left;
  left: 250px;
    right: 0;
    top: 60px;
    bottom: 0;
}
</style>