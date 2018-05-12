<template>
<div>
       <div class='input group'>
           <span class='title'>登陆账号:</span><input type="text">
           <span class="title">姓名：</span> <input type="text">
        </div>
         <div class='input'>
           <span class='title'>登陆密码:</span><input type="password">
           <span class="title">确认密码：</span> <input type="password">
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
  export default{
    name:'adduser'
  }
</script>
<style>

</style>
