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
    :exportBtn='exportBtn'
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

      <slot slot='list-body'>
        <tr  v-for='item in result'>
             <!--  <td>{{item.num}}</td>
              <td>{{item.GroupName}}</td>
              <td>{{item.SHOPID}}</td>
              <td>{{item.DeptName}}</td>
              <td>{{item.JobId}}</td>
              <td>{{item.PerName}}</td>
               <td>{{item.UserPhone}}</td> -->
              <td><a>修改</a><a>删除</a></td>
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
     return {show:false,
      newBtn:true,
      exportBtn:true,
      delBtn:false,
      search:{
              GroupName:'',
              BusCategoryID:'',
              Operation:'',
              },
              pagesize:10,
              pageindex:1,
             
       result:[]
        }
  },
  methods: {
    createnew() {
      this.show = true;
    },
    hide() {
      this.show = false;
    },
    getlist(){
       // http://121.201.14.250:83/MBase/getShopList?GroupName=&BusCategoryID=&Operation=&pagesize=10&pageindex=1&token=FBFF067233A31ED094FB7B6EA306C8ACACA46950308B6920DFD3046477DB5BA1
         var parasm = {
           token:this.$store.state.token,
           pageindex:this.pageindex,
           pagesize:this.pagesize,
           BusCategoryID:this.search.BusCategoryID,
           GroupName:this.search.GroupName,
           Operation:this.search.Operation
         }
         this.$http.get(this.$api.getshoplist(parasm)).then((res)=>{
             if(res.data.code==1)
             {
              this.result = res.data.result
             }
         })
    }
  },
  mounted(){
    this.getlist();
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