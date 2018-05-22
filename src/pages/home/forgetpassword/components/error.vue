<template>
    <div class='errormsg'>
         <slot></slot>
    </div>
</template>
<script>
export default {
  name:'ErrorMsg',
  mounted(){
      this.$emit('hidemsg');
  }
}
</script>


<style scoped>
.errormsg{
    width: 300px;
    margin:20px auto 0;
    font-family: "MicrosoftYaHei";
	font-size: 14px;
	color: #CE4141;
}

</style>
