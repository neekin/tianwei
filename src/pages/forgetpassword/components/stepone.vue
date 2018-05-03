<template>
<div class="stepone">
 <div style='margin-top:120px' class='username block-center'>
           <span>用户名:</span> <input type="text">               
           </div>
           <div class='checkcode block-center'>
              <span>验证码:</span> <input type="text">
               <div class="checkcodeimg">123</div>
               <i class='el-icon-refresh' @click='refreshCode'></i>
           </div>
</div>
      
</template>
<script>
export default {
  name:'StepOne',
  methods:{
    refreshCode() {
      alert("刷新成功");
    }
  }
}
</script>
<style scoped>
.username,
.checkcode {
  width: 316px;
  height: 38px;
  position: relative;
}
.username input {
  width: 100%;
  /* opacity: 0.12; */
}
.username input,
.checkcode input {
  background: rgba(0, 0, 0, 0.12);
  border: 1px solid #ffffff;
  border-radius: 3px;
  outline: none;
  opacity: 0.5;
  font-family: "MicrosoftYaHei";
  font-size: 16px;
  color: #ffffff;
  text-indent: 1em;
  height: 36px;
}
.checkcode input {
  width: 128px;
}
.checkcode {
  margin-top: 15px;
}

.username span,
.checkcode span {
  position: absolute;
  left: -60px;
  font-size: 16px;
  font-family: "MicrosoftYaHei";
  color: #fff;
  top: 14px;
}
.checkcode span {
  top: 26px;
}
.checkcode .checkcodeimg {
  height: 53px;
  width: 130px;
  background-color: #fff;
  display: inline-block;
  margin-left: 8px;
  vertical-align: bottom;
}
.checkcode i {
  font-size: 28px;
  color: #fff;
  margin-left: 10px;
}
.checkcode i:hover {
  cursor: pointer;
}
</style>
