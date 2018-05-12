<template>
  <div>
  <add :show='show' :form='form' @hide='hide' :formwidth='394' @success='success'>
        <span slot='title'>
           新建角色配置
        </span>
    </add>


   <list @createnew='createnew'
         :newBtn='newBtn'
         :delBtn='delBtn'
         :exportBtn='exportBtn'
   >
      <slot slot='list-title'>
          <tr>
             <th>共有{{total}}条</th>
             <th>角色名称</th>
             <th>创建者</th>
             <th>权限</th>
             <th>创建时间</th>
             <th>操作</th>
          </tr>
      </slot>

      <slot slot='list-body'>
        <tr  v-for='item in result'>
              <td>{{item.RoleId}}</td>
              <td>{{item.RoleName}}</td>
              <td>{{item.UserName}}</td>
              <td>{{item.MenuName}}</td>
              <td>{{item.CtrDate}}</td>
              <td><a>修改</a><a>删除</a></td>
        </tr>
      </slot>
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
    return {show:false,
      newBtn:true,
      exportBtn:true,
      delBtn:true,
      result:[],
      total:0,
      form:'addrole',
      pageindex:1,
      pagesize:10,
      search:{
          RoleName:'',
          start:'',
          end:''
      },

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
      var params = {
          RoleName:this.search.RoleName,
          start:this.search.start,
          end:this.search.end,
          pagesize:this.pagesize,
          pageindex:this.pageindex,
          token:this.$store.state.token
      }
      var _this = this;
      this.$http.get(this.$api.getrolelist(params)).then(res=>{
               if(res.data.code==1)
               {
                      this.result = res.data.result
                      this.total = res.data.total
               }
      })
    },
    success(){
         this.getlist();
         this.hide();
    },
  },
  mounted(){
      this.getlist();
      console.log(this.result);
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