<template>
  <div>
  <add :show='show' @hide='hide' :formwidth='394'>
        <span slot='title'>
           新建角色配置
        </span>
      <addrole slot='form'></addrole>
    </add>
   <list @createnew='createnew'>
     <span slot='title'></span>
     <div slot="search">
      角色名： <input type="text">
      选择时间：<input type="datetime">
     </div>
   </list>
  </div>
</template>
<script>
import add from "../components/add/add"
import addrole from "../components/add/addrole"
import list from "../components/list/list"
export default {
  name: "rolemanage",
  data() {
    return { show: false };
  },
  methods: {
    createnew() {
      this.show = true;
    },
    hide() {
      this.show = false;
    }
  },
  components: {
    add,
    addrole,
    list
  }
};
</script>
<style>
</style>