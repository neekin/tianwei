<template>
<div class="steptwo">
         <div style='margin-top:86px' class='username block-center'>
           <div class="w username">
             <span class='text'>您的用户名是：</span>
             <span>{{username}}</span>
           </div>
           <div class="w func">
             <span class='text'>选择找回方式：</span>
             <select name="" id="">
               <option value="">手机</option>
             </select>
           </div>
             <div class="w checkcode">
               <span class="text">验证码：</span>
               <input type="text">
               <button>获取验证码</button>
             </div>
         </div>
</div>
      
</template>
<script>
export default {
  name:'Step2',
  data(){
    return {username:'倪健'}
  },
}
</script>
<style scoped>
   .steptwo
   {
    color:#fff;
   }
   .w{
    width: 316px;
    height:38px;
    position: relative;
    margin: 15px auto;
    line-height: 38px;
   }
   .w .text{
    position: absolute;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    color: #FFFFFF;
    left:-130px;
    text-align: right;
    width: 120px;
   }
   .username{
    font-family: MicrosoftYaHei;
    font-size: 16px;
    color: #F49C00;
   }
   .func select{
    background: rgba(0,0,0,0.12);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 3px;
    height:100%;
    width: 100%;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    color: #FFFFFF;
    text-indent: 1em;
   }
   .checkcode input{
    background: rgba(0,0,0,0.12);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 3px;
    width: 158px;
    height:100%;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    color: #FFFFFF;
    text-indent: 1em;
   }
   .checkcode button{
      width: 136px;
      background: #245EE2;
      border-radius: 3px;
      height:100%;
      border:none;
      outline: none;
      margin-left: 15px;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      color: #FFFFFF;
   }

</style>
