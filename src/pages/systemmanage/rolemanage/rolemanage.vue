<template>
  <div>
  <add :show='show' :form='form' @hide='hide' :formwidth='394' @success='success'>
        <span slot='title'>
           新建角色配置
        </span>
    </add>


   <list @createnew='createnew'
         @delitems='delitems'
         @exportitems='exportitems'
         @search='getlist'
         :newBtn='newBtn'
         :delBtn='delBtn'
         :exportBtn='exportBtn'
         :pageCount='pageCount'
          @goPage='goPage'
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
        <tr  v-for='item in result' :key='item.num'>
              <td>  
                <div class="checkbox">
                <input type="checkbox" :value='item.RoleId' v-model='ids'>
                <span class='fa fa-check'></span>
                </div>{{item.num}}
              </td>
              <td>{{item.RoleName}}</td>
              <td>{{item.UserName}}</td>
              <td>{{item.MenuName}}</td>
              <td>{{item.CtrDate | fmt}}</td>
              <td>
                  <a class='edit'><span class="fa fa-refresh"></span>修改</a>
                  <a class='del' @click='delitems(item.RoleId)'><span class="fa fa-trash"></span> 删除</a>
              </td>
        </tr>
      </slot>
     <span slot='title'></span>
     <div slot="search">
      角色名： <input type="text" v-model='search.RoleName'>
      选择时间：<input type="datetime">
     </div>
   </list>
  </div>
</template>
<script>
import add from "../components/add/add";
import list from "../components/list/list";
import { formatDate } from "@/api/date";
export default {
  name: "rolemanage",
  data() {
    return {
      show: false,
      confirmDel: false,
      newBtn: true,
      exportBtn: true,
      delBtn: true,
      result: [],
      total: 0,
      ids: [],
      form: "addrole",
      pageindex: 1,
      pagesize: 10,
      pageCount: 0,
      search: {
        RoleName: "",
        start: "",
        end: ""
      }
    };
  },
  methods: {
    goPage(num) {
      this.pageindex = num;
      this.getlist();
    },
    createnew() {
      this.show = true;
    },
    hide() {
      this.show = false;
    },
    getlist() {
      var params = {
        RoleName: this.search.RoleName,
        start: this.search.start,
        end: this.search.end,
        pagesize: this.pagesize,
        pageindex: this.pageindex,
        token: this.$store.state.token
      };
      this.$http.get(this.$api.getrolelist(params)).then(res => {
        if (res.data.code == 1) {
          this.result = res.data.result;
          this.total = res.data.total;
          this.pageCount = Math.ceil(this.total / this.pagesize);
        }
      });
    },
    exportitems() {
      var params = {
        RoleName: this.search.RoleName,
        start: this.search.start,
        end: this.search.end,
        pagesize: this.pagesize,
        pageindex: this.pageindex,
        token: this.$store.state.token
      };
      this.$http.get(this.$api.exportrolelist(params)).then(res => {
        if (res.data.code === 1) {
          window.open(res.data.result);
        }
      });
    },
    success() {
      this.getlist();
      this.hide();
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

      this.$http.post(this.$api.delrole(), params).then(res => {
        if (res.data.code == 1) {
          this.success();
        }
      });
    }
  },
  mounted() {
    this.getlist();
    console.log(this.result);
  },
  components: {
    add,
    list
  },
  filters: {
    fmt(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>
<style>

</style>