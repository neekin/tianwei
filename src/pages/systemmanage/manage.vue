<template>
  <div>
    <headnav></headnav>
    <sidebar></sidebar>
    <container>
      <component :is="comid"></component>
    </container>
  </div>
</template>
<script>
import headnav from "../components/headnav";
import sidebar from "../components/sidebar";
import container from "../components/container";
import basemanage from './basemanage/basemanage'
import role from './rolemanage/rolemanage'
import user from './usermanage/usermanage'
export default {
  data(){
    return{
      comid:'user'
    }
  },
  components: {
    headnav,
    sidebar,
    container,
    basemanage,
    role,
    user
  },
  mounted(){
    this.comid = this.$route.name
  },
  watch:{
    '$route'(){
      this.comid = this.$route.name
    }
  }
};
</script>
<style>

</style>