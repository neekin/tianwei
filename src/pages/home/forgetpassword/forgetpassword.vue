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
            <component :is='step'></component>
            <error-msg v-if='errormsg'>{{errormsg}}</error-msg>
            <div class="btn">
                <button  class='prevBtn'  v-if='num>1 && num<4' @click='prevStep'>上一步</button>
                <button  class='nextBtn' v-if='num<4' @click='nextStep' :class="{act:num>1}">下一步</button>
                   <router-link to='/login'>
                      <a class='nextBtn' v-if='num==4'>去登陆</a>
                  </router-link>
            </div>
     </div>
  </div>
</template>
<script>
import HeaderStep from "./components/header";
import Step1 from "./components/stepone";
import Step2 from "./components/steptwo";
import Step3 from "./components/stepthree";
import Step4 from "./components/stepfour";
import ErrorMsg from "./components/error";
export default {
  name: "ForgetPassword",
  data() {
    return { num: 1,
             step:'Step1',
             errormsg:''
           };
  },
  methods: {
    nextStep() {
      if (this.num < 4) {
        this.num++;
      }
      this.step = 'Step'+this.num;
    },
    prevStep(){
      if (this.num > 1) {
        this.num--;
      }
      this.step = 'Step'+this.num;
    }
  },
   mounted(){
       this.step = 'Step'+this.num;
   },
  components: {
    HeaderStep,
    Step1,
    Step2,
    Step3,
    Step4,
    ErrorMsg
  }
};
</script>
<style>
.forget {
  height: 624px;
  width: 870px;
  margin: 88px auto 0;
  position: relative;
}

.logo {
    width: 169px;
    height: 54px;
  }
.forget a {
  font-size: 16px;
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

.btn .nextBtn {
  width: 100%;
  height: 100%;
  background: #f49c00;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
  font-family: "MicrosoftYaHei";
  display: block;
  text-align: center;
  line-height: 38px;
}
.btn .nextBtn.act{
  width: 195px;
  float: right;
}
.btn .prevBtn{
  border: 1px solid #FFFFFF;
  border-radius: 3px;
  width: 94px;
  height:100%;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #FFFFFF;
  background: none;
}
.btn {
  /*margin-top: 100px;*/
  width: 316px;
  height: 38px;
  position: absolute;
  bottom:50px;
  left:50%;
  margin-left: -158px;
}
</style>
