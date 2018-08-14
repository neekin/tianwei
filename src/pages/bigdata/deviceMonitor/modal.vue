<template>
            <div class="mask tabs-style" >
        <div class="changeModal">
            <div class='devmodel'>
              <div class="title">视频信息</div>
                  <div class="img" style='margin-left:10px;'>
                    <img :src="dev.Img_url" alt="">
                  	<m-img :style='{"z-index":zIndex1}' :dev='dev' :base="'base'" ref="area"></m-img>
                    <m-img :style='{"z-index":zIndex2}' :color='"blue"' :dev='dev' :area="'area'" ref="base"></m-img>
                    <!-- canvas -->
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
                    <button style='width:140px;margin-left:20px' @click='zIndexAdd("area")'>检测区域</button>
                    <button @click='zIndexAdd("base")' style='width:140px;margin-left:20px'>基准线</button>
                  </fieldset>
                            <fieldset >
                    <legend>算法参数</legend>
                         <table border='0'  cellpadding="0">
                           <tr>
                             <td align='left'>灵敏度:</td>
                             <td width='260'>
                               <div class="num num1">
                               <Slider  show-input input-size='small' v-model='dev.arithmetic_param.dect_thr' :max=100></Slider>
                               </div>
                             </td>
                           </tr>
                           <tr>
                             <td align='left'>人头大小:</td>
                             <td >
                               <div class="num num2">
                               <Slider  show-input :max=120 input-size='small' v-model='dev.arithmetic_param.head_size'></Slider></div>
                             </td>
                           </tr>
                           <tr>
                             <td align='left'>进比例:</td>
                             <td ><div class="num num3"> <Slider  :step='0.1' show-input :max=2 input-size='small'></Slider></div></td>
                           </tr>
                           <tr>
                             <td align='left'>出比例:</td>
                             <td > <div class="num num3"><Slider  :step='0.1' :max=2 show-input input-size='small'></Slider></div></td>
                           </tr>
                         </table>
                  </fieldset>
                  <br>
                  <input type="checkbox" id='zero' v-model='dev.inout_clear_state'>
                  <label for="zero" style='font-size:18px;margin-top:10px;'>清零</label>

                  </div>
            </div>
          <Tabs :animated="false" >
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
           <br>
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
                       <option v-for="(item,index) in utc" :key="index" :value="item">{{item}}</option>

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
            <button @click='confirm' style='margin-right:260px;' >确认提交</button>
            <button @click='cancel'>取消提交</button>
          </div>
        </div>
        </div>
