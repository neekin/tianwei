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
                        <div class="rp_top10_top">
                            <table width="100%" height="100%">
                                <tr>
                                    <th>类别</th>
                                    <th>客流量</th>
                                    <th>集客力</th>
                                </tr>
                                <tr>
                                    <td>购物中心</td>
                                    <td class="triangle_up">80000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>仓储式商场</td>
                                    <td class="triangle_down">76000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>超级市场</td>
                                    <td class="triangle_up">40000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>商业步行街</td>
                                    <td class="triangle_up">34000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>批发市场</td>
                                    <td class="triangle_down">25000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>大型综合市场</td>
                                    <td class="triangle_down">33000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>百货店</td>
                                    <td class="triangle_up">70000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>便利店</td>
                                    <td class="triangle_up">40000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>专业店</td>
                                    <td class="triangle_down">50000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>专卖店</td>
                                    <td class="triangle_up">70000</td>
                                    <td>80000</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <div class="report_bottom10">
                        <div class="rp_title">
                            <i class="iconfont icon-iconfontcart"></i>
                            前十业态绩效
                        </div>
                        <div class="rp_top10_bottom">
                            <table width="100%" height="100%">
                                <tr>
                                    <th>业态</th>
                                    <th>客流量</th>
                                    <th>集客力</th>
                                </tr>
                                <tr>
                                    <td>奢侈品</td>
                                    <td class="triangle_up">80000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>快时尚</td>
                                    <td class="triangle_down">76000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>服饰</td>
                                    <td class="triangle_up">40000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>儿童</td>
                                    <td class="triangle_up">34000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>家具生活</td>
                                    <td class="triangle_down">25000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>精品超市</td>
                                    <td class="triangle_down">33000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>餐饮</td>
                                    <td class="triangle_up">70000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>美容</td>
                                    <td class="triangle_up">40000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>电影院</td>
                                    <td class="triangle_down">50000</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>3C数码</td>
                                    <td class="triangle_up">70000</td>
                                    <td>80000</td>
                                </tr>
                            </table>
                        </div>
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
                        <div class="rp_paiming_left fl">
                            <table width="100%" height="100%">
                                <tr>
                                    <th>排名</th>
                                    <th>品牌</th>
                                    <th>客流量（人次）</th>
                                    <th> </th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>歌莉娅</td>
                                    <td class="triangle_up">43455</td>
                                    <td>000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>歌莉娅</td>
                                    <td class="triangle_down">43455</td>
                                    <td>000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>歌莉娅</td>
                                    <td class="triangle_up">43455</td>
                                    <td>000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>歌莉娅</td>
                                    <td class="triangle_up">43455</td>
                                    <td>000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>歌莉娅</td>
                                    <td class="triangle_down">43455</td>
                                    <td>000</td>
                                </tr>
                            </table>
                        </div>
                        <div class="rp_paiming_right fr">
                            <table width="100%" height="100%">
                                <tr>
                                    <th>排名</th>
                                    <th>品牌</th>
                                    <th>客流量（人次）</th>
                                    <th> </th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>歌莉娅</td>
                                    <td class="triangle_up">43455</td>
                                    <td>000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>歌莉娅</td>
                                    <td class="triangle_down">43455</td>
                                    <td>000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>歌莉娅</td>
                                    <td class="triangle_up">43455</td>
                                    <td>000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>歌莉娅</td>
                                    <td class="triangle_up">43455</td>
                                    <td>000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>歌莉娅</td>
                                    <td class="triangle_down">43455</td>
                                    <td>000</td>
                                </tr>
                            </table>
                        </div>
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
    overflow: hidden;
    padding: 12px;
    font-family: "Microsoft Yahei";
    > div[class^="ct_"] {
        > div[class^="report_"] {
            color: @contentColor;
            &:not(:first-child) {
                margin: 12px 0;
            }
            &:not([class="report_paiming"]) {
                background-color: @boxbgc;
                border: 1px solid @borderColor;
            }
            > [class^="rp_paiming_"] {
                width: 49.5%;
                height: 100%;
                padding: 10px;
                text-align: left;
                text-indent: 2em;
                background-color: @boxbgc;
                border: 1px solid @borderColor;
                > table tr:first-child {
                    border-bottom: 1px solid #144068;
                    > th {
                        font-weight: bold;
                    }
                }
            }
            > [class^="rp_top10_"] {
                height: 410px;
                margin-top: 47px;
                padding: 14px;
                > table > tr {
                    &:first-child {
                        border-bottom: 1px solid #144068;
                        > th {
                            font-weight: bold;
                        }
                    }
                    > td:last-child,
                    > th:last-child {
                        text-align: right;
                    }
                }
            }
            > .rp_title {
                color: @fontColor;
                position: absolute;
                font-weight: bold;
                font-size: 18px;
                margin: 20px 0 0 14px;
                width: 200px;
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
echarts.registerMap("china", mapJson);

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
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series: [
                        {
                            name: "商圈客流情况",
                            type: "pie",
                            radius: "75%",
                            center: ["50%", "60%"],
                            label: {
                                normal: {
                                    position: "inner"
                                }
                            },
                            data: [],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: "rgba(0, 0, 0, 0.5)"
                                }
                            }
                        }
                    ]
                },
                map: {
                    tooltip: {
                        trigger: "item"
                    },
                    geo: {
                        map: "china",
                        label: {
                            emphasis: {
                                show: true,
                                color: "#fff"
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: "#0b477e",
                                borderColor: "#0b477e"
                            },
                            emphasis: {
                                areaColor: "#0767b3"
                            }
                        }
                    },
                    series: [
                        {
                            name: "pm2.5",
                            type: "scatter",
                            coordinateSystem: "geo",
                            data: [],
                            symbolSize: function(val) {
                                return val[2] / 10;
                            },
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: "#ddb926"
                                }
                            }
                        }
                    ]
                }
            },
            charts: {}
        };
    },
    methods: {
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
            this.charts.people = echarts.init(
                document.getElementById("people")
            );
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
                                name: `${i}  ${
                                    res.data.result.detail[i].percent
                                }`
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
            this.charts.map.setOption(this.data.map);
        }
    },
    mounted() {
        this.token = this.$store.state.token;
        this.getCity();
        this.getPeople();
        this.getMap();
    }
};
</script>
