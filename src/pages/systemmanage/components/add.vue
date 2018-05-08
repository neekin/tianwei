<template>
  <div>
 <div class="mask">
     <div class="form">
         <div class="title">
             <slot>新增基础信息</slot>
         </div>
     </div>
 </div>
  </div>
</template>
<script>
export default {
  name: "add"
};
</script>
<style scoped>
.mask {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
}
.form {
  height: 584px;
  width: 742px;
  background-color: #fff;
  margin: 80px auto;
  opacity: 0.96;
  background-color: rgba(0, 42, 80, 0.96);
  border: 1px solid #176bb8;
  color: #ffffff;

  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #ffffff;
}
.form .title {
  height: 50px;
  background-color: rgba(2, 73, 138, 0.96);
  border-bottom: 1px solid #176bb8;
  font-family: MicrosoftYaHei-Bold;
  line-height: 50px;
  padding-left: 40px;
  font-size: 16px;
}
</style>
