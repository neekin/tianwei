<template>
<div>
       <div class='input group'>
           <span class='title'>登陆账号 <i>*</i>:</span><input type="text" v-model='addParams.UserName'>
           <span class="title">姓名 <i>*</i>：</span> <input type="text" v-model='addParams.PerName'>
        </div>
         <div class='input'>
           <span class='title'>登陆密码 <i>*</i>:</span><input v-model='addParams.UserPwd' type="password">
           <span class="title">确认密码 <i>*</i>：</span> <input type="password" v-model='addParams.RePwd'>
         </div>
         <div class='input'>
           <span class='title'>联系方式：</span><input type="text" name="" v-model='addParams.UserPhone'>
           <span class='title'>邮箱地址：</span> <input type="text" name="" v-model='addParams.UserEmail'>
         </div>
         <div class='input '>
           <span class='title'>所属部门：</span> 
           <select style='margin-left:-1px' v-model='addParams.DeptID'>
               <option value="0">请选择~</option>}
               <option v-for="item in Dept"  :key='item.DeptID' :value="item.DeptID">{{ item.DeptName }}</option>
           </select>
           <span class='title'>所属职务：</span> <select style='margin-left:-3px' v-model='addParams.JobID'>
             <option value="0">请选择~</option>}
            
               <option v-for="item in Job"  :key='item.JobID' :value="item.JobID">{{ item.JobName }}</option>
           </select>
         </div>
          <div class='input '>
           <span class='title'>所属角色：</span> 
           <select style='margin-left:-1px' v-model='addParams.RoleId'>
               <option value="0">请选择~</option>}
             <option v-for="item in Role"  :key='item.RoleId' :value="item.RoleId">{{ item.RoleName }}</option>
           </select>
        
         </div>
         <div class='input'>
           <span class='title'>备注：</span><textarea name="" id="" cols="30" rows="1" v-model='addParams.Remark'></textarea>
         </div>
</div>
</template>
<script>
import Base64 from "@/api/Base64";
import StringUpdater from "@/api/string_update";
export default {
  name: "adduser",
  props: ["edit"],
  data() {
    return {
     addParams:{
      UserId:0,
      UserName: "",
      PerName: "",
      UserPwd: "",
      RePwd: "",
      DeptID: 0,
      JobID: 0,
      RoleId: 0,
      UserPhone: "",
      UserEmail: "",
      Remark: "",
     },
      Dept: [],
      Job: [],
      Role: []
    };
  },
  methods: {
    add() {
      if (this.addParams.UserPwd != this.addParams.RePwd) {
        this.$emit("error", '两次密码不一致');
        return;
      }
      var params = {
        UserId:this.addParams.UserId,
        UserName: this.addParams.UserName,
        PerName: this.addParams.PerName,
        UserPwd: StringUpdater.update(Base64.encode(this.addParams.UserPwd)),
        RePwd: StringUpdater.update(Base64.encode(this.addParams.RePwd)),
        DeptID: this.addParams.DeptID,
        JobID: this.addParams.JobID,
        RoleId: this.addParams.RoleId,
        UserPhone: this.addParams.UserPhone,
        UserEmail: this.addParams.UserEmail,
        Remark: this.addParams.Remark,
        token: this.$store.state.token
      };

      this.$http.post(this.$api.adduser(), params).then(res => {
        if (res.data.code === 1) {
          this.$emit("success");
        }else {
          this.$emit("error", res.data.message);
        }
      });
    },
    init() {
      this.$http
        .get(this.$api.getdeptjobrole() + "?token=" + this.$store.state.token)
        .then(res => {
          this.Dept = res.data.result.Dept;
          this.Job = res.data.result.Job;
          this.Role = res.data.result.Role;
        });
    }
  },
  mounted() {
    if(this.edit.UserId!=0)
    {
      console.log('user',this.edit);
      this.addParams = this.edit;
      this.addParams.RePwd = this.edit.UserPwd;
    }
    this.init();
  }
};
</script>
<style scoped>
.input input,
.input select {
  height: 38px;
  width: 225px;
  background: rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #ffffff;
}
.input select option {
  background-color: rgba(0, 42, 80, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.input {
  margin: 25px auto;
  width: 700px;
}
.input .title {
  width: 102px;
  display: inline-block;
  text-align: right;
  padding: 0 10px;
}
.input .title i {
  color: red;
}
.input .title:last-child {
  margin-left: 10px;
}
.input textarea {
  background: rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #ffffff;
  height: 38px;
  line-height: 38px;
  overflow: hidden;
  width: 590px;
  vertical-align: middle;
}
</style>
