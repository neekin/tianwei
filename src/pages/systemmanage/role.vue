<template>
  <div>
    <headnav></headnav>
    <sidebar></sidebar>
    <container>
         <rolemanage></rolemanage>
    </container>
   
  </div>
</template>
<script>
import headnav from "../components/headnav";
import sidebar from "../components/sidebar";
import container from "../components/container";
import rolemanage from './rolemanage/rolemanage'
export default {
  name: "role",
  components: {
    headnav,
    sidebar,
    container,
    rolemanage
  }
};
</script>
<style>

</style>