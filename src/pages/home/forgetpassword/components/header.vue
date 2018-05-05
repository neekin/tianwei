<template>
  <div class="step">
        <ball  
        v-for='item of balls' 
        v-bind:key='item.num' 
        :num='item.num' 
        :context='item.context' 
        :active='item.active'>
        </ball>
  </div>
</template>
<script>
import Ball from "./ball";

export default {
  name: "HeaderStep",
  components: {
    Ball
  },
  props: ["indexActive"],
  data: function() {
    return {
      balls: [
        { num: 1, context: "输入用户名", active: true },
        { num: 2, context: "验证身份", active: false },
        { num: 3, context: "重置密码", active: false },
        { num: 4, context: "完成", active: false }
      ]
    };
  },
  methods: {
    change(){
      for(var i=this.balls.length-1;i>0;i--)
         {
            this.balls[i].active = false;
         }
      for (var i = 0; i < this.indexActive; i++) {
                this.balls[i].active = true;  
        }
    }
  },
  mounted() {
      this.change();
  },
  watch:{
      indexActive(newvalue,oldvalue){
        this.change();
      }
  }
};
</script>

<style scoped>
.step {
  width: 630px;
  margin: 0 auto;
  position: relative;
}
</style>
