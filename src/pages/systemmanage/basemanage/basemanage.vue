<template>
  <div>
     <add :show='show' @hide='hide'>
        <span slot='title'>
          新增基础信息
        </span>
      <addbase slot='form'></addbase>
    </add>
    <list @createnew='createnew' >
      <div slot='search'>
        集团: <select name="" id="">
         
        </select>
        类别: <select name="" id=""></select>
        运维: <select name="" id=""></select>
      </div>
    </list>
  </div>
</template>
<script>
import add from "../components/add/add"
import addbase from "../components/add/addbase"
import list from '../components/list/list'
export default {
  name: "baseinfo",
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
    addbase,
    list
  }
};
</script>
<style>

</style>