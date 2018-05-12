<template>
<div>
       <div class='input group'>
           <span class='title'>登陆账号 <i>*</i>:</span><input type="text" v-model='UserName'>
           <span class="title">姓名 <i>*</i>：</span> <input type="text" v-model='PerName'>
        </div>
         <div class='input'>
           <span class='title'>登陆密码 <i>*</i>:</span><input v-model='UserPwd' type="password">
           <span class="title">确认密码 <i>*</i>：</span> <input type="password" v-model='RePwd'>
         </div>
         <div class='input'>
           <span class='title'>联系方式：</span><input type="text" name="" v-model='UserPhone'>
           <span class='title'>邮箱地址：</span> <input type="text" name="" v-model='UserEmail'>
         </div>
         <div class='input '>
           <span class='title'>所属部门：</span> 
           <select style='margin-left:-1px' v-model='DeptID'>
               <option value="0">请选择~</option>}
               <option v-for="(item,index) in Dept"  :value="item.DeptID">{{ item.DeptName }}</option>
           </select>
           <span class='title'>所属职务：</span> <select style='margin-left:-3px' v-model='JobID'>
             <option value="0">请选择~</option>}
            
               <option v-for="(item,index) in Job"  :value="item.JobID">{{ item.JobName }}</option>
           </select>
         </div>
          <div class='input '>
           <span class='title'>所属角色：</span> 
           <select style='margin-left:-1px' v-model='RoleID'>
               <option value="0">请选择~</option>}
             <option v-for="(item,index) in Role"  :value="item.RoleID">{{ item.RoleName }}</option>
           </select>
        
         </div>
         <div class='input'>
           <span class='title'>备注：</span><textarea name="" id="" cols="30" rows="1" v-model='Remark'></textarea>
         </div>
</div>
</template>
<script>
  export default{
    name:'adduser',
    data(){
      return {
        UserName:'',
        PerName:'',
        UserPwd:'',
        RePwd:'',
        DeptID:0,
        JobID:0,
        RoleID:0,
        UserPhone:'',
        UserEmail:'',
        Remark:'',
        Dept:[],
        Job:[],
        Role:[]
      }
    },
    methods:{
     add(){
      if(this.UserPwd!=this.RePwd)
      {
        alert('请填写正确的密码');
        return;
      }
       var params = {
        UserName:this.UserName,
        PerName:this.PerName,
        UserPwd:this.UserPwd,
        RePwd:this.RePwd,
        DeptID:this.DeptID,
        JobID:this.JobID,
        RoleID:this.RoleID,
        UserPhone:this.UserPhone,
        UserEmail:this.UserEmail,
        Remark:this.Remark,
        token:this.$store.state.token
       }

       this.$http.post(this.$api.adduser(),params).then(res=>{
           if(res.data.code ===1)
           {
            this.$emit('success')
           }
       })



     },
     init(){
      this.$http.get(this.$api.getdeptjobrole()+'?token='+this.$store.state.token).then(res=>{
             this.Dept = res.data.result.Dept;
             this.Job =res.data.result.Job;
             this.Role = res.data.result.Role;
      })
     }
    },
    mounted(){
      this.init();
    }
  }
</script>
<style>
.input input,
.input select
{
  height:38px;
  width: 225px;
  background: rgba(0,0,0,0.12);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 3px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #FFFFFF;
}
.input select option{
  background-color: rgba(0, 42, 80, 0.96);
   border: 1px solid rgba(255,255,255,0.12);
}
.input{
  margin: 25px auto;
  width: 700px;
}
.input .title{
  width: 102px;
  display: inline-block;
  text-align: right;
  padding:0 10px;
}
.input .title i{
  color:red;
}
.input .title:last-child{
  margin-left:10px;
}
.input textarea{
  background: rgba(0,0,0,0.12);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 3px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #FFFFFF;
  height:38px;
  line-height: 38px;
  overflow: hidden;
  width: 590px;
  vertical-align: middle;
}
</style>
