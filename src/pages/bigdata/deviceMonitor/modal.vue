<template>
            <div class="mask" >
        <div class="changeModal">
            <div class='devmodel'>
              <div class="title">视频信息</div>
                  <div class="img" style='margin-left:10px;'>
                    <img :src="dev.Img_url" alt="">
                  <div class='clearfix'>
                      <span style='color:green'>in:<i v-text='dev.divline_result_in_count'>0</i></span>
                      <span>
                          <input type="checkbox" id='in_enabled' v-model='dev.in_enabled'>
                      <label for="in_enabled">进</label>
                      </span>
                     <span>
                          <input type="checkbox" id='out_enabled' v-model='dev.out_enabled'><label for="out_enabled">出</label>
                     </span>
                     <span>
                          <input type="checkbox" id='direction' v-model='dev.direction'><label for="direction">方向</label>
                     </span>
                  </div>
            <div class='clearfix' style='margin-top:10px;'>
            <span style='color:red;'>out:<i  v-text='dev.divline_result_out_count'>0</i>
           </span>
          <span>
            <input type="checkbox" id='overlay_result' v-model='dev.display_config.overlay_result'>
            <label for="overlay_result">结果</label>
          </span>
           <span>
                <input type="checkbox"
                v-model='dev.display_config.head_frame' id='head_frame'>
            <label for="head_frame">人头</label>
           </span>
            <span>
                <input type="checkbox"
                v-model='dev.display_config.count_line' id='count_line'>
            <label for="count_line">区域</label>
            </span>
           <span>
                <input type="checkbox"
                v-model='dev.display_config.head_trace' id='head_trace'>
            <label for="head_trace">跟踪</label>
           </span>
                  </div>
                  </div>
                  <div class="info">
                       <fieldset >
                    <legend>检测区域</legend>
                    <button style='width:140px;margin-left:20px'>检测区域</button>
                    <button style='width:140px;margin-left:20px'>基准线</button>
                  </fieldset>
                            <fieldset >
                    <legend>算法参数</legend>
                         <table border='0'  cellpadding="0">
                           <tr>
                             <td align='left'>灵敏度:</td>
                             <td width='290'> <Slider  show-input input-size='small' v-model='dev.arithmetic_param.dect_thr' :max=100></Slider></td>
                           </tr>
                           <tr>
                             <td align='left'>人头大小:</td>
                             <td > <Slider  show-input :max=120 input-size='small' v-model='dev.arithmetic_param.head_size'></Slider></td>
                           </tr>
                           <tr>
                             <td align='left'>进比例:</td>
                             <td > <Slider   show-input :max=2 input-size='small'></Slider></td>
                           </tr>
                           <tr>
                             <td align='left'>出比例:</td>
                             <td > <Slider   :max=2 show-input input-size='small'></Slider></td>
                           </tr>
                         </table>
                  </fieldset>
                  <input type="checkbox" id='zero' v-model='dev.inout_clear_state'>
                  <label for="zero">清零</label>

                  </div>
            </div>
          <Tabs :animated="false">
                <TabPane label="基本配置">
                         <div class="paneltitle">
                           设备信息
                         </div>
                         <div class="panel-body">
      <div class="pie">
         <i-circle
        :size="150"
        :trail-width="4"
        :stroke-width="5"
        :percent="dev.storage_config.nand_block_used / dev.storage_config.nand_block_total * 100"
        stroke-linecap="square"
        stroke-color="#43a3fb">
        <div class="demo-Circle-custom">
            <h1>系统空间</h1>
           <br>
            <span>
                空闲
              
                <i v-text=' parseInt(dev.storage_config.nand_block_free / dev.storage_config.nand_block_total * 100)+"%"'></i>
            </span>
        </div>
    </i-circle>
      </div>
   <div class="pie">
      <i-circle
        :size="150"
        :trail-width="4"
        :stroke-width="5"
        :percent="dev.storage_config.sd_block_used / dev.storage_config.sd_block_total * 100"
        stroke-linecap="square"
        stroke-color="#43a3fb">
        <div class="demo-Circle-custom">
            <h1>数据空间</h1>
     
            <span>
                空闲
                  <i v-text=' parseInt(dev.storage_config.sd_block_free / dev.storage_config.sd_block_total * 100)+"%"'></i>
            </span>
        </div>
    </i-circle>
   </div>
       <br>
                    <div style='margin-bottom:20px;'>
                               <input type="checkbox" id="reboot" v-model='dev.reboot_state'><label style='margin-right:20px;' for="reboot">重启</label> 
                                       <input type="checkbox" id="setdefault" v-model='dev.restore_state'><label for="setdefault" style='margin-right:80px;'>恢复默认参数</label> 
                                         <input type="checkbox" v-model='dev.storage_format_state' id="format"><label for="format">格式化空间数据</label> 
                    </div>
                    <hr>
                    <table style='margin:0 auto'>
                      <tr>
                        <td width='80' align='right'>设备描述:</td>
                        <td><input type="text" v-model='dev.dev_dec'></td>
                        <td  align='right'>设备id:</td>
                        <td><input type="text" v-model='dev.dev_id' readonly></td>
                      </tr>
                                    <tr>
                        <td  align='right'>门店ID:</td>
                        <td><input type="text" v-model='dev.shop_id'></td>
                        <td width='80'  align='right'>硬件版本:</td>
                        <td><input type="text" readonly v-model='dev.hardware_ver'></td>
                      </tr>
                       <tr>
                        <td align='right'>设备SN码:</td>
                        <td><input type="text" readonly v-model='dev.uid'></td>
                        <td align='right'>软件版本:</td>
                        <td><input type="text" readonly v-model='dev.hardware_ver'></td>
                      </tr>
                        <tr>
                        <td align='right'>工作时间:</td>
                        <td><input type="text" name="" id="" style='width:60px' v-model='dev.worktime_start'>to <input type="text" style='width:60px' v-model='dev.worktime_end'></td>
                        <td align='right'>设备时间:</td>
                        <td align='center'><span v-text='dev.time_config.time'></span></td>
                      </tr>
                    </table>
                    <div style='margin:20px 20px;'>
                      时间: <input type="text" v-model='dev.time_config.time'><input type="checkbox" id='settime'>  <label for="settime">设置时间</label>
                    <input type="checkbox" id='synctime'><label for="synctime">同步主机时间</label>
                    </div>
                    <hr>
                     <div style='margin-left:30px'>
                          ntp服务器地址: <input type="text" v-model='dev.time_config.ntp_svr'>
                      <br>
                      <br>
                      时区选择: <select v-model='dev.time_config.zone'>
                          <option value="(UTC+08:00)Beijing,Shanghai">(UTC+08:00)Beijing,Shanghai</option>
                      </select>
                        <br>
                      <br>
                      <input type="checkbox" id='ntpenable' v-model='dev.time_config.use_ntp'><label for="ntpenable">NTP Enable</label>
                     </div>
                     
                   </div>
        

                </TabPane>
                <TabPane label="网络配置">
                  <div class="panel-body">
                    <Tabs :animated="false">
                        <TabPane label="有线网络">
                          <table align='center' width='300' style='margin:0 auto;'>
                            <tr>
                              <td align='right'>IP地址:</td>
                              <td><input type="text" v-model='dev.network_config.ip'></td>
                            </tr>
                            <tr>
                              <td align='right'>子网掩码:</td>
                              <td> <input type="text" v-model='dev.network_config.mask'> </td>
                            </tr>
                            <tr>
                              <td align='right'>网关:</td>
                              <td><input type="text" v-model='dev.network_config.gateway'></td>
                            </tr>
                            <tr>
                              <td align='right'>MAC:</td>
                              <td><input type="text" readonly v-model='dev.network_config.mac'></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td> 
                                <input type="checkbox" id='wifidhcp' v-model='dev.network_config.use_dhcp'>
                                <label for="wifidhcp">DHCP</label>
                              </td>
                            </tr>
                          </table>
                        </TabPane>
                        <TabPane label="无线网络">

                            <table align='center' width='300' style='margin:0 auto;'>
                            <tr>
                              <td align='right'>IP地址:</td>
                              <td><input type="text" v-model='dev.wifi_config.wifi_ip'></td>
                            </tr>
                            <tr>
                              <td align='right'>子网掩码:</td>
                              <td> <input type="text" v-model='dev.wifi_config.wifi_mask'> </td>
                            </tr>
                            <tr>
                              <td align='right'>网关:</td>
                              <td><input type="text" v-model='dev.wifi_config.wifi_gateway'></td>
                            </tr>
                            <tr>
                                     <tr>
                              <td align='right'>SSID:</td>
                              <td><input type="text" v-model='dev.wifi_config.wifi_SSID'></td>
                            </tr>
                                                 <tr>
                              <td align='right'>密码:</td>
                              <td><input type="password" v-model='dev.wifi_config.wifi_passwd'></td>
                            </tr>
                            <tr>
                              <td align='right'>MAC:</td>
                              <td><input readonly type="text" v-model='dev.wifi_config.wifi_mac' ></td>
                            </tr>
                                  <tr>
                              <td align='right'>状态:</td>
                              <td><input readonly type="text" v-model='dev.wifi_config.wifi_status' ></td>
                            </tr>
                               <tr>
                              <td align='right'>信号强度:</td>
                              <td><input readonly type="text" v-model='dev.wifi_config.wifi_signal' ></td>
                            </tr>
                            <tr>
                              <td>
                               
                              </td>
                              <td> 
                                     <input type="checkbox" id='wifi_enable' v-model='dev.wifi_config.wifi_enable'>
                                <label style='margin-right:20px;' for="wifi_enable">启用wifi</label>
                                <input type="checkbox" id='wifi_use_dhcp' v-model='dev.wifi_config.wifi_use_dhcp'>
                                <label for="wifi_use_dhcp">DHCP</label>
                              </td>
                            </tr>
                          </table>
                        </TabPane>
                    </Tabs>
                  </div>
                </TabPane>
                <TabPane label="LOT配置">
                  <div class="panel-body lot" style='padding-top:20px;'>
                    <table style='margin:0 auto;' width='680' cellpadding=10 >
                        <tr>
                            <td></td>
                            <td align='left'> <input type="checkbox" v-model='dev.lot_server_config.enable'  id="openlot"><label for="openlot">开启lot模组</label></td>
                            <td></td>
                            <td></td>
                        </tr>
                      <tr>
                        <td>数据服务器url:</td>
                        <td><input type="text" v-model='dev.lot_server_config.data_server_addr'></td>
                        <td>status:</td>
                        <td><input type="text" v-model='dev.lot_server_config.status' readonly></td>
                      </tr>
                      <tr>
                        <td>配置服务器url:</td>
                        <td><input type="text" v-model='dev.lot_server_config.config_server_addr'></td>
                        <td>signal:</td>
                        <td><input type="text" v-model='dev.lot_server_config.signal' readonly></td>
                      </tr>
                      <tr>
                        <td>心跳包间隔:</td>
                        <td><input type="text" v-model='dev.lot_server_config.heartbeat'></td>
                        <td>imei:</td>
                        <td><input type="text" v-model='dev.lot_server_config.imei' readonly></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>lac:</td>
                        <td><input type="text" v-model='dev.lot_server_config.lac' readonly></td>
                      </tr>
                        <tr>
                        <td></td>
                        <td></td>
                        <td>cid:</td>
                        <td><input type="text" v-model='dev.lot_server_config.ci' readonly></td>
                      </tr>
                    </table>
                  </div>
                </TabPane>
                <TabPane label="服务器配置">
                  <div class="paneltitle">
                    服务器设置
                  </div>
                  <div class="panel-body ftp">
                     生产记录的间隔(秒为单位,ftp1,ftp2公用): <input type="text" style='margin:10px;' v-model='ftp_transfer_interval'>
                     <hr>
                     <fieldset class="ftpsetting">
                      <legend>ftp1</legend> 
                       <br>
                     
                       <br>
                       <table>
                           <tr>
                               <td>  ftp类型:  </td>
                               <td><input type="radio" name='ftp1' v-model='dev.ftp1_config.ftp1_use_sftp' id='ftp1_use_sftp' value='1'> <label for="ftp1_use_sftp" style='margin-right:10px;'>sftp</label> 
                       <input type="radio"  name='ftp1' v-model='dev.ftp1_config.ftp1_use_sftp' id='ftp1_use_ftp' value='2'><label for="ftp1_use_ftp" style='margin-right:10px;'>ftp</label> 
                       <input type="radio"  name='ftp1' v-model='dev.ftp1_config.ftp1_use_sftp' id='ftp1_use_http' value='3'><label for="ftp1_use_http">http</label></td>
                           </tr>
                         <tr>
                           <td width='100'>服务器地址:</td>
                           <td><input type="text" v-model='dev.ftp1_config.ftp1_add'></td>
                         </tr>
                         <tr>
                           <td>用户名:</td>
                           <td><input type="text" v-model='dev.ftp1_config.ftp1_user_name'></td>
                         </tr>
                         <tr>
                           <td>密码:</td>
                           <td><input type="text" v-model='dev.ftp1_config.ftp1_password'></td>
                         </tr>
                               <tr>
                           <td></td>
                           <td><input type="checkbox" v-model="dev.ftp1_config.ftp1_enable_tran_file_to_ftp_server" id="uploadftp1"><label for="uploadftp1">上传</label></td>
                         </tr>
                       </table>
                     </fieldset>
                       <fieldset class="ftpsetting">
                      <legend>ftp2</legend> 
                       <br>
                     
                       <br>
                       <table>
                           <tr>
                               <td> ftp类型:</td>
                               <td>  <input type="radio" name='ftp2' v-model='dev.ftp2_config.ftp2_use_sftp' id='ftp2_use_sftp' value='1'> <label for="ftp2_use_sftp" style='margin-right:10px;'>sftp</label> 
                       <input type="radio"  name='ftp2' v-model='dev.ftp2_config.ftp2_use_sftp' id='ftp2_use_ftp' value='2'><label for="ftp2_use_ftp" style='margin-right:10px;'>ftp</label> 
                       <input type="radio"  name='ftp2' v-model='dev.ftp2_config.ftp2_use_sftp' id='ftp2_use_http' value='3'><label for="ftp2_use_http">http</label> </td>
                           </tr>
                         <tr>
                           <td width='100'>服务器地址:</td>
                           <td><input type="text" v-model='dev.ftp2_config.ftp2_add'></td>
                         </tr>
                         <tr>
                           <td>用户名:</td>
                           <td><input type="text" v-model='dev.ftp2_config.ftp2_user_name'></td>
                         </tr>
                         <tr>
                           <td>密码:</td>
                           <td><input type="text" v-model='dev.ftp2_config.ftp2_password'></td>
                         </tr>
                               <tr>
                           <td></td>
                           <td><input type="checkbox" v-model="dev.ftp2_config.ftp2_enable_tran_file_to_ftp_server" id="uploadftp2"><label for="uploadftp2">上传</label></td>
                         </tr>
                       </table>
                     </fieldset>
                  </div>
                </TabPane>
          </Tabs>
          <div class="buttons">
            <button @click='confirm'>确认提交</button>
            <button @click='cancel'>取消提交</button>
          </div>
        </div>
        </div>
