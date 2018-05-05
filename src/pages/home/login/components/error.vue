<template>
  <div :class="[cls]">
   <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ErrorTip",
  props: ["statu"],
  data: function() {
    return {
      cls: this.statu == 1 ? "sucmsg" : "errmsg"
    };
  }
};
</script>
<style scoped>
.errmsg {
  background: #c34f4f;
  width: 466px;
  height: 50px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
  margin: 0 auto;
}
.sucmsg {
  background: #0094ff;
  width: 466px;
  height: 50px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
  margin: 0 auto;
}
</style>

