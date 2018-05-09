<template>
  <div>
    <headnav></headnav>
    <sidebar></sidebar>
    <container>
         <basemanage></basemanage>
    </container>
   
  </div>
</template>
<script>
import headnav from "../components/headnav";
import sidebar from "../components/sidebar";
import container from "../components/container";
import basemanage from './basemanage/basemanage'
export default {
  name: "base",
  components: {
    headnav,
    sidebar,
    container,
    basemanage
  }
};
</script>
<style>

</style>