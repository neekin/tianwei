<template>
<div>
    <div class="mask" v-if='show'>
        <div class="form">
            <div class="title">
                <slot name='title'>新增基础信息</slot>
                <span @click='cancle' class="fa fa-close pull-right close"></span>
            </div>
            <slot name='form'>
                  <component :is="form"></component>
            </slot>

             <div>
                <button @click='cancle'>取消</button><button>确定</button>
             </div>
            </div>
        </div>
  </div>

</template>
<script>
import addbase from "./addbase";
import adduser from "./adduser";
export default {
  name: "add",
  props: ["form",'show'],
  components: {
    addbase,
    adduser
  },
  methods: {
    cancle(){
      this.$emit('hide')
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
</style>
