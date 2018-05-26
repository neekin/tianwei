<template>
<div class="steptwo">
         <div style='margin-top:86px' class='username block-center'>
           <div class="w username">
             <span class='text'>您的用户名是：</span>
             <span>{{username}}</span>
           </div>
           <div class="w func">
             <span class='text'>选择找回方式：</span>
             <select  v-model='backType'>
               <option value="1">手机</option>
                <option value="2">邮箱</option>
             </select>
             <!-- <input type="text" v-model='phone'> -->
           </div>
             <div class="w checkcode">
               <span class="text">验证码：</span>
               <input type="text" v-model='testCode'>
               <button @click='getTestCode' :disabled='disabled'>{{btnTxt}}</button>
             </div>
         </div>
</div>
      
</template>
<script>
export default {
  name: "Step2",
  props: ["username",'num'],
  data() {
    return {
      testCode: "",
      backType:1,
      disabled:false,
      sec:60,
      btnTxt:'获取验证码'
    };
  },
  methods: {
    getTestCode() {
      // alert(123);
      var params = {
        Account: this.username,
        step: this.num,
        backType:this.backType
      };
      this.$http.post(this.$api.forgetpwd(), params).then(res => {
          var timer =setInterval(()=>{
            this.disabled= true;
            this.sec -=1;
            this.btnTxt='获取验证码('+this.sec+"s)";
            if(this.sec<=0)
            {
              clearInterval(timer);
              this.sec=60;
              this.btnTxt='获取验证码';
              this.disabled=false;
            }
          },1000)
          alert(res.data.message);
          
      });
    
    }
  }
};
</script>
<style scoped>
.steptwo {
  color: #fff;
}
.w {
  width: 316px;
  height: 38px;
  position: relative;
  margin: 15px auto;
  line-height: 38px;
}
.w .text {
  position: absolute;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #ffffff;
  left: -130px;
  text-align: right;
  width: 120px;
}
.username {
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #f49c00;
}
.func select {
  background: rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  height: 100%;
  width: 100%;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #ffffff;
  text-indent: 1em;
}
.checkcode input {
  background: rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  width: 158px;
  height: 100%;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #ffffff;
  text-indent: 1em;
}
.checkcode button {
  width: 136px;
  background: #245ee2;
  border-radius: 3px;
  height: 100%;
  border: none;
  outline: none;
  margin-left: 15px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #ffffff;
}
.checkcode button[disabled]
{
  color:#fff;
  background: #acacac;
}
</style>
