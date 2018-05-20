<template>
    <div>
        <headnav></headnav>
        <sidebar></sidebar>
        <container>
            <search @search='getlist'>
              
                    所属区域：
                    <select v-model='searchB.ProvinceID'>
                      <option value="0">
                        请选择
                      </option>
                      <option v-for='item in area' :key='item.AreaID' :value='item.AreaID'>
                        {{item.Area}}
                      </option>
                    </select>
                    设备编号: <input type="text" v-model='searchB.SNO'>
                    物联卡号: <input type="text" v-model='searchB.IotCode'>
                    设备状态： <select v-model='searchB.DeviceStatus'>
                      <option value="0">
                        请选择
                      </option>
                      <option v-for='item in DeviceStatus' :key='item.DeviceStatus' :value="item.DeviceStatus">
                        {{item.DeviceStatusName}}
                      </option>
                    </select>
                    流量状态：<select v-model='searchB.IotStatus'>
                       <option value="0">
                        请选择
                      </option>
                       <option v-for='item in DeviceStatusFlow' :key='item.DeviceStatus' :value="item.DeviceStatus">
                        {{item.DeviceStatusName}}
                      </option>
                    </select>
         
            </search>
          <div class="container clearfix">
                <div class="list">
                    <table>
                        <tr>
                            <th width=100>设备编号</th>
                            <th width='240'>卡号</th>
                            <th width='40'>状态</th>
                            <th width='40'>流量</th>
                        </tr>
                        <tr v-for='item in result' :key='item.num'>
                            <td>{{item.SNo}}</td>
                            <td>{{item.IotCode}}</td>
                            <td>{{item.DeviceStatusName}}</td>
                            <td>{{item.IotStatusName}}</td>
                        </tr>
                    </table>
                    <button @click='exportlist'>
                       <span class="fa fa-cloud-download"></span> 导出
                        </button>
                </div>
                <div class="map" id="dituContent">
                    
                </div>
          </div>
        </container>
    </div>
</template>

