<template>
  <div class='search'>
    <slot>
       
    </slot>
     <button @click="search"> <span class='fa fa-search'></span>查询</button>
  
  </div>
</template>
<script>
export default {
  methods:{
    search(){
        console.log('search');
        this.$emit('search');
    }
  }
}
</script>
<style scoped>
.search {
  display: inline-block;
  height:100px;
  line-height: 100px;
  /* overflow: hidden; */
}
.search input,
.search select,
.search option {
  width: 185px;
  background-color: rgba(0, 86, 172, 0.4);
  border: 1px solid #176bb8;
  border-radius: 3px;
  height: 38px;
  outline: none;
  border: none;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  margin-right: 18px;
  color:#fff;
  text-indent: 10px;
}
.search button {
  width: 96px;
  height: 38px;
  background: #245ee2;
  border-radius: 3px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #ffffff;
  border: none;
  outline: none;
  line-height: 38px;
}
</style>
