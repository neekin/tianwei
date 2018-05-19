<template>
  <div>
  <add :show='show' :form='form' @hide='hide' :formwidth='394' @success='success' :edit='edit'>
        <span slot='title'>
         {{formtitle}}
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
                  <a class='edit' @click='edititem(item)'><span class="fa fa-refresh"></span>修改</a>
                  <a class='del' @click='delitems(item.RoleId)'><span class="fa fa-trash"></span> 删除</a>
              </td>
        </tr>
      </slot>
     <span slot='title'></span>
     <div slot="search">
      角色名： <input type="text" v-model='search.RoleName'>
      <!-- 选择时间：<input type="datetime"> -->
      <DatePicker type="daterange" placement="bottom-end" @on-change='getdate' placeholder="选择日期" style='width:200px;'></DatePicker>
     </div>
   </list>
   <notice :notice='noticeshow' :next='next'  @hide='hide'></notice>
  </div>
</template>
<script>
import add from "@/pages/components/add/add";
import list from "@/pages/components/list/list";
import { formatDate } from "@/api/date";
import notice from "@/pages/components/notice";
export default {
  name: "rolemanage",
  data() {
    return {
      show: false,
      confirmDel: false,
      newBtn: true,
      exportBtn: true,
      noticeshow: false,
      next: null,
      delBtn: true,
      formtitle: "新建角色配置",
      result: [],
      total: 0,
      ids: [],
      edit: {},
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
    getdate(dates){
     this.search.start=dates[0];
     this.search.end = dates[1];
    },
    createnew() {
      this.formtitle = "新建角色配置";
      this.edit.RoleId = 0;
      this.show = true;
    },
    edititem(edit) {
      this.formtitle = "修改角色配置";
      this.edit = edit;
      this.show = true;
    },
    hide() {
      this.show = false;
      this.noticeshow = false;
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
          var a = document.createElement('a');  
          a.href = res.data.result;  
          a.click();  
        }
      });
    },
    success() {
      this.getlist();
      this.hide();
      this.next = null;
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
      if (!this.ids.length || !params.ids.length) {
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
        _this.$http.post(_this.$api.delrole(), params).then(res => {
          if (res.data.code == 1) {
            _this.success();
          }
        });
      };
    }
  },
  mounted() {
    this.getlist();
    // console.log(this.result);
  },
  components: {
    add,
    list,
    notice
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
.ivu-date-picker {
  width: 185px;
  background-color: rgba(0, 86, 172, 0.4);
  /* border: 1px solid #176bb8; */
  border-radius: 3px;
  /* height: 38px; */
  outline: none;
  border: none;
  font-family: MicrosoftYaHei;
}
.ivu-date-picker input {
  width: 100%;
  height: 38px;
  background: none;
  border: none;
  outline: none;
  font-size: 14px;
  color: #fff;
}

.ivu-date-picker-header-label {
  color: #2d8cf0;
}
.ivu-date-picker .ivu-select-dropdown {
  background-color: #0056ac;
}
.ivu-date-picker-cells-cell-range em {
  color: rgba(0, 86, 172, 0.4);
}
</style>