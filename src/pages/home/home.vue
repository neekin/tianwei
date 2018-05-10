<template>
  <div>
    <headnav></headnav>

    <sidebar></sidebar>
    <container>
      <!-- <component :is='baseinfo'></component> -->
    </container>
  </div>
</template>
<script>
import headnav from "../components/headnav"
import sidebar from "../components/sidebar"
import container from "../components/container"
export default {
  name: "home",
  components: {
    headnav,
    sidebar,
    container
  }
};
</script>
<style>

</style>
