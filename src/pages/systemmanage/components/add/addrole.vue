<template>
<div>
  <div class="input">
     角色名称：<input type="text" placeholder="请输入角色名">
  </div>
   <div class='role'>
        <Tree :data="data1" show-checkbox></Tree>
   </div>
</div>
</template>
<script>

export default {
  data() {
    return {
      data1: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1"
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1"
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.input {
  margin: 30px auto 20px;
  width: 300px;
}
.input input {
  background: rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  outline: none;
  width: 225px;
  height: 38px;
  opacity: 0.7;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #ffffff;
}
.role {
  width: 300px;
  margin: 0 auto;
  overflow: auto;
  height: 300px;
}

/* .role li {
  border-bottom: 1px solid #000 !important;
} */

</style>
