<template>
  <div>
     <add :show='show' @hide='hide' :form='form' :edit='edit' @success='success'>
        <span slot='title'>
          新增基础信息
        </span>
    </add>
    <list 
    @createnew='createnew' 
    @search ='getlist'
    @exportitems='exportitems'
    @goPage='goPage'
    :newBtn='newBtn'
    :exportBtn='exportBtn'
    :pageCount='pageCount'
    >
      <div slot='search'>
        集团：<select v-model='search.GroupName'>
            <option value="">请选择</option>
            <option v-for='item in GropList' :key='item.GroupID' :value='item.GroupName'>{{item.GroupName}}</option>
        </select>
        类别：
        <select v-model="search.BusCategoryID">
           <option value="">请选择</option>
           <option v-for='item in BusCategory' :key='item.BusCategoryID' :value='item.BusCategoryID'>
             {{item.BusCategory}}
           </option>
        </select>
        运维：
        <select v-model='search.Operation'>
          <option value="">请选择</option>
          <option value="0">未维护</option>
           <option value="1">维护</option>
        </select>
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
        <tr  v-for='item in result' :key='item.num'>
              <td>{{item.num}}</td>
              <td>{{item.GroupName}}</td>
              <td>{{item.ShopId}}</td>
              <td>{{item.CityDist}}</td>
              <td>{{item.BusCircleChar}}</td>
              <td>{{item.BusCategory}}</td>
              <td>{{item.SysVersion}}</td>
              <td>{{item.Operation==0?'未维护':item.Operation==1?'维护':''}}</td>
              <td>{{item.Remark}}</td>
              <td>
                  <a class='edit' @click='edititem(item)'><span class="fa fa-refresh"></span>修改</a>
                  <a class='del'  @click='delitems(item.ShopId)'><span class="fa fa-trash"></span> 删除</a>
              </td>
        </tr>
      </slot>
    </list>
     <notice :notice='noticeshow' :next='next'  @hide='hide'></notice>
  </div>
</template>
<script>
import add from "@/pages/components/add/add";
import list from "@/pages/components/list/list";
import notice from "@/pages/components/notice";
export default {
  name: "baseinfo",
  data() {
    return {
      form: "addbase",
      show: false,
      newBtn: true,
      noticeshow: false,
      next: null,
      exportBtn: true,
      delBtn: false,
      edit: null,
      search: {
        GroupName: "",
        BusCategoryID: "",
        Operation: ""
      },
      GropList: [],
      BusCategory: [],
      pagesize: 10,
      pageCount: 0,
      pageindex: 1,
      total:0,

      result: []
    };
  },
  methods: {
    delitems(ids) {
      var params = {
        ids: [],
        token: this.$store.state.token
      };
        params.ids.push(ids);
        // params.ids = JSON.stringify(params.ids)
        this.del(params);
    },
    del(params) {
      //  console.log(params);
      this.noticeshow = true;
      var _this = this;
      this.next = function() {
        if (!params.ids.length) {
          return;
        }
        _this.$http.post(_this.$api.delbase(), params).then(res => {
          if (res.data.code == 1) {
            _this.success();
          }
        });
      };
    },
    goPage(num) {
      this.pageindex = num;
      this.getlist();
    },
    createnew() {
      this.edit = null;
      this.show = true;
    },
    edititem(item) {
      this.edit = item;
      this.show = true;
    },
    success() {
      this.noticeshow = false;
      this.show = false;
      this.getlist();
    },
    hide() {
      this.show = false;
      this.noticeshow = false;
      this.next = null;
    },
    getlist() {
      // http://121.201.14.250:83/MBase/getShopList?GroupName=&BusCategoryID=&Operation=&pagesize=10&pageindex=1&token=FBFF067233A31ED094FB7B6EA306C8ACACA46950308B6920DFD3046477DB5BA1
      var params = {
        token: this.$store.state.token,
        pageindex: this.pageindex,
        pagesize: this.pagesize,
        BusCategoryID: this.search.BusCategoryID,
        GroupName: this.search.GroupName,
        Operation: this.search.Operation
      };
      this.$http.get(this.$api.getshoplist(params)).then(res => {
        if (res.data.code == 1) {
          this.result = res.data.result;
          this.total = res.data.total;
          this.pageCount = Math.ceil(this.total / this.pagesize);
        }
      });
    },
    exportitems() {
      var params = {
        token: this.$store.state.token,
        pageindex: this.pageindex,
        pagesize: this.result.length,
        BusCategoryID: this.search.BusCategoryID,
        GroupName: this.search.GroupName,
        Operation: this.search.Operation
      };
      this.$http.get(this.$api.exportshoplist(params)).then(res => {
        if (res.data.code === 1) {
          var a = document.createElement("a");
          a.href = res.data.result;
          a.click();
        }
      });
    },
    getgroplist() {
      this.$http
        .get(this.$api.getgroplist() + "?token=" + this.$store.state.token)
        .then(res => {
          // console.log(res);
          this.GropList = res.data.result;
        });
    },
    getbd_BusCategory() {
      this.$http
        .get(
          this.$api.getbd_BusCategory() + "?token=" + this.$store.state.token
        )
        .then(res => {
          this.BusCategory = res.data.result;
        });
    }
  },
  mounted() {
    this.getlist();
    this.getgroplist();
    this.getbd_BusCategory();
  },
  components: {
    add,
    list,
    notice
  }
};
</script>
<style>
</style>