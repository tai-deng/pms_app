<!-- 主导航页面 -->
<template>
  <div class="container-theme-nav-page">
    <div class="wrapper">

      <!-- 侧边用户中心 -->
      <transition name="menu-fade">
        <div class="menu" v-if="isShowMenu" @click="close">
           <user></user>
        </div>
      </transition>


      <div  class="index">
        <!-- 页面 -->
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>


        <!-- 底部主导航 -->
        <v-foot></v-foot>
      </div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
// vuex
import { mapMutations } from "vuex"
//组件
import vFoot from "./components/footer"
import user from '@/components/user/user'

export default {
  data() {
    return {
    };
  },
  computed:{
    /**
     * 侧边栏用户中心是否打开
     */
    isShowMenu(){
      return this.$store.getters.getIsShowMenu
    }
  },
  components: {
    vFoot,user
  },
  methods:{
    close(){
      //关闭侧边栏
      this.upIsShowMenu(false)
    },
    ...mapMutations({
      upIsShowMenu: "IS_SHOW_MENU"
    })
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-theme-nav-page
  width 750px
  overflow hidden
  .wrapper
    width 1350px
    height 100%
    display flex
    .menu
      width 600px
      height 100%
      z-index 999
      overflow hidden
      background-color white
    .index
      width 750px
      height 100%
</style>
<style>
.menu-fade-enter,.menu-fade-leave-to{
  width: 0px !important;
}
.menu-fade-enter-active,.menu-fade-leave-active{
  transition:width .3s
}
.menu-fade-enter-to,.menu-fade-leave{
  width: 600px;
}
.index {
  position: relative;
}
</style>
