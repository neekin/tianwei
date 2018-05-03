<template>
  <div class='forget'>
     <div class="logo"></div>
     <div class="title">找回密码</div>
     <div class='pull-right' style='margin-top:42px;'>
         <router-link to='/login'>
         返回登陆页
         </router-link>
     </div>
     <div class="form">
           <header-step :indexActive='num'></header-step>
           <hr style='width:810px;margin:0; height:0;border:none;border-top:1px solid #204C74;margin:0 auto;margin-top:33px'>
            <step-one></step-one>
           <div class="btn block-center">
 <button class='block-center' @click='nextStep'>下一步</button>
           </div>
          
     </div>
  </div>
</template>
<script>
import HeaderStep from "./components/header";
import StepOne from "./components/stepone";
export default {
  name: "ForgetPassword",
  data() {
    return { num: 1 };
  },
  methods: {
    nextStep() {
      if (this.num < 4) {
        this.num++;
      }
    }
  },
  components: {
    HeaderStep,
    StepOne
  }
};
</script>
<style>
.forget {
  height: 624px;
  width: 870px;
  margin: 88px auto 0;
}
.forget a {
  font-size: 16px;
}
.logo {
  width: 169px;
  height: 54px;
  background: #fff;
  display: inline-block;
}
.title {
  font-family: "Microsoft YaHei";
  display: inline-block;
  font-size: 20px;
  color: #fff;
  margin-left: 10px;
}
.form {
  height: 550px;
  width: 870px;
  opacity: 0.89;
  background: #0e2d5d;
  border: 1px solid #004a8e;
  margin-top: 18px;
}

.btn button {
  width: 100%;
  height: 100%;
  background: #f49c00;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
  font-family: "MicrosoftYaHei";
}
.btn {
  margin-top: 140px;
  width: 316px;
  height: 38px;
}
</style>
