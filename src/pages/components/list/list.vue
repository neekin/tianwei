<template>
  <div>
   <div class="header">
      <search @search='search'>
        <div class="search" >
                   <slot name='search'></slot>    
        </div>

      </search>
    </div>
      <div class="table">
         <table>
           <slot name='list-title'>
            
            </slot>
            <slot name='list-body'>
              <div class='nodata'>
                没有数据
              </div>
            </slot>
         </table>
      </div>

<options :newBtn='newBtn'
         :exportBtn='exportBtn'
         :delBtn='delBtn'
         :pageCount='pageCount'
         @goPage='goPage'
         @createnew='createnew'
         @delitems='delitems'
         @exportitems='exportitems'>
  
</options>
     
  </div>
</template>
<script>
import search from "./search"
import options from "./options"
export default {
  props:['newBtn','exportBtn','delBtn','pageCount'],
  methods: {
    goPage(num) {
      console.log(num);
      this.$emit("goPage", num);
    },
    createnew() {
      this.$emit("createnew");
    },
    delitems(){
      this.$emit("delitems")
    },
    exportitems(){
      this.$emit('exportitems')
    },
    search(){
      console.log('list')
      this.$emit('search')
    }
  },
  components: {
    search,
    options
  }
};
</script>
<style scoped>
.search {
  display: inline-block;
}
.nodata{
  height:100px;
  color:#fff;
  text-align: center;
  padding-top:20px;
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

.table td a{
  display:inline-block;
  width: 50px;
  color:#fff;
}
.table td a.edit{
  margin-right:10px;
}
.table td a.edit:hover{
     color:#00C61E;
}
.table td a.del:hover{
     color:#CF3945;
}

</style>
