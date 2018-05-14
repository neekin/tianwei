<template>
  <div class="login">
    <div class="loginlogo"></div>
    <div class="loginform">
      <h3>用户登陆</h3>
      <hr style='width:442px;margin:0 auto 42px auto;border:none;border-top:1px solid #14395B;'>
      <div class="input">
        <input v-model='username' type="text" placeholder="请输入用户名">
        <span class='fa fa-user'></span>
      </div>
      <div class="input">
        <input v-model='password' type="password" placeholder="请输入密码">
        <span class='fa fa-lock'></span>
      </div>
      <div class="w">
        <router-link to='/forgetpassword'>
          忘记密码?
        </router-link>
      </div>
      <div class="input">
        <button @click='login'>登陆</button>
      </div>
    </div>
    <error-tip v-if='msg' :statu='statu'>
      {{msg}}
    </error-tip>
  </div>
</template>
<script>
import ErrorTip from "./components/error";
import Base64 from "@/api/Base64";
import StringUpdater from "@/api/string_update";
export default {
    name: "login",
    data: function() {
        return {
            msg: "",
            username: "",
            password: "",
            statu: 0
        };
    },
    components: {
        ErrorTip
    },
    methods: {
        login() {
            setTimeout(() => {
                this.msg = "";
                this.statu = 0;
            }, 2000);
            if (this.username == "" || this.password == "") {
                this.msg = "请输入用户名或密码";
                return;
            }
            var Account = StringUpdater.update(Base64.encode(this.username));
            var Pwd = StringUpdater.update(Base64.encode(this.password));
            this.$http
                .post(this.$api.login(), { Account, Pwd })
                .then(res => {
                    if (res.data.code == 1) {
                        this.statu = res.data.code;
                        this.$store.commit("updateToken", res.data.token);
                        // console.log(this.username);
                        this.$store.commit('updateUserName',this.username);
                        this.$router.push("/");
                    }
                    this.msg = res.data.message;
                })
                .catch(err => {
                    this.msg = res.data.message;
                });
        },

        // token失效后自动登陆
        autoLogin() {
            this.username = 'neekin';
            this.password = '123';
            var Account = StringUpdater.update(Base64.encode(this.username));
            var Pwd = StringUpdater.update(Base64.encode(this.password));
            this.$http
                .post(this.$api.login(), { Account, Pwd })
                .then(res => {
                    if (res.data.code == 1) {
                        this.statu = res.data.code;
                        this.$store.commit("updateToken", res.data.token);
                        this.$store.commit('updateUserName',this.username);
                        this.$router.push("/");
                    }
                    this.msg = res.data.message;
                })
                .catch(err => {
                    this.msg = res.data.message;
                });
        }
    },
    mounted(){
      this.autoLogin()
    }

    
};
</script>
<style  scoped>
.w {
    width: 440px;
    margin: 0 auto;
    text-align: right;
}
.login {
    height: 600px;
    width: 500px;
    margin: 20px auto 0;
}

.loginform {
    height: 440px;
    width: 500px;
    background: #0e2d5d;
    border: 1px solid #004a8e;
    box-shadow: 0 0 8px 0 rgba(0, 22, 50, 0.08);
    padding-top: 36px;
    box-sizing: border-box;
}
.loginform h3 {
    text-align: center;
    line-height: 31px;
    font-size: 24px;
    color: #fff;
    font-family: "MicrosoftYaHei-Bold";
    margin-bottom: 22px;
}
.loginform .input {
    width: 440px;
    height: 50px;
    background: rgba(0, 0, 0, 0);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    margin: 28px auto;
    padding-left: 8px;
    padding-top: 10px;
    box-sizing: border-box;
    position: relative;
    color: #fff;
    overflow: hidden;
}
.loginform .input button {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: #f49c00;
    outline: none;
    border: none;
    box-shadow: none;
    color: #fff;
    font-size: 18px;
}
.loginform .input span {
    font-size: 26px;
    position: absolute;
    z-index: 3;
}
.loginform .input input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-indent: 2em;
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0);
    color: #fff;
    font-size: 20px;
}
.loginform .input input:focus {
    background: rgb(255, 255, 255);
    color: #000;
}
.loginform .input input:focus ~ span {
    color: #a0a0a0;
}
</style>
