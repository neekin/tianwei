<template>
  <div :class='options'>
    <h3>{{msg.title}} <span @click='close'>X</span> </h3>
   <p>{{msg.text}}</p> 
      <button @click='close'>确认</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options:'hide',
      msg:{}
    }
  },
  methods:{
    close(){
      this.options='hide';
    },
    show(msg,type){
      // alert('12312312')
      this.msg = msg;
          this.options='show '+type;
    }
  }
};
//  props:['msg']
</script>

<style scoped>
div{
  width: 400px;
  height:260px;
  position: fixed;
  z-index: 99999;
  top:20px;
  left:50%;
  margin-left:-200px;
  background-color: #00397b;
  color:#fff;
  border:1px solid #00687b;
  transition: all 1s;
}
h3{
  color:#fff;
  border-bottom: 1px solid #00687b;
  height:30px;
  line-height: 30px;
  padding-left: 20px;
}
span{
  float: right;
  margin-right:20px;
}
p{
   font-size: 20px;
   padding: 10px;
}
button{
    width: 96px;
    height: 38px;
    background: #245ee2;
    border-radius: 3px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    color: #ffffff;
    border: none;
    outline: none;
    line-height: 38px;
     position: absolute;
      bottom: 10px;
      left:50%;
      margin-left:-48px;
}

div.error{
  background-color: #f2dede;
  color:#a94442;
}
div.error button{
  background: #a94442;
}
div.error h3{
  color:#a94442;
}

div.info{
  background-color:#337ab7;
  color:#fff;
}
div.info button{
  /* background: #337ab7; */
   background: #245ee2;
}
div.info h3{
  color:#fff;
}
div.hide{
  top:-300px;
}
div.show{
  top:20px;
}
</style>
