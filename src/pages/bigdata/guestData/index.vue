<template>
    <div>
        <headnav></headnav>
        <sidebar></sidebar>
        <container>
            <div class="content clearfix">
                <div class="ct_left fl">
                    <div class="report_cityDist pr">
                        <div class="rp_title">
                            <i class="iconfont icon-city"></i>城市分布情况</div>
                        <div class="rp_echarts" id="city"></div>
                    </div>
                    <div class="report_busCircle">
                        <div class="rp_title">
                            <i class="iconfont icon-people"></i>
                            商圈客流情况
                        </div>
                        <div class="rp_echarts" id="people"></div>
                    </div>
                </div>
                <div class="ct_right fr">
                    <div class="report_top10">
                        <div class="rp_title">
                            <i class="iconfont icon-home"></i>
                            前十商业体绩效
                        </div>
                        <div class="rp_echarts" id="city"></div>
                    </div>
                    <div class="report_bottom10">
                        <div class="rp_title">
                            <i class="iconfont icon-iconfontcart"></i>
                            前十业态绩效
                        </div>
                        <div class="rp_echarts" id="city"></div>
                    </div>
                </div>
                <div class="ct_center ">
                    <div class="report_keliu">
                        <div class="rp_title">
                            <i class="iconfont icon-city"></i>
                            客流量统计
                        </div>
                        <div class="rp_echarts" id="map"></div>
                    </div>
                    <div class="report_paiming">
                        <div class="rp_title">
                            <i class="iconfont icon-city"></i>
                            客流量统计
                        </div>
                        <div class="rp_echarts" id="city"></div>
                    </div>
                </div>
            </div>
        </container>
    </div>
</template>

