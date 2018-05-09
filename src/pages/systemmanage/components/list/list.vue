<template>
  <div>
   <div class="header">
      <search >
        <div class="search">
                   <slot name='search'></slot>    
        </div>

      </search>
    </div>
      <div class="table">
         <table>
           <slot name='list-title'>

          
            </slot>
             <tr>
                 <td>1</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
             </tr>
             <tr>
                 <td>2</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
             </tr>
             <tr>
                 <td>3</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
             </tr>
             <tr>
                 <td>4</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
             </tr>
             <tr>
                 <td>5</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
             </tr>
             <tr>
                 <td>6</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
             </tr>
             <tr>
                 <td>7</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
             </tr>
             <tr>
                 <td>8</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
             </tr>
             <tr>
                 <td>9</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
             </tr>
             <tr>
                 <td>10</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
             </tr>
         </table>
      </div>

      <div class="options">
       <div class="optionsbtn">
              <button class='create' @click='createnew'>
           <span class="fa fa-plus"></span>   新建
          </button>
          <button class='import'>
              <span class='fa fa-cloud-download'></span>
               导出
          </button>
       </div>

       <div class="pagination">
           <button>上一页</button>
           <ul>
               <li>1</li>
                <li>2</li>
                 <li>3</li>
           </ul>
              <button>下一页</button>

              <div class="gopage">
                  跳转到第<input type="number">页
                  <button>GO</button>
              </div>
       </div>
      </div>
  </div>
</template>
<script>
import search from "./search";
export default {
  methods: {
    createnew() {
      this.$emit("createnew");
    }
  },
  components: {
    search
  }
};
</script>
<style scoped>
.search {
  display: inline-block;
}
.header {
  height: 100px;
  color: #fff;
  line-height: 100px;
  font-size: 14px;
  padding-left: 20px;
  background-color: rgba(0, 57, 123, 0.9);
}
.table {
  margin: 6px;
  border: 1px solid #176bb8;
}
.table th,
.table td {
  font-size: 14px;
  color: #ffffff;
  text-align: center;
}
.table table {
  width: 100%;
}
.table th {
  font-family: MicrosoftYaHei-Bold;
  background-color: rgba(0, 57, 123, 0.9);
  border-top: 1px solid #176bb8;
  border-bottom: 1px solid #176bb8;
  height: 38px;
}
.table td {
  height: 50px;
  border-bottom: 1px solid #003b70;
}

.options {
  opacity: 0.9;
  background: #002b52;
  border: 1px solid #176bb8;
  height: 100px;
  margin: 6px;
  line-height: 100px;
}

.options .create,
.options .import {
  border-radius: 3px;
  border-radius: 3px;
  outline: none;
  height: 38px;
  width: 96px;
  color: #fff;
  border: none;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  line-height: 38px;
}
.options .create {
  background: #29bd99;
}
.options .import {
  margin-left: 20px;
  background: #189cd5;
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
