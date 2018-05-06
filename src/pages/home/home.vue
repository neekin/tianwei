<template>
  <div>
    <headnav></headnav>

    <leftnav></leftnav>
    <container></container>
   
  </div>
</template>
<script>
import headnav from "./components/headnav";
import leftnav from "./components/leftnav";
import container from "./components/container";
export default {
  name: "home",
  components: {
    headnav,
    leftnav,
    container
  }
};
</script>
<style>

</style>
