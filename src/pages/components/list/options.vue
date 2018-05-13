<template>
	 <div class="options">
       <div class="optionsbtn">
          <button v-if='newBtn' class='create' @click='createnew'>
           <span class="fa fa-plus"></span>
           新建
          </button>
          <button v-if='delBtn' class="del" @click='delitems'>
          	<span class='fa fa-trash'></span>
          	删除
          </button>

          <button v-if='exportBtn' class='export'  @click='exportitems'>
              <span class='fa fa-cloud-download'></span>
               导出
          </button>
       </div>

       <div class="pagination" v-if='pageCount>1'>
           <button @click='prevPage' v-if='cur>1'>上一页</button>
           <ul>
              <li v-for='n in pageCount' :key='n' @click='goPage(n)'  :class='{active:n==cur}'>{{n}}</li>
           </ul>
              <button @click='nextPage' v-if='cur<pageCount'>下一页</button>

              <div class="gopage">
                  跳转到第<input type="text" v-model="togo">页
                  <button @click='gotoPage'>GO</button>
              </div>
       </div>
      </div>
</template>
<script >
export default {
  props: ["newBtn", "exportBtn", "delBtn", "pageCount"],
  data() {
    return {
      cur: 1,
      togo: 0
    };
  },
  methods: {
    gotoPage() {
      this.goPage(this.togo);
    },
    goPage(num) {
      this.cur = num;
      this.$emit("goPage", num);
    },
    prevPage() {
      this.cur--;
      if (this.cur <= 0) {
        this.cur = 1;
      }
      this.goPage(this.cur);
    },
    nextPage() {
      this.cur++;
      if (this.cur >= this.pageCount) {
        this.cur = this.pageCount;
      }
      this.goPage(this.cur);
    },
    createnew() {
      this.$emit("createnew");
    },
    delitems() {
      this.$emit("delitems");
    },
    exportitems() {
      this.$emit("exportitems");
    }
  },
  mounted() {
    // console.log(this.pageCount);
  }
};
</script>
<style scoped>
.options {
  opacity: 0.9;
  background: #002b52;
  border: 1px solid #176bb8;
  height: 100px;
  margin: 6px;
  line-height: 100px;
}
.pagination li.active {
  background-color: #fff;
  color: #002b52;
}
.options button {
  border-radius: 3px;
  outline: none;
  height: 38px;
  width: 96px;
  color: #fff;
  border: none;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  line-height: 38px;
  margin-right: 15px;
}
.options .create {
  background: #29bd99;
}
.options .export {
  background: #189cd5;
}
.options .del {
  background: #e25863;
}
.options .optionsbtn {
  float: left;
  margin-left: 30px;
}
.pagination {
  float: right;
  width: 800px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #ffffff;
  text-align: right;
  padding-right: 30px;
  line-height: 100px;
}
.pagination li,
.pagination button {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #ffffff;
  background-color: rgba(0, 86, 172, 0.4);
  border-radius: 3px;
  line-height: 38px;
  text-align: center;
}
.pagination ul {
  display: inline-block;
  vertical-align: middle;
}
.pagination ul li {
  height: 38px;
  width: 38px;
  float: left;
  margin: 4px;
}
.pagination button {
  height: 38px;
  width: 96px;
  border: none;
  outline: none;
}
.pagination input {
  width: 38px;
  height: 38px;
  border: none;
  outline: none;
  margin-left: 4px;
  margin-right: 4px;
}
.pagination .gopage button {
  width: 38px;
}
.pagination .gopage {
  display: inline-block;
  margin-left: 30px;
}
</style>