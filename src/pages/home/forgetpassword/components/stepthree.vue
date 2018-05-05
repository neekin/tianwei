<template>
<div class="stepthree">
            <div style='margin-top:102px'>
	           <div class="w block-center">
	            <span>新密码：</span>
	            <input type="text">
	           </div>
	           <div class="w func block-center">
	              <span>确认新密码：</span>
	              <input type="text">
	           </div>
         </div>
</div>
      
</template>
<script>
export default {
  name:'Step3'
}
</script>
<style scoped>
       .w{
   	    width: 316px;
   	    height: 38px;
   	    margin-top: 26px;
   	    position: relative;
       }
       .w span{
       	position: absolute;
       	width: 96px;
       	height:38px;
       	line-height: 38px;
       	text-align: right;
       	font-family: MicrosoftYaHei;
		font-size: 16px;
		color: #FFFFFF;
		left:-110px;
       }
       .w input{
       	height:100%;
       	width: 100%;
       	background: rgba(0,0,0,0.12);
		border: 1px solid rgba(255,255,255,0.12);
		border-radius: 3px;
       }
</style>
