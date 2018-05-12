<template>
<div>
  <div class="input">
     角色名称：<input type="text" placeholder="请输入角色名" v-model='name'>
  </div>
   <div class='role'>
        <Tree :data="menus" show-checkbox></Tree>
   </div>
</div>
</template>
<script>

export default {
  data() {
    return {
      menus:[],
      name:''
    };
  },
  methods:{
    getlist(){
     this.$http.get(this.$api.getmenulist()+'?token='+this.$store.state.token).then(res=>{
          var arr = [];
           if(res.data.code==1){
             var obj = {};
             var menus = res.data.result;
             for(var i=0;i<menus.length;i++)
             {
              menus[i].title = menus[i].MenuName;
                  if(menus[i].PMenuId==0)
                  {
                    obj = menus[i];
                    // obj.title = menus[i].MenuName;
                    obj.children= [];
                    for(var j = 0;j<menus.length;j++)
                    {
                           if(obj.MenuId == menus[j].PMenuId)
                           {
                            console.log(menus[j].PMenuId);
                                    obj.children.push(menus[j]);
                           }
                    }
                    arr.push(obj);
                  }
             }
             this.menus = arr;

           }
     })
    },
    add(){
        //       "MenuId": [
        //   0
        // ]
        var MenuId=[];
        for(var i=this.menus.length-1;i>=0;i--)
        {
             var obj = this.menus[i];
              if(obj.checked)
              {
                   MenuId.push(obj.MenuId);

              }
              if(obj.children)
                 {
                    for(var j = obj.children.length-1;j>=0;j--)
                    {
                      var sobj = obj.children[j];
                      if(sobj.checked)
                      {
                        MenuId.push(sobj.MenuId);
                      }
                    }
                }
        }
   var params={
        "token": this.$store.state.token,
        "RoleId": 0,
        "RoleName": this.name,
        MenuId
      }
      console.log(this.name);
      console.log(this.menus);
      this.$http.post(this.$api.addrole(),params).then(res=>{
        console.log(res);
        if(res.data.code===1){
           this.$emit('success')
        }
      })


    }
  },
  mounted(){
    this.getlist();
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
