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
  props: ["edit"],
  data() {
    return {
      menus: [],
      checkedmenus: [],
      name: ""
    };
  },
  methods: {
    getlist() {
      this.$http
        .get(
          this.$api.getmenuAllListRole() +
            "?token=" +
            this.$store.state.token +
            "&RoleId=" +
            this.edit.RoleId
        )
        .then(res => {
          var arr = [];
          if (res.data.code == 1) {
            var obj = {};
            var menus = res.data.result;
            for (var i = 0; i < menus.length; i++) {
              menus[i].title = menus[i].MenuName;
              if (menus[i].PMenuId == 0) {
                obj = menus[i];
                obj.children = [];
                for (var j = 0; j < menus.length; j++) {
                  if (obj.MenuId == menus[j].PMenuId) {
                    if (menus[j].IsChecked != 0) {
                      menus[j].checked = true;
                    }
                    obj.children.push(menus[j]);
                  }
                }
                arr.push(obj);
              }
            }
            this.menus = arr;
          }
        });
    },
    add() {
      var MenuId = [];
      for (var i = this.menus.length - 1; i >= 0; i--) {
        var obj = this.menus[i];
        if (obj.checked) {
          MenuId.push(obj.MenuId);
        }
        if (obj.children) {
          for (var j = obj.children.length - 1; j >= 0; j--) {
            var sobj = obj.children[j];
            if (sobj.checked) {
              MenuId.push(sobj.MenuId);
            }
          }
        }
      }
      // console.log(MenuId);
      // return;
      var params = {
        token: this.$store.state.token,
        RoleId: this.edit.RoleId,
        RoleName: this.name,
        MenuId
      };
      if (!this.name) {
        this.$emit("error", "请填写角色名称");
        return;
      }

      this.$http.post(this.$api.addrole(), params).then(res => {
        // console.log(res);
        if (res.data.code === 1) {
          this.$emit("success");
        } else {
          this.$emit("error", res.data.message);
        }
      });
    }
  },
  mounted() {
    if (this.edit.RoleId != 0) {
      this.name = this.edit.RoleName;
      // console.log("123123", this.checkedmenus);
      this.checkedmenus = this.edit.MenuName.split(",");
      // console.log("123123333", this.checkedmenus);
    }
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
