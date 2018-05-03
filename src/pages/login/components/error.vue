<template>
  <div class='tipmsg'>
     {{TipMsg}}
  </div>
</template>
<script>
export default {
  name:'ErrorTip',
  props:['msg'],
  data(){
      return{
          TipMsg:this.msg
      }
  }
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

