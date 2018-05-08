<template>
  <div class="container">
    <div class="context">
         <slot></slot>
    </div>
  </div>
</template>
<style>
.container {
  float: right;
  width: 100%;
  background-color: #002b52;
  /* height: 100px; */
}
.context {
  margin-left: 210px;
  margin-top:54px;
}
</style>
<script>
export default {
  name: "container"
};
</script>