<template>
  <div class="container">
    <div class="context">
         <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  background-color: #002b52;
  min-width: 1500px;
  /* height: 100px; */
}
.context {
  margin-left: 210px;
  margin-top:54px;
  min-width: 1500px;
  background-color: #002b52;
  transition: all 1s;
}
</style>
<script>
export default {
  name: "container"
};
</script>