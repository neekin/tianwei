<template>
<div>
         <div class='input'>
           集团：<input type="text">
         </div>
         <div>
           SHOPID: <input type="text"> 平台 <select name="" id=""> <option value=""></option> </select>
         </div>
         <div>
           城市分布 <select name="" id="">
             <option value=""></option>
           </select>
           商圈特性：<select name="" id="">
             <option value=""></option>
           </select>
         </div>
         <div>
           商业体类别： <select name="" id="">
             <option value=""></option>
           </select>
           平台维护：<input type="radio"><input type="radio">
         </div>
         <div>
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
}
</style>
