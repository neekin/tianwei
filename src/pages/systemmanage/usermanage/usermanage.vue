<template>
  <div>

    <add :show='show' @hide='hide'>
        <span slot='title'>
           新建用户配置
        </span>
      <adduser slot='form'></adduser>
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
import add from "../components/add/add";
import adduser from "../components/add/adduser";
import list from "../components/list/list";
export default {
  name: "usermanage",
  data(){
    return {show:false}
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
    adduser,
    list
  }
};
</script>
<style>

</style>