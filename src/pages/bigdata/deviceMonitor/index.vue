<template>
    <div>
        <headnav></headnav>
        <sidebar></sidebar>
          <container>
            <searchBox @search='getlist'>
                              区域选择：
                    <select >
                      <option value="0">
                        请选择
                      </option>
                    </select>
                                   位置：
                    <select >
                      <option value="0">
                        请选择
                      </option>
                    </select>
                    设备ID：
                    <input type="text">
                   
         
            </searchBox>
          <div class="container">
              <div class="list">
                  <div class="header">
                      <div class="title">现场照片列表</div>
                      <div class="buttons">
                          <button>+抓拍现场</button>
                          <button @click='show'> 修改配置</button>
                      </div>
                  </div>
                  <div class="context1">
                       <ul>
                           <li v-for='item in list' :key='item.num' @click='changeStatus(item.num,item.dev_id)' :class={active:isActive(item.num)} >
                               <img :src="item.Img_url" alt="">
                           </li>
                       </ul>
                  </div>
              </div>
          </div>
        </container>
        <Modal v-if='dev' :dev='dev' @cancel='cancel' @confirm='confirm' />
    </div>
</template>
<script>
import headnav from "../../components/headnav.vue";
import sidebar from "../../components/sidebar";
import container from "../../components/container";
import searchBox from "@/pages/components/list/search";
import Modal from "./modal";
export default {
  components: {
    headnav,
    sidebar,
    container,
    searchBox,
    Modal
  },
  data() {
    return {
      list: [],
      configObj: {},
      search: {},
      selecteddev: 0,
      devid: "",
      token: "",
      params: {
        devid: "",
        devdes: "",
        pageindex: 1,
        pagesize: 10
      },
      dev: null
    };
  },
  methods: {
    getlist() {
      this.params.token = this.token;
      this.$http.get(this.$api.getDeviceList(this.params)).then(res => {
        console.log("list:", res);
        if (res.data.code === 1) {
          this.list = res.data.result;
        }
      });
    },
    getdev() {
      this.$http
        .get(this.$api.getDevice(), {
          params: {
            devid: this.devid,
            token: this.token
          }
        })
        .then(res => {
          if (res.data.code === 1) {
            this.dev = res.data.result;
          }
        });
    },
    changeStatus(num, devid) {
      if(this.selecteddev===num)
      {
            this.selecteddev = 0;
            this.devid = 0;
            return;
      }
      this.selecteddev = num;
      this.devid = devid;
      // console.log("devid", this.devid);
    },
    isActive(num) {
      return num === this.selecteddev;
    },
    show() {
      if (this.selecteddev == 0) {
        alert("没有选中照片");
        return;
      }
      this.getdev();
    },
    cancel() {
      this.dev = null;
      this.selecteddev = 0;
    },
    confirm() {
      this.fitparams();
      var params = this.dev;
      params.token = this.token;
      this.$http.post(this.$api.setDevice(), params).then(res => {
        // console.log(res);
        if (res.data.code == 1) {
          alert("修改成功");
         this.cancel();
        }
      });
    },
    fitparams() {
      for (var key in this.dev) {
        if (typeof this.dev[key] === "boolean") {
          this.dev[key] = this.dev[key] == true ? 1 : 0;
        }
        if (typeof this.dev[key] === "object") {
          for (var key in this.dev[key]) {
            if (typeof this.dev[key] === "boolean") {
              this.dev[key] = this.dev[key] == true ? 1 : 0;
            }
          }
        }
      }
    }
  },
  computed: {},
  mounted() {
    this.token = this.$store.state.token;
    this.getlist();
  }
};
</script>
<style lang='less' scoped>
.header {
  background-color: #a1a1a1;
  div {
    display: inline-block;
  }
  .title {
    color: #000;
    font-size: 26px;
    padding-left: 20px;
    font-weight: 600;
  }
  .buttons{
   position: absolute;
   right:0;
   padding-right: 20px;
   button{
     height:30px;
    //  font-size: 16px;
     margin-left:20px;
         width: 96px;
    // height: 38px;
    background: #245ee2;
    border-radius: 3px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    color: #ffffff;
    border: none;
    outline: none;
    line-height: 30px;
   }
  }
  text-align: justify;
}
.context1 {
  padding-left: 20px;
  ul {
    display: flex;
    width: 100%;
    overflow-y: hidden;
    padding-right: 60px;
  }
  li {
    display: flex;
    margin: 10px;
    padding: 10px;
  }
  li.active {
    background-color: rgba(255, 255, 255, 0.4);
  }
}
</style>

