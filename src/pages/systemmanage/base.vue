<template>
  <div>
    <headnav></headnav>
    <sidebar></sidebar>
    <container>
         <basemanage></basemanage>
    </container>
    <add></add>
  </div>
</template>
<script>
import headnav from "../components/headnav";
import sidebar from "../components/sidebar";
import container from "../components/container";
import basemanage from './basemanage/basemanage'
import add from './components/add'
export default {
  name: "base",
  components: {
    headnav,
    sidebar,
    container,
    basemanage,
    add
  }
};
</script>
<style>

</style>