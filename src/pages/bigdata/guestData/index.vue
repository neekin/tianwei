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
                            城市分布情况
                        </div>
                        <div class="rp_echarts" id="city"></div>
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
                        <div class="rp_echarts" id="city"></div>
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
                }
            },
            cityChart: ""
        };
    },
    methods: {
        getCity() {
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

                        console.log(this.data.city.series[0]);

                        this.cityChart = echarts.init(
                            document.getElementById("city")
                        );
                        this.cityChart.setOption(this.data.city);
                    } else if (res.data.code == -1) {
                        this.$router.push("/login");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.token = this.$store.state.token;
        this.getCity();
    }
};
</script>
