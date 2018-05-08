<template>
  <div>
    <headnav></headnav>
    <sidebar></sidebar>
    <container>
         <usermanage></usermanage>
    </container>
   <!-- <add>新增消息</add> -->
 
  </div>
</template>
<script>
import headnav from "../components/headnav";
import sidebar from "../components/sidebar";
import container from "../components/container";
import usermanage from './usermanage/usermanage'
import add from './components/add'
export default {
  name: "user",
  components: {
    headnav,
    sidebar,
    container,
    usermanage,
    add
  },
  methods:{

  }
};
</script>
<style>

</style>