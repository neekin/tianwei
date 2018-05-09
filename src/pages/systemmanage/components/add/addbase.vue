<template>
<div>
         <div class='input group'>
           集团：<input type="text">
         </div>
         <div class='input'>
           SHOPID: <input type="text"> 平台 <select name="" id=""> <option value=""></option> </select>
         </div>
         <div class='input'>
           城市分布 <select name="" id="">
             <option value=""></option>
           </select>
           商圈特性：<select name="" id="">
             <option value=""></option>
           </select>
         </div>
         <div class='input'>
           商业体类别： <select name="" id="">
             <option value=""></option>
           </select>
           平台维护：<input type="radio"><input type="radio">
         </div>
         <div class='input'>
           备注：<textarea name="" id="" cols="30" rows="10"></textarea>
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
border: 1px solid rbga(255,255,255,0.12);
border-radius: 3px;
}

.input {
  width: 600px;
  margin:0 auto;
}
.group input{
   width:400px;
}
</style>
