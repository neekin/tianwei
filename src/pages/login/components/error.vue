<template>
  <div class='tipmsg'>
   <slot></slot>
  </div>
</template>
<script>
export default {
  name:'ErrorTip'
}
</script>
<style scoped>
    .tipmsg{
        background:  #C34F4F;
        width:466px;
        height:50px;
        color:#fff;
        font-size: 14px;
        text-align: center;
        line-height: 50px;
        margin:0 auto;
    }
</style>

