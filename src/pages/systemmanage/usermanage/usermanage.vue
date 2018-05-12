<template>
  <div>

    <add :show='show' :form='form' @hide='hide' @success='success'>
        <span slot='title'>
           新建用户配置
        </span>
    </add>
   <list @createnew='createnew' 
         :newBtn='newBtn'
         :delBtn='delBtn'
         :exportBtn='exportBtn'>
      <slot slot='list-title'>
          <tr>
             <th>共{{total}}条</th>
             <th>登陆账号</th>
             <th>所属角色</th>
             <th>所属部门</th>
             <th>职务</th>
             <th>联系人</th>
             <th>联系电话</th>
             <th>操作</th>
          </tr>
      </slot>

      <slot slot='list-body'>
        <tr  v-for='item in result'>
              <td>
              
               {{item.num}}</td>
              <td>{{item.PerName}}</td>
              <td>{{item.RoleName}}</td>
              <td>{{item.DeptName}}</td>
              <td>{{item.JobId}}</td>
              <td>{{item.PerName}}</td>
              <td>{{item.UserPhone}}</td>
              <td>
                  <a class='edit'><span class="fa fa-refresh"></span>修改</a>
                  <a class='del'><span class="fa fa-trash"></span> 删除</a>
              </td>
        </tr>
      </slot>

     <span slot='title'></span>
     <div slot="search" class='search'>
      姓名： <input type="text" v-model='search.PerName'>
      部门名称：<input type="text" v-model='search.DeptName'>
      职务名称：<input type="text" v-model='search.JobName'>
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
    return {
      form:'adduser',
      show:false,
      newBtn:true,
      exportBtn:true,
      delBtn:true,
      result:[],
      search:{
          PerName:'',
          DeptName:'',
          JobName:''
      },
      pagesize:10,
      pageindex:1,
      total:0
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
      var params={
        PerName:this.search.PerName,
        DeptName:this.search.DeptName,
        JobName:this.search.JobName,
        pagesize:this.pagesize,
        pageindex:this.pageindex,
        token:this.$store.state.token
      }

      this.$http.get(this.$api.getuserlist(params)).then(res=>{
           if(res.data.code ===1)
           {
            this.result = res.data.result;
            this.total = res.data.total
           }
      })
    },
    success(){
      this.getlist();
      this.hide();
    }
  },
  mounted(){
    this.getlist();
  },
  components: {
    add,
    list
  }
};
</script>
<style scoped>

</style>