<style lang="less" scoped>
@import url("../../../style/base.less");
@import url("../../../assets/fonts/iconfont.css");
div {
  box-sizing: border-box;
}
.content {
  color: @fontColor;
  overflow: hidden;
  padding: 12px;
  font-family: "Microsoft Yahei";
  > div[class^="ct_"] {
    > div[class^="report_"] {
      &:not(:first-child) {
        margin: 12px 0;
      }
      background-color: @boxbgc;
      border: 1px solid @borderColor;
      > .rp_title {
        position: absolute;
        font-weight: bold;
        font-size: 18px;
        margin: 20px 0 0 14px;
        > i {
          font-weight: normal;
          font-size: 20px;
          margin: 0 5px;
        }
      }
      > .rp_echarts {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ct_left {
    width: 324px;
    height: 926px;
    .report_cityDist {
      height: 564px;
    }
    .report_busCircle {
      height: 352px;
    }
  }
  .ct_center {
    height: 926px;
    margin: 0 336px !important;
    .report_keliu {
      height: 616px;
    }
    .report_paiming {
      height: 300px;
    }
  }
  .ct_right {
    width: 324px;
    height: 926px;
    .report_top10 {
      height: 457px;
    }
    .report_bottom10 {
      height: 458px;
    }
  }
}
</style>

<script>
// import Base64 from "@/api/Base64";

// 引入基本模板
var echarts = require("echarts");
// // 引入柱状图组件
require("echarts/lib/chart/bar");
require("echarts/lib/chart/pie");
// // 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

import headnav from "../../components/headnav.vue";
import sidebar from "../../components/sidebar";
import container from "../../components/container";

var mapJson = require("../../../assets/map/json/china.json");
echarts.registerMap('china', mapJson);

export default {
    components: {
        headnav,
        sidebar,
        container
    },
    data() {
        return {
            token: "",
            data: {
                city: {
                    color: ["#faff81", "#50eaff", "#ffc53a"],
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: "vertical",
                        bottom: 25,
                        textStyle: {
                            color: "#d2dae0",
                            fontSize: 18,
                            padding: [14, 0]
                        },
                        formatter: ""
                    },
                    graphic: {
                        type: "group",
                        left: "center",
                        top: "33%",
                        width: 120,
                        height: 100,
                        children: [
                            {
                                type: "text",
                                z: 100,
                                top: "25%",
                                left: "center",
                                style: {
                                    fill: "#fff",
                                    text: ["单位：人次"].join("\n"),
                                    font: "14px Microsoft YaHei"
                                }
                            },
                            {
                                type: "text",
                                z: 100,
                                top: "50%",
                                left: "center",
                                style: {
                                    fill: "#fff",
                                    text: ["9000万"].join("\n"),
                                    font: "32px Microsoft YaHei",
                                    fontWeight: "bold"
                                }
                            },
                            {
                                type: "text",
                                z: 100,
                                top: "100%",
                                left: "center",
                                style: {
                                    fill: "#fff",
                                    text: ["最近三个月"].join("\n"),
                                    font: "14px Microsoft YaHei"
                                }
                            }
                        ]
                    },
                    series: [
                        {
                            name: "城市分布情况",
                            type: "pie",
                            center: ["50%", "40%"],
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            label: {
                                lineHeight: 56,
                                normal: {
                                    show: false,
                                    position: "center"
                                }
                            },
                            data: []
                        }
                    ]
                },
                people: {
                    color: ["#817bed", "#55b3f3", "#1789ee"],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series: [
                        {
                            name: '商圈客流情况',
                            type: 'pie',
                            radius: '75%',
                            center: ['50%', '60%'],
                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            data: [],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                },
                map: {
                    tooltip: {
                        trigger: 'item'
                    },
                    // legend: {
                    //     orient: 'vertical',
                    //     left: 'left',
                    //     data: ['iphone3', 'iphone4', 'iphone5']
                    // },
                    // visualMap: {
                    //     min: 0,
                    //     max: 2500,
                    //     left: 'left',
                    //     top: 'bottom',
                    //     text: ['高', '低'],           // 文本，默认为数值文本
                    //     calculable: true
                    // },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            dataView: { readOnly: false },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    series: [
                        {
                            name: 'iphone3',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                { name: '北京', value: this.randomData() },
                                { name: '天津', value: this.randomData() },
                                { name: '上海', value: this.randomData() },
                                { name: '重庆', value: this.randomData() },
                                { name: '河北', value: this.randomData() },
                                { name: '河南', value: this.randomData() },
                                { name: '云南', value: this.randomData() },
                                { name: '辽宁', value: this.randomData() },
                                { name: '黑龙江', value: this.randomData() },
                                { name: '湖南', value: this.randomData() },
                                { name: '安徽', value: this.randomData() },
                                { name: '山东', value: this.randomData() },
                                { name: '新疆', value: this.randomData() },
                                { name: '江苏', value: this.randomData() },
                                { name: '浙江', value: this.randomData() },
                                { name: '江西', value: this.randomData() },
                                { name: '湖北', value: this.randomData() },
                                { name: '广西', value: this.randomData() },
                                { name: '甘肃', value: this.randomData() },
                                { name: '山西', value: this.randomData() },
                                { name: '内蒙古', value: this.randomData() },
                                { name: '陕西', value: this.randomData() },
                                { name: '吉林', value: this.randomData() },
                                { name: '福建', value: this.randomData() },
                                { name: '贵州', value: this.randomData() },
                                { name: '广东', value: this.randomData() },
                                { name: '青海', value: this.randomData() },
                                { name: '西藏', value: this.randomData() },
                                { name: '四川', value: this.randomData() },
                                { name: '宁夏', value: this.randomData() },
                                { name: '海南', value: this.randomData() },
                                { name: '台湾', value: this.randomData() },
                                { name: '香港', value: this.randomData() },
                                { name: '澳门', value: this.randomData() }
                            ]
                        },
                        {
                            name: 'iphone4',
                            type: 'map',
                            mapType: 'china',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                { name: '北京', value: this.randomData() },
                                { name: '天津', value: this.randomData() },
                                { name: '上海', value: this.randomData() },
                                { name: '重庆', value: this.randomData() },
                                { name: '河北', value: this.randomData() },
                                { name: '安徽', value: this.randomData() },
                                { name: '新疆', value: this.randomData() },
                                { name: '浙江', value: this.randomData() },
                                { name: '江西', value: this.randomData() },
                                { name: '山西', value: this.randomData() },
                                { name: '内蒙古', value: this.randomData() },
                                { name: '吉林', value: this.randomData() },
                                { name: '福建', value: this.randomData() },
                                { name: '广东', value: this.randomData() },
                                { name: '西藏', value: this.randomData() },
                                { name: '四川', value: this.randomData() },
                                { name: '宁夏', value: this.randomData() },
                                { name: '香港', value: this.randomData() },
                                { name: '澳门', value: this.randomData() }
                            ]
                        },
                        {
                            name: 'iphone5',
                            type: 'map',
                            mapType: 'china',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                { name: '北京', value: this.randomData() },
                                { name: '天津', value: this.randomData() },
                                { name: '上海', value: this.randomData() },
                                { name: '广东', value: this.randomData() },
                                { name: '台湾', value: this.randomData() },
                                { name: '香港', value: this.randomData() },
                                { name: '澳门', value: this.randomData() }
                            ]
                        }
                    ]
                }
            },
            charts: {}
        };
    },
    methods: {
        randomData() {
            return Math.round(Math.random() * 1000);
        },
        getCity() {
            this.charts.city = echarts.init(document.getElementById("city"));
            this.charts.city.showLoading("default", {
                text: "加载中...",
                color: "#f49c00",
                textColor: "#fff",
                maskColor: "rgba(0, 0, 0, 0.5)",
                zlevel: 0
            });
            this.$http
                .get(this.$api.getCity(), {
                    params: {
                        token: this.token
                    }
                })
                .then(res => {
                    if (res.data.code == 1) {
                        console.log(res.data);
                        for (let i in res.data.result.detail) {
                            this.data.city.series[0].data.push({
                                value: res.data.result.detail[i].count,
                                name: i
                            });
                            this.data.city.legend.formatter = `    {name}    ${
                                res.data.result.detail[i].percent
                                }`;
                        }
                        this.charts.city.setOption(this.data.city);
                        this.charts.city.hideLoading();
                    } else if (res.data.code == -1) {
                        this.$router.push("/login");
                    } else {
                        this.charts.city.hideLoading();
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getPeople() {
            this.charts.people = echarts.init(document.getElementById("people"));
            this.charts.people.showLoading("default", {
                text: "加载中...",
                color: "#f49c00",
                textColor: "#fff",
                maskColor: "rgba(0, 0, 0, 0.5)",
                zlevel: 0
            });
            this.$http
                .get(this.$api.getPeople(), {
                    params: {
                        token: this.token
                    }
                })
                .then(res => {
                    console.log(res);
                    if (res.data.code == 1) {
                        for (let i in res.data.result.detail) {
                            this.data.people.series[0].data.push({
                                value: res.data.result.detail[i].count,
                                name: `${i}  ${res.data.result.detail[i].percent}`
                            });
                        }
                        this.charts.people.hideLoading();
                        this.charts.people.setOption(this.data.people);
                    } else if (res.data.code == -1) {
                        this.$router.push("/login");
                    } else {
                        this.charts.city.hideLoading();
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getMap() {
            this.charts.map = echarts.init(document.getElementById("map"));
            this.charts.map.setOption(this.data.map)
        }
    },
    mounted() {
        this.token = this.$store.state.token;
        this.$http.interceptors.request.use(
            function (config) {
                return config;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
        this.getCity();
        this.getPeople();
        this.getMap();
    }
};
</script>
