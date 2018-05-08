<template>
  <div>
    <headnav></headnav>
    <sidebar></sidebar>
    <container>
         <baseinfo></baseinfo>
    </container>
   
  </div>
</template>
<script>
import headnav from "../components/headnav";
import sidebar from "../components/sidebar";
import container from "../components/container";
import baseinfo from './baseinfo/baseinfo'
export default {
  name: "basemanage",
  components: {
    headnav,
    sidebar,
    container,
    baseinfo
  }
};
</script>
<style>

</style>