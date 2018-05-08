<template>
  <div>
  <add :show='show' @hide='hide'>
        <span slot='title'>
           新建角色配置
        </span>
      <addrole slot='form'></addrole>
    </add>
   <list @createnew='createnew'>
     <span slot='title'></span>
     <div slot="search">
      姓名： <input type="text">
      部门名称：<input type="text">
      职务名称：<input type="text">
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