<template>
  <div>

    <add :show='show' :form='form' @hide='hide' @success='success' :edit='edit'>
        <span slot='title'>
           {{formtitle}}
        </span>
    </add>
   <list @createnew='createnew' 
         @search='getlist'
          @delitems='delitems'
         @exportitems='exportitems'
         :newBtn='newBtn'
         :delBtn='delBtn'
         :exportBtn='exportBtn'
         @goPage='goPage'
         >
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
        <tr  v-for='item in result' :key='item.num' >
              <td>
                 <div class="checkbox">
                <input type="checkbox" :value='item.UserId' v-model='ids'>
                <span class='fa fa-check'></span>
                </div>
               {{item.num}}</td>
              <td>{{item.UserName}}</td>
              <td>{{item.RoleName}}</td>
              <td>{{item.DeptName}}</td>
              <td>{{item.JobName}}</td>
              <td>{{item.PerName}}</td>
              <td>{{item.UserPhone}}</td>
              <td>
                   <a class='edit' @click="edititem(item)"><span class="fa fa-refresh"></span>修改</a>
                   <a class='del' @click='delitems(item.UserId)'><span class="fa fa-trash"></span> 删除</a>
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
      <notice :notice='noticeshow' :next='next'  @hide='hide'></notice>
  </div>
</template>
<script>
import add from "@/pages/components/add/add";
import list from "@/pages/components/list/list";
import notice from "@/pages/components/notice";
export default {
  name: "usermanage",
  data() {
    return {
      form: "adduser",
      show: false,
      noticeshow: false,
      next: null,
      newBtn: true,
      exportBtn: true,
      delBtn: true,
      formtitle:'新建用户配置',
      result: [],
      ids: [],
      edit: {},
      search: {
        PerName: "",
        DeptName: "",
        JobName: ""
      },
      pagesize: 10,
      pageindex: 1,
      total: 0
    };
  },
  methods: {
    createnew() {
      this.formtitle = '新建用户配置'
      this.edit.UserId = 0;
      this.show = true;
    },
    edititem(edit) {
      this.formtitle = '修改用户配置'
      this.edit = edit;
      this.show = true;
    },
    hide() {
      this.show = false;
      this.noticeshow = false;
      this.next = null;
    },
    goPage(num) {
      this.pageindex = num;
      this.getlist();
    },
    getlist() {
      var params = {
        PerName: this.search.PerName,
        DeptName: this.search.DeptName,
        JobName: this.search.JobName,
        pagesize: this.pagesize,
        pageindex: this.pageindex,
        token: this.$store.state.token
      };

      this.$http.get(this.$api.getuserlist(params)).then(res => {
        if (res.data.code === 1) {
          this.result = res.data.result;
          this.total = res.data.total;
        }
      });
    },
    delitems(ids) {
      var params = {
        ids: [],
        token: this.$store.state.token
      };
      if (!!ids) {
        params.ids.push(ids);
      } else {
        params.ids = this.ids;
      }
      if(!params.ids.length)
      {
             return;
      }
      this.del(params);
    },
    del(params) {
      this.noticeshow = true;
      var _this = this;
      this.next = function() {
        if (!params.ids.length) {
          return;
        }
        _this.$http.post(_this.$api.deluser(), params).then(res => {
          if (res.data.code == 1) {
            _this.success();
          }
        });
      };
    },
    exportitems() {
      var params = {
        PerName: this.search.PerName,
        DeptName: this.search.DeptName,
        JobName: this.search.JobName,
        pagesize: this.pagesize,
        pageindex: this.pageindex,
        token: this.$store.state.token
      };
      this.$http.get(this.$api.exportuserlist(params)).then(res => {
        if (res.data.code === 1) {
          var a = document.createElement('a');  
          a.href = res.data.result;  
          a.click();  
         
        }
      });
    },
    success() {
      this.getlist();
      this.hide();
    }
  },
  mounted() {
    this.getlist();
  },
  components: {
    add,
    list,
    notice
  }
};
</script>
<style scoped>

</style>