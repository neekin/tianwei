<template>
  <div class='sidebar'>
   <div class="logo">
   </div>
   <p class='title'>天威大数据</p>
   <ul>
       <li class='active'> <router-link to='/guestdata'>客流数据</router-link></li>
       <li><router-link to='/bcreport'>商圈报告</router-link></li>
       <li><router-link to='/rtdevice'>实时设备</router-link></li>  
   </ul>
      <p class='title'>系统管理</p>
   <ul>
       <li><router-link to='/basemanage'>基础信息</router-link></li>
       <li><router-link to='/user'>用户配置</router-link></li>
       <li><router-link to='/role'>角色配置</router-link> </li>  
   </ul>
   <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: "sidebar"
};
</script>
<style>
.logo {
  padding-top: 10px;
  height: 54px;
}
.sidebar {
  width: 210px;
  background-color: #00397b;
  height: 100%;
  margin-right: -210px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
.sidebar .title {
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #7495c0;
  line-height: 21px;
  margin: 24px 10px 0 10px;
}
.line {
  height: 100%;
  position: absolute;
  background-color: #f49c00;
  width: 2px;
  right: 0;
  top: 54px;
}
.sidebar ul {
  margin-top: 12px;
}
.sidebar ul li {
  width: 210px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-family: MicrosoftYaHei-Bold;
  font-size: 16px;
  color: #ffffff;
}
.sidebar ul li a{
  font-family: MicrosoftYaHei-Bold;
  font-size: 16px;
  color: #ffffff;
  display: inline-block;
  height: 100%;
  width: 100%;
}
.sidebar ul li::before {
  content: "";
  border-top: 1px solid #002D57;
  margin: 1px auto;
  width: 170px;
  display: block;
}
.sidebar ul li:hover{
  cursor: pointer;
}
.sidebar ul li.active::before {
  border-top: 1px solid #f49c00;
}
.sidebar ul li:hover::before {
  border-top: 1px solid #002e62;
}
.sidebar ul li.active {
  background: #f49c00;
}
.sidebar ul li:hover {
  background: #002e62;
}
</style>
