<template>
  <div class='search'>
    <slot></slot>
    <button> <span class='fa fa-search'></span> 查询</button>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.search {
  display: inline-block;
}
.search input,
.search select {
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
