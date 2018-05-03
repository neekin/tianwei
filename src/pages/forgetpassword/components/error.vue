<template>
    <div v-if='msg'>
        {{msg}}
    </div>
</template>
<script>
export default {
  name:'ErrorTip',
  props:['msg']
}
</script>


<style scoped>
div{
    color:red;
}
</style>
