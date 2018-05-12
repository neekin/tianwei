<template>
<div>
         <div class='input group'>
           <span class='title'>集团：</span><input type="text">
         </div>
         <div class='input'>
           <span class='title'>SHOPID：</span> <input type="text">
           <span class='title'>平台：</span>
               <select name="" id=""> 
                <option value=""></option> 
              </select>
         </div>
         <div class='input'>
           <span class='title'>城市分布：</span><select name="" id="">
             <option value=""></option>
           </select>
           <span class='title'>商圈特性：</span><select name="" id="">
             <option value=""></option>
           </select>
         </div>
         <div class='input '>
           <span class='title'>商业体类别：</span> 
           <select style='margin-left:-1px' name="" id="">
             <option value=""></option>
           </select>
           <span class='title'>平台维护：</span><input type="radio"><input type="radio">
         </div>
         <div class='input'>
           <span class='title'>备注：</span><textarea name="" id="" cols="30" rows="10"></textarea>
         </div>
</div>
</template>
<script>
export default {
  name: "addbase"
};
</script>
<style scoped>
.input input,
.input select {
  background-color:rgba(0,0,0,0.12);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 3px;
  height:38px;
  outline:none;
  /*border:none;*/
  width: 160px;
      font-family: MicrosoftYaHei;
font-size: 14px;
color: rgba(255,255,255,0.7);
}

.input {
  width: 640px;
  margin:20px auto;
}
.input span{
  display: inline-block;
  width: 120px;
  text-align: right;
  padding-right: 30px;

  display:inline-block;
  height:38px;
  line-height: 38px;
  vertical-align: top;
}
.group{
  margin-top: 30px;
}
.group input{
      width: 450px;
}
.input input[type='radio']{
  width: 16px;
  height: 16px;
  color:#0094ff;
  margin-left: 50px;
}
.input select{
  margin-left: 4px;
}
.input textarea{
     background-color:rgba(0,0,0,0.12);
  border: 1px solid rgba(255,255,255,0.12);
    outline:none;
    width: 450px;
    height:60px;
        font-family: MicrosoftYaHei;
font-size: 14px;
color: rgba(255,255,255,0.7);
padding: 8px;

}
</style>