</template>
<script>
import mImg from "./img"
// import myCanvas from './mycanvas';
export default {
  components: { mImg },
  props: ["dev"],
  data() {
    return {
      ftp_transfer_interval: 300,
      zIndex1:2,
      zIndex2:1,
      isFrist:[0,0],
      utc:["(UTC-11:00)Apia",
        "(UTC-11:00)Samoa",
        "(UTC-10:00)Hawaii",
        "(UTC-09:00)Alaska",
        "(UTC-07:00)Arizona",
        "(UTC-07:00)Chihuahua,La Paz,Mazatlan",
        "(UTC-07:00)Mountain Time (US & Canada)",
        "(UTC-06:00)Belize,Belmopan",
        "(UTC-06:00)Guatemala",
        "(UTC-06:00)Managua",
        "(UTC-06:00)Mexico_City",
        "(UTC-06:00)Tegucigalpa",
        "(UTC-05:00)Bogota",
        "(UTC-05:00)Cuba",
        "(UTC-05:00)Guayaquil",
        "(UTC-05:00)Jamaica",
        "(UTC-05:00)Lima",
        "(UTC-05:00)Nassau",
        "(UTC-05:00)New_York",
        "(UTC-05:00)Panama",
        "(UTC-05:00)Port-au-Prince",
        "(UTC-05:00)Toronto",
        "(UTC-04:00)Asuncion",
        "(UTC-04:00)Caracas",
        "(UTC-04:00)Dominica",
        "(UTC-04:00)Guyana",
        "(UTC-04:00)Santiago",
        "(UTC-03:00)Buenos_Aires",
        "(UTC-03:00)Montevideo",
        "(UTC-03:00)Paramaribo",
        "(UTC-01:00)Azores",
        "(UTC-01:00)Cape Verde Is",
        "(UTC)Accra",
        "(UTC)Banjul,Serrekunda",
        "(UTC)Bissau",
        "(UTC)Casablanca",
        "(UTC)Conakry",
        "(UTC)Dakar",
        "(UTC)Freetown",
        "(UTC)Iceland,Reykjavik",
        "(UTC)Ireland,Dublin",
        "(UTC)Lome",
        "(UTC)Mali,Bamako",
        "(UTC)Monrovia,Yamoussouklo,Abidjan",
        "(UTC)Nouakchott",
        "(UTC)Ouagadougou",
        "(UTC)Portugal,lisbon",
        "(UTC)U.K,London",
        "(UTC+01:00)Abuja,Lagos",
        "(UTC+01:00)Andorra",
        "(UTC+01:00)Angola,Luanda",
        "(UTC+01:00)Austria,Vienna",
        "(UTC+01:00)Bangui",
        "(UTC+01:00)Belgrade",
        "(UTC+01:00)Bern,Zurich",
        "(UTC+01:00)Brazzaville",
        "(UTC+01:00)Cameroon,Yaounde,Douala",
        "(UTC+01:00)Czech,Prague",
        "(UTC+01:00)Denmark,Copenhagen",
        "(UTC+01:00)Germany，Berlin",
        "(UTC+01:00)Hungary,Budapest",
        "(UTC+01:00)Italy,Rome",
        "(UTC+01:00)Libreville",
        "(UTC+01:00)Liechtenstein,Vaduz,Schaan",
        "(UTC+01:00)Ljubljana",
        "(UTC+01:00)Luxembourg",
        "(UTC+01:00)Malabo",
        "(UTC+01:00)Malta,Valletta",
        "(UTC+01:00)Monaco",
        "(UTC+01:00)Ndjamena",
        "(UTC+01:00)Netherlands,Amsterdam,Belgium,Bruxelles",
        "(UTC+01:00)Niger Niamey",
        "(UTC+01:00)Norway,Oslo",
        "(UTC+01:00)Podgorica",
        "(UTC+01:00)Poland",
        "(UTC+01:00)Porto-Novo,Cotonou",
        "(UTC+01:00)San_Marino,Serravalle",
        "(UTC+01:00)Sarajevo",
        "(UTC+01:00)Skopje",
        "(UTC+01:00)Slovakia,Bratislava",
        "(UTC+01:00)Spain,Madrid",
        "(UTC+01:00)Sweden,Stockholm",
        "(UTC+01:00)Tunis",
        "(UTC+01:00)Vatican",
        "(UTC+01:00)Warsaw",
        "(UTC+01:00)Zagreb",
        "(UTC+02:00)Amman",
        "(UTC+02:00)Bulgaria,Sofia",
        "(UTC+02:00)Chisinau",
        "(UTC+02:00)Damascus",
        "(UTC+02:00)Egypt,Cairo",
        "(UTC+02:00)Finland,Helsinki",
        "(UTC+02:00)France,Paris",
        "(UTC+02:00)Greece,Athens",
        "(UTC+02:00)Israel",
        "(UTC+02:00)Istanbul",
        "(UTC+02:00)Jerusalem",
        "(UTC+02:00)Libya,Tripoli",
        "(UTC+02:00)Minsk",
        "(UTC+02:00)Nicosia",
        "(UTC+02:00)Riga",
        "(UTC+02:00)Romania,Bucharest",
        "(UTC+02:00)Tallinn",
        "(UTC+02:00)Tel_Aviv",
        "(UTC+02:00)Turkey",
        "(UTC+02:00)Vilnius",
        "(UTC+03:00)Baghdad",
        "(UTC+03:00)Bahrain",
        "(UTC+03:00)Beirut",
        "(UTC+03:00)Jerusalem",
        "(UTC+03:00)Khartoum,Juba",
        "(UTC+03:00)Moscow",
        "(UTC+03:00)Qatar,Doha",
        "(UTC+03:30)Tehran",
        "(UTC+04:00)Baku",
        "(UTC+04:00)Dubai",
        "(UTC+04:00)Muscat",
        "(UTC+04:00)Tbilisi",
        "(UTC+04:00)Yerevan",
        "(UTC+04:30)Kabul",
        "(UTC+05:00)Dushanbe",
        "(UTC+05:00)Karachi",
        "(UTC+05:00)Tashkent",
        "(UTC+05:30)Colombo",
        "(UTC+06:00)Bishkek",
        "(UTC+06:00)Dhaka",
        "(UTC+06:00)Thimphu",
        "(UTC+07:00)Bangkok",
        "(UTC+07:00)Phnom_Penh",
        "(UTC+07:00)Vientiane",
        "(UTC+08:00)Beijing,Shanghai",
        "(UTC+08:00)Kuala_Lumpur",
        "(UTC+08:00)Manila",
        "(UTC+08:00)Singapore",
        "(UTC+08:00)Ulan_Bator",
        "(UTC+09:00)Dili",
        "(UTC+09:00)Japan",
        "(UTC+09:00)Pyongyang",
        "(UTC+09:00)Seoul",
        "(UTC+09:00)Tokyo",
        "(UTC+10:00)Canberra",
        "(UTC+10:00)Sydney",
        "(UTC+11:00)Magadan",
        "(UTC+11:00)Solomon Is.,New Caledonia",
        "(UTC+12:00)Auckland",
        "(UTC+12:00)Funafuti",
        "(UTC+12:00)Majuro",
        "(UTC+12:00)Nauru",
      ]
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    confirm() {
      this.$emit("confirm");
    },
    zIndexAdd(type){
      if(type=='base'){
        this.zIndex2 = 2;
        this.zIndex1=1;
        this.$refs.base.canDraw()
        this.$refs.area.dontDraw()
      }else{
        this.zIndex1 = 2;
        this.zIndex2=1;
        this.$refs.base.dontDraw()
        this.$refs.area.canDraw()
      }
    }
  },
  watch: {
    ftp_transfer_interval(value) {
      this.dev.ftp1_config.ftp1_ftp_transfer_interval = this.dev.ftp2_config.ftp2_ftp_transfer_interval = value;
    }
  },
  mounted(){
    console.log(this.dev);
  }
};
</script>
<style lang="less" scoped>
input[type='text']{
  height:28px;
}
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
  height: 1000px;
  margin-left: -362px;
  background-color: #acacac;
  border-radius: 10px;
  padding: 12px;
  button {
    // outline: 0;
    // border-radius: 4px;
    // background-color: #0094ff;
    // color: #fff;
    // padding: 4px;

          padding: 0;
          width: 96px;
          height:28px;
    // height: 38px;
    background: #245ee2;
    border-radius: 3px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    color: #ffffff;
    border: none;
    outline: none;
    line-height: 28px;
  }
  .paneltitle {
    border-bottom: 1px solid #000;
    color: #fff;
  }
  .lot {
    //    table>tr>td:nth-of-type(2){
    //        width: 350px;
    //    }
    table > tr > td:nth-of-type(4) {
      width: 60px;
    }
    table > tr > td:nth-of-type(4) > input[type="text"] {
      width: 120px;
    }
    table > tr > td:nth-of-type(2),
    table > tr > td:nth-of-type(4) {
      text-align: left;
    }
    table > tr > td:nth-of-type(2) > input[type="text"] {
      width: 100%;
    }
  }
  .panel-body {
    height: 530px;
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
      table td {
        padding: 10px;
      }
    }
  }
  .buttons {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    button {
      // height: 34px;
      // font-size: 18px;
      // padding: 5px;
      // // line-height: 34px;
      // color: #fff;
      padding: 0;
          width: 96px;
    height: 38px;
    background: #245ee2;
    border-radius: 3px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    color: #ffffff;
    border: none;
    outline: none;
    line-height: 38px;
    }
  }
}
.devmodel {
  height: 340px;
  width: 700px;
  background: #fff;
  overflow: hidden;
  .title {
    height: 38px;
    background-color: #f1f1f1;
    line-height: 38px;
    border: 1px solid #f1f1f1;
    color: #000;
  }
  .img {
    width: 320px;
    float: left;
    position: relative;

    // height:165px;
    img {
      height: 240px;
    }
  }
  .info {
    float: right;
    width: 360px;
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
.devmodel span {
  // border:1px solid #000;
  width: 60px;
  float: left;
  i {
    width: 40px;
    text-align: center;
    text-align: right;
    display: inline-block;
  }
}


       .ivu-tabs-card > .ivu-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

     .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

     .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        border-color: transparent;
    }

     .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-color: #fff;
    }
    .tab-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        border-radius: 0;
        background: #fff;
    }
    .tab-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        border-top: 1px solid #3399ff;
    }
    .tab-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
    }

  .num{
    position: relative;
    color:#acacac;
       &:before{
         /*content: '0';*/
         position: absolute;
         top:6px;
         left:0;
       }
      &:after{
        /*content: '100';*/
        position: absolute;
        top:6px;
        right:100px;
      }
  }
  .num1{
    &:before{
      content: '0';
    }
    &:after{
      content: '100';
    }
  }
.num2{
  &:before{
    content: '0';
  }
  &:after{
    content: '120';
  }
}
.num3{
  &:before{
    content: '0';
  }
  &:after{
    content: '2';
  }
}

</style>
