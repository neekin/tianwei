<template>
    <div>
        <headnav></headnav>
        <sidebar></sidebar>
          <container>
            <searchBox @search='getlist' style='color:#fff'>
                    设备ID：<input type="text" v-model='search.id'>
            </searchBox>
          <div class="container">
              <div class="list">
                  <div class="header">
                      <div class="title">现场照片列表</div>
                      <div class="buttons">
                          <button @click='setimg'>+抓拍现场</button>
                          <button @click='show'> 修改配置</button>
                      </div>
                  </div>
                  <div class="context1">
                       <ul>
                           <li v-for='item in list' :key='item.num' @click='changeStatus(item.num,item.dev_id)' :class={active:isActive(item.num)} >
                                <img :src="item.Img_url" alt="">
                                <p> <span>SHOPID:</span> {{item.shop_id}}</p>
                                <p> <span>设 &nbsp;备 ID:</span> {{item.dev_id}}</p>
                                <p style="width:200px; text-overflow:ellipsis;  white-space:nowrap;   overflow:hidden;"><span>设备描述:</span> {{item.dev_dec}}</p>
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
      search: {
        id: ""
      },
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
      this.params.devid = this.search.id;
      this.$http.get(this.$api.getDeviceList(this.params)).then(res => {
        // console.log("list:", res);
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
          // console.log(res);
          if (res.data.code === 1) {
            this.dev = res.data.result;
          }
        });
    },
    changeStatus(num, devid) {
      if (this.selecteddev === num) {
        this.selecteddev = 0;
        this.devid = 0;
        return;
      }
      this.selecteddev = num;
      this.devid = devid;
    },
    isActive(num) {
      return num === this.selecteddev;
    },
    show() {
      if (this.selecteddev == 0) {
        // alert("没有选中镜头");
        // this.$refs.message.show({title:'警告',text:'没有选中镜头'},'error')
        // notice.show({title:'警告',text:'没有选中镜头'},'error')
         this.$Message.warning('没有选中镜头');
        return;
      }
      this.getdev();
    },
    setimg() {
      if (this.selecteddev == 0) {
        // alert("没有选中镜头");
        //  this.$refs.message.show({title:'警告',text:'没有选中镜头'},'error')
         this.$Message.warning('没有选中镜头');
        return;
      }
      this.$http
        .post(
          this.$api.setDevImg() +
            "?devid=" +
            this.devid +
            "&token=" +
            this.token
        )
        .then(res => {
          // alert(res.data.message);
          //  this.$refs.message.show({title:'消息',text:res.data.message},'info')
           this.$Message.info(res.data.message);
        });
    },
    cancel() {
      this.dev = null;
      this.selecteddev = 0;
    },
    confirm() {
      this.fitparams(this.dev);
      var params = this.dev;
      params.token = this.token;
      this.$http.post(this.$api.setDevice(), params).then(res => {
        if (res.data.code == 1) {
          // alert(res.data.message);
          //  this.$refs.message.show({title:'消息',text:res.data.message},'info')
           this.$Message.info(res.data.message)
           this.cancel();
        } else {
          // alert(res.data.message);
          //  this.$refs.message.show({title:'消息',text:res.data.message},'info')
           this.$Message.info(res.data.message)
        }
      });
    },
    fitparams(obj) {
      for (var key in obj) {
        if (typeof obj[key] === "boolean") {
          obj[key] = obj[key] == true ? 1 : 0;
        }
        if(typeof obj[key] ==='object')
        {
          this.fitparams(obj[key])
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
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  padding: 10px;
  div {
    display: inline-block;
  }
  .title {
    color: #fff;
    font-size: 26px;
    padding-left: 20px;
    font-weight: 600;
  }
  .buttons {
    position: absolute;
    right: 0;
    padding-right: 20px;
    button {
      height: 30px;
      //  font-size: 16px;
      margin-left: 20px;
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
    display: inline-block;
    margin: 10px;
    padding: 10px;
    color: #fff;
    width: 220px;
    img {
      width: 100%;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      span {
        display: inline-block;
        width: 80px;
        text-align: justify;
        text-justify: distribute-all-lines;
      }
    }
  }
  li.active {
    background-color: rgba(255, 255, 255, 0.4);
  }
}
</style>

