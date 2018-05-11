<template>
  <div>
     <add :show='show' @hide='hide'>
        <span slot='title'>
          新增基础信息
        </span>
      <addbase slot='form'></addbase>
    </add>
    <list 
    @createnew='createnew' 
    :newBtn='newBtn'
    :importBtn='importBtn'
    >
      <div slot='search'>
        集团: <select name="" id="">
         
        </select>
        类别: <select name="" id=""></select>
        运维: <select name="" id=""></select>
      </div>
      <slot slot='list-title'>
          <tr>
              <th>ID</th>
              <th>集团名称</th>
              <th>SHOPID</th>
              <th>城市分布</th>
              <th>商圈特性</th>
              <th>商业体类别</th>
              <th>平台</th>
              <th>运维</th>
              <th>备注</th>
              <th>操作</th>
          </tr>
        
      </slot>

    </list>
  </div>
</template>
<script>
import add from "../components/add/add";
import addbase from "../components/add/addbase";
import list from "../components/list/list";
export default {
  name: "baseinfo",
  data() {
     return {show:false,newBtn:true,importBtn:true,delBtn:false}
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