</template>
<script>
export default {
  props: ["dev"],
  data() {
    return {
      ftp_transfer_interval: 300
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    confirm(){
        this.$emit('confirm');
    }
  },
  watch: {
    ftp_transfer_interval(value) {
      this.dev.ftp1_config.ftp1_ftp_transfer_interval = this.dev.ftp2_config.ftp2_ftp_transfer_interval = value;
    }
  }
};
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  overflow-y: scroll;
}
.changeModal {
  input {
    vertical-align: middle;
  }
  label {
    vertical-align: middle;
  }
  position: absolute;
  top: 40px;
  z-index: 1000;
  left: 50%;
  width: 724px;
  height: 929px;
  margin-left: -362px;
  background-color: #acacac;
  border-radius: 10px;
  padding: 12px;
  button {
    outline: 0;
    border-radius: 4px;
    background-color: #0094ff;
    color: #fff;
    padding: 4px;
  }
  .paneltitle {
    border-bottom: 1px solid #000;
    color: #fff;
  }
  .lot{
    //    table>tr>td:nth-of-type(2){
    //        width: 350px;
    //    }
        table>tr>td:nth-of-type(4){
            width: 60px;
        }
         table>tr>td:nth-of-type(4)>input[type='text']{
             width: 120px;
         }
      table>tr>td:nth-of-type(2),
      table>tr>td:nth-of-type(4){
          text-align: left;
      }
       table>tr>td:nth-of-type(2)>input[type='text']{
           width: 100%;
       }
  }
  .panel-body {
    height: 490px;
    background-color: #fff;
    text-align: center;
    .pie {
      display: inline-block;
      height: 160px;
      width: 160px;
      margin: 10px;
    }
    .ftpsetting {
      width: 308px;
      border: 1px solid #acacac;
      display: inline-block;
      margin: 0 10px;
      padding: 10px;
      table td{
          padding: 10px;
      }
    }
  }
  .buttons {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    button {
      height: 34px;
      font-size: 18px;
      padding: 5px;
      // line-height: 34px;
      color: #fff;
    }
  }
}
.devmodel {
  height: 308px;
  width: 700px;
  background: #fff;
  overflow: hidden;
  .title{
      height:38px;
      background-color: #f1f1f1;
      line-height: 38px;
      border:1px solid #f1f1f1;
      color:#000;
  }
  .img {
    width: 300px;
    float: left;

    // height:165px;
    img {
      height: 230px;
    }
  }
  .info {
    float: right;
    width: 380px;
    fieldset {
      padding: 10px;
      margin-right: 10px;
      .ivu-input-number.ivu-input-number-small {
        width: 20px;
      }
    }
  }
}

.tabs {
  background-color: #fff;
}

input[readonly] {
  background-color: #9c9c9c;
}
.ivu-tabs-tabpane table tr td {
  padding-top: 4px;
  padding-bottom: 4px;
}
.ftpsetting table td input[type="text"] {
  width: 140px;
}
.devmodel span{
    // border:1px solid #000;
    width: 60px;
    float: left;
    i{
        width: 40px;
        text-align: center;
        text-align: right;
        display: inline-block;
    }
}
</style>
