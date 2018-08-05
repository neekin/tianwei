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
                          <button>修改配置</button>
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
        <div class="mask">
        <div class="changeModal">
            <div class='devmodel'>

            </div>
          <Tabs :animated="false">
                <TabPane label="基本配置">标签一的内容</TabPane>
                <TabPane label="网络配置">标签二的内容</TabPane>
                <TabPane label="LOT配置">标签三的内容</TabPane>
                 <TabPane label="服务器配置">标签三的内容</TabPane>
          </Tabs>
        </div>
        </div>

    </div>
</template>
<script>
import headnav from "../../components/headnav.vue";
import sidebar from "../../components/sidebar";
import container from "../../components/container";
import searchBox from "@/pages/components/list/search";
export default {
  components: {
    headnav,
    sidebar,
    container,
    searchBox
  },
  data() {
    return {
      list: [
        {
          num: 1,
          dev_id: "1234",
          shop_id: 1,
          dev_dec: "devdec-测试设置功能",
          worktime_start: "00:25:00",
          worktime_end: "22:55:00",
          software_ver: "ver 5.2.7(2018-5-11)",
          hardware_ver: "ver 1.0",
          uid: "546325",
          identity: "12",
          in_enabled: 1,
          out_enabled: 1,
          direction: 0,
          divline_result_in_count: 0,
          divline_result_out_count: 48,
          Storage_format_state: 0,
          Reboot_state: 0,
          Restore_state: 0,
          Inout_clear_state: 0,
          Img_state: 0,
          Img_url: "http://mg.skycount.com.cn/CountImg/10005/1234.jpg"
        },
        {
          num: 2,
          dev_id: "1234",
          shop_id: 1,
          dev_dec: "devdec-测试设置功能",
          worktime_start: "00:25:00",
          worktime_end: "22:55:00",
          software_ver: "ver 5.2.7(2018-5-11)",
          hardware_ver: "ver 1.0",
          uid: "546325",
          identity: "12",
          in_enabled: 1,
          out_enabled: 1,
          direction: 0,
          divline_result_in_count: 0,
          divline_result_out_count: 48,
          Storage_format_state: 0,
          Reboot_state: 0,
          Restore_state: 0,
          Inout_clear_state: 0,
          Img_state: 0,
          Img_url: "http://mg.skycount.com.cn/CountImg/10005/1234.jpg"
        },
        {
          num: 3,
          dev_id: "1234",
          shop_id: 1,
          dev_dec: "devdec-测试设置功能",
          worktime_start: "00:25:00",
          worktime_end: "22:55:00",
          software_ver: "ver 5.2.7(2018-5-11)",
          hardware_ver: "ver 1.0",
          uid: "546325",
          identity: "12",
          in_enabled: 1,
          out_enabled: 1,
          direction: 0,
          divline_result_in_count: 0,
          divline_result_out_count: 48,
          Storage_format_state: 0,
          Reboot_state: 0,
          Restore_state: 0,
          Inout_clear_state: 0,
          Img_state: 0,
          Img_url: "http://mg.skycount.com.cn/CountImg/10005/1234.jpg"
        },
        {
          num: 4,
          dev_id: "1234",
          shop_id: 1,
          dev_dec: "devdec-测试设置功能",
          worktime_start: "00:25:00",
          worktime_end: "22:55:00",
          software_ver: "ver 5.2.7(2018-5-11)",
          hardware_ver: "ver 1.0",
          uid: "546325",
          identity: "12",
          in_enabled: 1,
          out_enabled: 1,
          direction: 0,
          divline_result_in_count: 0,
          divline_result_out_count: 48,
          Storage_format_state: 0,
          Reboot_state: 0,
          Restore_state: 0,
          Inout_clear_state: 0,
          Img_state: 0,
          Img_url: "http://mg.skycount.com.cn/CountImg/10005/1234.jpg"
        },
        {
          num: 5,
          dev_id: "1234",
          shop_id: 1,
          dev_dec: "devdec-测试设置功能",
          worktime_start: "00:25:00",
          worktime_end: "22:55:00",
          software_ver: "ver 5.2.7(2018-5-11)",
          hardware_ver: "ver 1.0",
          uid: "546325",
          identity: "12",
          in_enabled: 1,
          out_enabled: 1,
          direction: 0,
          divline_result_in_count: 0,
          divline_result_out_count: 48,
          Storage_format_state: 0,
          Reboot_state: 0,
          Restore_state: 0,
          Inout_clear_state: 0,
          Img_state: 0,
          Img_url: "http://mg.skycount.com.cn/CountImg/10005/1234.jpg"
        },
        {
          num: 6,
          dev_id: "1234",
          shop_id: 1,
          dev_dec: "devdec-测试设置功能",
          worktime_start: "00:25:00",
          worktime_end: "22:55:00",
          software_ver: "ver 5.2.7(2018-5-11)",
          hardware_ver: "ver 1.0",
          uid: "546325",
          identity: "12",
          in_enabled: 1,
          out_enabled: 1,
          direction: 0,
          divline_result_in_count: 0,
          divline_result_out_count: 48,
          Storage_format_state: 0,
          Reboot_state: 0,
          Restore_state: 0,
          Inout_clear_state: 0,
          Img_state: 0,
          Img_url: "http://mg.skycount.com.cn/CountImg/10005/1234.jpg"
        },
        {
          num: 7,
          dev_id: "1234",
          shop_id: 1,
          dev_dec: "devdec-测试设置功能",
          worktime_start: "00:25:00",
          worktime_end: "22:55:00",
          software_ver: "ver 5.2.7(2018-5-11)",
          hardware_ver: "ver 1.0",
          uid: "546325",
          identity: "12",
          in_enabled: 1,
          out_enabled: 1,
          direction: 0,
          divline_result_in_count: 0,
          divline_result_out_count: 48,
          Storage_format_state: 0,
          Reboot_state: 0,
          Restore_state: 0,
          Inout_clear_state: 0,
          Img_state: 0,
          Img_url: "http://mg.skycount.com.cn/CountImg/10005/1234.jpg"
        },
        {
          num: 8,
          dev_id: "1234",
          shop_id: 1,
          dev_dec: "devdec-测试设置功能",
          worktime_start: "00:25:00",
          worktime_end: "22:55:00",
          software_ver: "ver 5.2.7(2018-5-11)",
          hardware_ver: "ver 1.0",
          uid: "546325",
          identity: "12",
          in_enabled: 1,
          out_enabled: 1,
          direction: 0,
          divline_result_in_count: 0,
          divline_result_out_count: 48,
          Storage_format_state: 0,
          Reboot_state: 0,
          Restore_state: 0,
          Inout_clear_state: 0,
          Img_state: 0,
          Img_url: "http://mg.skycount.com.cn/CountImg/10005/1234.jpg"
        },
        {
          num: 9,
          dev_id: "1234",
          shop_id: 1,
          dev_dec: "devdec-测试设置功能",
          worktime_start: "00:25:00",
          worktime_end: "22:55:00",
          software_ver: "ver 5.2.7(2018-5-11)",
          hardware_ver: "ver 1.0",
          uid: "546325",
          identity: "12",
          in_enabled: 1,
          out_enabled: 1,
          direction: 0,
          divline_result_in_count: 0,
          divline_result_out_count: 48,
          Storage_format_state: 0,
          Reboot_state: 0,
          Restore_state: 0,
          Inout_clear_state: 0,
          Img_state: 0,
          Img_url: "http://mg.skycount.com.cn/CountImg/10005/1234.jpg"
        },
        {
          num: 10,
          dev_id: "1234",
          shop_id: 1,
          dev_dec: "devdec-测试设置功能",
          worktime_start: "00:25:00",
          worktime_end: "22:55:00",
          software_ver: "ver 5.2.7(2018-5-11)",
          hardware_ver: "ver 1.0",
          uid: "546325",
          identity: "12",
          in_enabled: 1,
          out_enabled: 1,
          direction: 0,
          divline_result_in_count: 0,
          divline_result_out_count: 48,
          Storage_format_state: 0,
          Reboot_state: 0,
          Restore_state: 0,
          Inout_clear_state: 0,
          Img_state: 0,
          Img_url: "http://mg.skycount.com.cn/CountImg/10005/1234.jpg"
        }
      ],
      configObj: {},
      search: {},
      selecteddev: 0,
      devid: ""
    };
  },
  methods: {
    getlist() {
      // http://mg.skycount.com.cn/api/mg/Device/getDeviceList?devid=&devdes=&pagesize=10&pageindex=1&token=0652655AE62007936698F683D66EB9FA94B728014A98B27E37E61E33F6F4EF29
    },
    changeStatus(num, devid) {
      //   console.log(el.currentTarget);
      //   el.currentTarget.className = "active";
      this.selecteddev = num;
      this.devid = devid;
    },
    isActive(num) {
      return num === this.selecteddev;
    }
  },
  computed: {}
};
</script>
<style lang='less' scoped>
.header {
  div {
    display: inline-block;
  }
  .title {
    color: #fff;
    font-size: 30px;
    padding-left: 20px;
  }
  .buttons {
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
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
}
.changeModal{
    position: absolute;
    top:40px;
    z-index: 1000;
    left:50%;
    width: 524px;
    height:829px;
    margin-left: -200px;
    background-color: #acacac;
    border-radius: 10px;
    padding: 12px;
}
.devmodel{
    height:208px;
    width: 500px;
   background: #fff;
}
</style>

