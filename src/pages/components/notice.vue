<template>
	  
<div class="mask" v-if='notice'>
  <div class="form">
    <div class="title">
       重要提示
    </div>
    <span class='fa fa-trash'></span>
    <p>你确定要删除这些内容吗？</p>
    <div class="options">
      <button @click='confirm' class='confirm'>确定</button>
      <button @click='cancel' class='cancel'>取消</button>
    </div>
  </div>
</div>

</template>

<script>
export default {
  methods: {
    confirm() {
      // console.log(this.next)
      this.next();
    },
    cancel() {
      this.$emit('hide');
    }
  },
  props: ["next", "notice"]
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
  width: 394px;
  height: 429px;
  background: rgba(0, 42, 80, 0.96);
  border: 1px solid rgba(23, 107, 184, 0.96);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
  text-align: center;
  color: #fff;
}
.form .title {
  background: #02498a;
  height: 50px;
  line-height: 50px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  border: 1px solid rgba(23, 107, 184, 0.96);
}
.form span {
  font-size: 89px;
  margin-top: 50px;
}
.form p {
  margin-top: 50px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #ffffff;
}
.options{
  position: absolute;
  bottom: 20px;
}
.options button{
  border-radius: 3px;
  width: 122px;
  height: 38px;
  line-height: 38px;
  border:none;
  outline: none;
  font-family: MicrosoftYaHei;
font-size: 16px;
color: #FFFFFF;
margin: 0 30px;
}
.options button.confirm{
background: #E25863;
}
.options button.cancel{
  border: 1px solid #FFFFFF;
  border-radius: 3px;
  background: none;
}
</style>