<template>
    <div class='list'>
         <div class="search">
            <div>
                枪ID  <input type="text" v-model='search.camid'>
            </div>
            <div>
                店铺名称 <input type="text" v-model='search.shopname'>
            </div>
            <div>
                类型 <select name="" id="" v-model='search.warmtype'>
                    <option value="">请选择</option>
                    <option value="1">数据为零</option>
                    <option value="2">数据差异</option>
                </select>
            </div>
            <div>
                状态 <select name="" id="" v-model='search.wStatus'>
                    <option value="">请选择</option>
                    <option value="0">未维护</option>
                      <option value="1">已维护</option>
                </select>
            </div>
            <div>
                所属 <select name="" id="" v-model='search.SysVersionID'>
                    <option value="">请选择</option>
                       <option value="1">购物中心2.0</option>
                          <option value="2">购物中心4.0</option>
                             <option value="3">购物中心6.0</option>
                               <option value="3">我店1.0</option>
                </select>
            </div>
            <div></div>
            <div>

            </div>
            <div>
               <!-- <button @click='exportECL'>导出</button> -->
               <button @click='getlist'>查询</button>
            </div>
         </div>
         <div class="table">
             <table border=1  cellpadding=10 cellspacing=0>
                 <tr>
                     <th>ID</th>
                     <th>预警类型</th>
                     <th>所属</th>
                     <th>店铺名称</th>
                     <th>枪/店铺ID</th>
                     <th width='220'>门名称</th>
                     <th>IP</th>
                     <th>时间</th>
                     <th>状态</th>
                 </tr>
                 <tr v-for='item in list' :key='item.id'>
                    <td>{{item.id}}</td>
                    <td>{{item.warmtypeDesc}}</td>
                    <td>{{item.SysVersion}}</td>
                    <td>{{item.shopname}}</td>
                    <td>{{item.camid}}</td>
                    <td>{{item.doorname}}</td>
                    <td>{{item.IP}}</td>
                    <td>{{item.warmdate | fmt}}</td>
                    <td>{{item.wStatusDesc}}</td>
                 </tr>
             </table>
         </div>
    </div>
</template>
<script>
export default {
  props: ["list", "search"],
  filters: {
    fmt: function(value) {
      console.log(value);
      var date = new Date(value);
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    }
  },
  methods: {
    getlist() {
      console.log(this.search);
      this.$emit("getlist");
    },
    exportECL(){
        this.$emit('exportECL');
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  background-color: #fff;
  margin-top: 4px;
  padding-top: 25px;
  .search {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    div {
      width: 25%;
      height: 50px;
      button {
        width: 96px;
        height: 38px;
        background: #245ee2;
        border-radius: 3px;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        color: #ffffff;
        border: none;
        outline: none;
        line-height: 38px;
        margin-left: 20px;
      }
    }
    select,
    input {
      width: 200px;
      height: 32px;
      border-radius: 0;
    }
  }
  .table {
    table {
      width: 100%;
      th {
        background-color: #fcfcfc;
        font-size: 18px;
      }
      td,
      th {
        text-align: center;
        height: 40px;
      }
      td {
        font-size: 16px;
      }
    }
  }
}
</style>