<script>
import headnav from "@/pages/components/headnav.vue";
import sidebar from "@/pages/components/sidebar";
import container from "@/pages/components/container";
import search from "@/pages/components/list/search";
// import {MP} from '@/pages/api/baiduMpa.js' 
export default {
  data() {
    return {
      searchB: {
        ProvinceID: 0,
        SNO: "",
        IotCode: "",
        DeviceStatus: 0,
        IotStatus: 0
      },
      result: [],
      area: [],
      DeviceStatus: [],
      DeviceStatusFlow: []
    };
  },
  methods: {
    search(){
      this.getlist();
    },
    getlist() {
      var params = {
        ProvinceID: this.searchB.ProvinceID==0?'':this.searchB.ProvinceID,
        SNO: this.searchB.SNO,
        IotCode: this.searchB.IotCode,
        DeviceStatus: this.searchB.DeviceStatus==0?'':this.searchB.DeviceStatus,
        IotStatus: this.searchB.IotStatus==0?'':this.searchB.IotStatus,
        pagesize: 200,
        pageindex: 1,
        token: this.$store.state.token
      };
      this.$http.get(this.$api.getReTimeDeviceList(params)).then(res => {
        console.log(res);
        this.result = res.data.result;
      });
    },
    exportlist() {
      var params = {
        ProvinceID: this.searchB.ProvinceID==0?'':this.searchB.ProvinceID,
        SNO: this.searchB.SNO,
        IotCode: this.searchB.IotCode,
        DeviceStatus: this.searchB.DeviceStatus==0?'':this.searchB.DeviceStatus,
        IotStatus: this.searchB.IotStatus==0?'':this.searchB.IotStatus,
        token: this.$store.state.token
      };
      this.$http.get(this.$api.exportReTimeDeviceList(params)).then(res => {
        if (res.data.code === 1) {
          var a = document.createElement("a");
          a.href = res.data.result;
          a.click();
        }
      });
    },
    //这几个地方加this
    initMap() {
      // this.createMap(); //创建地图
      // this.setMapEvent(); //设置地图事件
      // this.addMapControl(); //向地图添加控件
      // this.addMarker(); //向地图中添加marker
    },
    createMap() {
      var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
      var point = new BMap.Point(113.268395, 23.131714); //定义一个中心点坐标
      map.centerAndZoom(point, 18); //设定地图的中心点和坐标并将地图显示在地图容器中
      window.map = map; //将map变量存储在全局
    },
    setMapEvent() {
      map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
      map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
      map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
      map.enableKeyboard(); //启用键盘上下左右键移动地图
    },
    addMapControl() {
      //向地图中添加缩放控件
      var ctrl_nav = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
      });
      map.addControl(ctrl_nav);
      //向地图中添加缩略图控件
      var ctrl_ove = new BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 1
      });
      map.addControl(ctrl_ove);
      //向地图中添加比例尺控件
      var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
      map.addControl(ctrl_sca);
    },
    //标注点数组
    //创建marker
    addMarker() {
      var markerArr = [
        {
          title: "天威客流",
          content: "地址：广东省广州市越秀区",
          point: "113.268395|23.131714",
          isOpen: 1,
          icon: { w: 23, h: 25, l: 46, t: 21, x: 9, lb: 12 }
        }
      ];
      for (var i = 0; i < markerArr.length; i++) {
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0, p1);
        //这个地方加this
        var iconImg = this.createIcon(json.icon);
        var marker = new BMap.Marker(point, { icon: iconImg });
        //这个地方加this
        var iw = this.createInfoWindow(i);
        var label = new BMap.Label(json.title, {
          offset: new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
        });
        marker.setLabel(label);
        map.addOverlay(marker);
        label.setStyle({
          borderColor: "#808080",
          color: "#333",
          cursor: "pointer"
        });
        var index = i;
        //这个地方加this
        var _iw = this.createInfoWindow(i);
        var _marker = marker;
        marker.addEventListener("click", function() {
          //这个地方加this
          this.openInfoWindow(_iw);
        });
        iw.addEventListener("open", function() {
          _marker.getLabel().hide();
        });
        _iw.addEventListener("close", function() {
          _marker.getLabel().show();
        });
        label.addEventListener("click", function() {
          _marker.openInfoWindow(_iw);
        });
        if (!!json.isOpen) {
          label.hide();
          _marker.openInfoWindow(_iw);
        }
      }
    },
    //创建InfoWindow
    createInfoWindow(i) {
      //这个地方复制一下上面的var markerArr 不然会不显示报错
      var markerArr = [
        {
          title: "天威客流",
          content: "地址：广东省广州市越秀区",
          point: "113.268395|23.131714",
          isOpen: 1,
          icon: { w: 23, h: 25, l: 46, t: 21, x: 9, lb: 12 }
        }
      ];
      var json = markerArr[i];
      var iw = new BMap.InfoWindow(
        "<b class='iw_poi_title' title='" +
          json.title +
          "'>" +
          json.title +
          "</b><div class='iw_poi_content'>" +
          json.content +
          "</div>"
      );
      return iw;
    },
    //创建一个Icon
    createIcon(json) {
      //这个地方我是用本地图标图片的
      var tubiao = require("../../../assets/images/logo.png");
      var icon = new BMap.Icon(tubiao, new BMap.Size(json.w, json.h), {
        imageOffset: new BMap.Size(-json.l, -json.t),
        infoWindowOffset: new BMap.Size(json.lb + 5, 1),
        offset: new BMap.Size(json.x, json.h)
      });
      return icon;
    },
    //获取区域信息
    getMapArea() {
      this.$http
        .get(this.$api.getMapArea() + "?token=" + this.$store.state.token)
        .then(res => {
          console.log("区域信息", res);
          this.area = res.data.result;
        });
    },
    //获取设备状态
    getbd_DeviceStatus() {
      this.$http
        .get(
          this.$api.getbd_DeviceStatus() + "?token=" + this.$store.state.token
        )
        .then(res => {
          console.log("设备", res);
          this.DeviceStatus = res.data.result;
        });
    },
    //获取流量状态
    getbd_DeviceStatusFlow() {
      this.$http
        .get(
          this.$api.getbd_DeviceStatusFlow() +
            "?token=" +
            this.$store.state.token
        )
        .then(res => {
          console.log("流量", res);
          this.DeviceStatusFlow = res.data.result;
        });
    }
  },
  mounted() {
    this.getlist();
    // this.initMap();
    this.getMapArea();
    this.getbd_DeviceStatus();
    this.getbd_DeviceStatusFlow();
  },
  components: {
    headnav,
    sidebar,
    container,
    search
  }
};
</script>

<style scoped>
.container {
  min-width: 1280px;
}
.search {
  display: block;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #ffffff;
}
.list {
  width: 420px;
  height: 100%;
  /* background-color: #fff; */
  border: 1px solid #176bb8;
  min-height: 760px;
  float: left;
  margin: 10px;
  position: relative;
}
.list table th {
  opacity: 0.9;
  background: #003b70;
  border-bottom: 1px solid #176bb8;
  height: 38px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 14px;
  color: #ffffff;
}
.list table td {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #ffffff;
  height: 38px;
  border-bottom: 1px solid #176bb8;
}
.map {
  float: left;
  min-height: 760px;
  background-color: red;
  max-width: 1200px;
  width: 900px;
  min-width: 800px;
}
.list button {
  position: absolute;
  bottom: 10px;
  background: #189cd5;
  border-radius: 3px;
  height: 38px;
  width: 398px;
  border: none;
  outline: none;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #ffffff;
  left: 50%;
  margin-left: -199px;
}
</style>
