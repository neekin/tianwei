<template>
<div>
    <div class="mask" v-if='show'>
        <div class="form" :style='"width:"+formwidth+"px"'>
            <div class="title">
                <slot name='title'>新增基础信息</slot>
                <span @click='cancle' class="fa fa-close pull-right close"></span>
            </div>
            <slot name='form'>
                  <component ref='form' :is="form" @success='success' :edit='edit'></component>
            </slot>

             <div class='buttons'>
                <button @click='cancle'>取消</button>
                <button @click='addSome' class='primary'>确定</button>
             </div>
            </div>
        </div>
  </div>

</template>
<script>
import addbase from "./addbase";
import adduser from "./adduser";
import addrole from "./addrole"
export default {
  name: "add",
  props: ["form", "show",'formwidth','edit'],
  components: {
    addbase,
    adduser,
    addrole
  },
  methods: {
    cancle() {
      this.$emit("hide");
    },
    addSome(){
           this.$refs.form.add();
    },
    success(){
      this.$emit('success');
    }

  }
};
</script>
<style scoped>
.mask {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
}
.form {
  height: 584px;
  width: 742px;
  background-color: #fff;
  margin: 80px auto;
  opacity: 0.96;
  background-color: rgba(0, 42, 80, 0.96);
  border: 1px solid #176bb8;
  color: #ffffff;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #ffffff;
  position: relative;
}
.form .title {
  height: 50px;
  background-color: rgba(2, 73, 138, 0.96);
  border-bottom: 1px solid #176bb8;
  font-family: MicrosoftYaHei-Bold;
  line-height: 50px;
  padding-left: 40px;
  font-size: 16px;
}
.form .title .close {
  margin: 18px;
}
.form button {
  width: 122px;
  height: 38px;
  background: #002b52;
  border: 1px solid #ffffff;
  border-radius: 3px;
  outline: none;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #ffffff;
  margin: 25px;
}
.form button.primary{
  background: #29BD99;
}
.form .buttons {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}
</style>
