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
            <component  ref="step" :is='step' @createCode='createCode' :checkCode='checkCode' :username='username' :backType='backType' :num='num'>
            </component>
            <error-msg v-if='errormsg' @hidemsg='hidemsg'>{{errormsg}}</error-msg>
            <div class="btn">
                <button  class='prevBtn'  v-if='num>1 && num<4' @click='prevStep'>上一步</button>
                <button  class='nextBtn' v-if='num<4' @click='repassword' :class="{act:num>1}">下一步</button>
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
import Base64 from "@/api/Base64";
import StringUpdater from "@/api/string_update";
export default {
  name: "ForgetPassword",
  data() {
    return {
      num: 1,
      step: "Step1",
      errormsg: "",
      checkCode: "",
      username: "",
      backType: 1
    };
  },
  methods: {
    createCode() {
      var code = "";
      var codeLength = 4; //验证码的长度
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ); //随机数
      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）
        code += random[index]; //根据索引取得随机数加到code上
      }
     
      this.checkCode = code; //把code值赋给验证码
    },
    nextStep() {
      if (this.num < 4) {
        this.num++;
      }
      this.step = "Step" + this.num;
    },
    prevStep() {
      if (this.num > 1) {
        this.num--;
        this.createCode();
      }
      this.step = "Step" + this.num;
    },
    hidemsg() {
      setTimeout(() => {
        this.errormsg = "";
      }, 2000);
    },
    repassword() {
     this.username = this.$refs.step.username;
      var params = {
        Account: this.username,
        step: this.num
      };
     
      if (this.num == 1) {
        if (this.$refs.step.code != this.checkCode) {
          this.errormsg = "验证码错误";
          return;
        }
      }
      if (this.num == 2) {
        params.step++;
        params.backType = this.$refs.step.backType;
        params.TestCode = this.$refs.step.testCode;
      }
      if(this.num==3)
      {
        params.step++;
        params.repassword = Base64.encode(this.$refs.step.repassword); 
        params.password = Base64.encode(this.$refs.step.password); 
      }

      this.$http.post(this.$api.forgetpwd(), params).then(res => {
          if (res.data.code == 1) {
            this.nextStep();
          } else {
            this.errormsg = res.data.message;
          }
      });
    }
  },
  mounted() {
    this.step = "Step" + this.num;
    this.createCode();
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
<style scoped>
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
.btn .nextBtn.act {
  width: 195px;
  float: right;
}
.btn .prevBtn {
  border: 1px solid #ffffff;
  border-radius: 3px;
  width: 94px;
  height: 100%;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #ffffff;
  background: none;
}
.btn {
  /*margin-top: 100px;*/
  width: 316px;
  height: 38px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  margin-left: -158px;
}
</style>
