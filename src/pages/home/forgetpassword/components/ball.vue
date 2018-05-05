<template>

       <div class="ball" :class="{active:active}"> 
          <span >{{num}}</span>
         {{context}}
       
         <div v-if='num>1' class="line"></div>
      </div>
</template>

<script>
export default {
  name: "Ball",
  props:['num','context','active'],
  data(){
      return {ballactive:this.active}
  }
};
</script>
<style >
 .ball {
  display: inline-block;
  width: 150px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
}
 .ball span {
  display: block;
  width: 31px;
  height: 31px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  border-radius: 50%;
  font-weight: bold;
  margin: 24px auto 16px;
   transition: all 3s;
}
 .ball.active {
  color: #fff;
}
.ball.active span{
    border-color:  #F49C00;
    background-color: #F49C00;
    color:#fff;
}

 .line {
  position: absolute;
  width: 117px;
  height:3PX;
  background-color: rgba(255, 255, 255, 0.5);
  /* border-top: 3px solid ; */
  z-index: -1;
  top: 42px;
}

.line::after{
    content: '';
    position: absolute;
    width: 0;
    height:3px;
    background-color: #F49C00;
    left:0;
    transition: width 1s;
}
.ball.active .line::after{
    width: 100%;
}
.ball{
    position: relative;
}
.line{
    left:-58px;
}
</style>
