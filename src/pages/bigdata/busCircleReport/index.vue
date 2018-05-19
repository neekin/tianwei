<template>
    <div>
        <headnav></headnav>
        <sidebar></sidebar>
        <container>
            <div class="content">

                <form @submit.prevent="console.log('submit')" class="navIpt">
                    <span class="slt">
                        类别:
                        <select v-model="model8">
                            <option value='' disabled selected style='display:none;'>请选择</option>
                            <option :value='i' v-for="(v,i) in cityList" :key="i">{{v.value}}</option>
                        </select>
                    </span>
                    <span class="slt">
                        商圈:
                        <select v-model="model8">
                            <option value='' disabled selected style='display:none;'>请选择</option>
                            <option :value='i' v-for="(v,i) in cityList" :key="i">{{v.value}}</option>
                        </select>
                    </span>
                    <span class="slt">
                        <button>
                            <i class="iconfont icon-fenxiang"> 查询</i>
                        </button>
                    </span>
                </form>

                <div class="content_charts clearfix">
                    <div class="charts_success fl">
                        <div class="pr mark">
                            <div class="cs_text">
                                <span>点址成功指数</span>
                                <span>（ 满分10分 ）</span>
                            </div>
                            <div class="cs_points">
                                <span>5</span>
                                <span>分</span>
                            </div>
                        </div>
                    </div>
                    <div class="charts_prosperity fl">
                        <div class="pr mark">
                            <div class="cs_text">
                                <span>商圈繁荣指数</span>
                                <span>（ 满分10分 ）</span>
                            </div>
                            <div class="cs_points">
                                <span>10</span>
                                <span>分</span>
                            </div>
                        </div>
                    </div>
                    <div class="echarts_hotMap fl">
                        <div>
                            <div class="ch_title pr">
                                <span class="fl">购物中心热力图</span>
                                <span class="slt fr">
                                    楼层:
                                    <select v-model="model8">
                                        <option value='' disabled selected style='display:none;'>请选择</option>
                                        <option :value='i' v-for="(v,i) in cityList" :key="i">{{v.value}}</option>
                                    </select>
                                </span>
                            </div>
                            <div class="ch_content">
                                <div id="hotMap"></div>
                            </div>
                        </div>
                    </div>
                    <div class="echarts_percent fl">
                        <div>
                            <div class="ch_title pr">
                                <span class="fl">购物中心指数</span>
                            </div>
                            <div class="ch_content">
                                <div class="ch_echarts" id="percent"></div>
                            </div>
                        </div>
                    </div>
                    <div class="echarts_industry fl">
                        <div>
                            <div class="ch_title pr">
                                <span class="fl">购物中心业态</span>
                            </div>
                            <div class="ch_content">
                                <div class="ch_echarts" id="industry"></div>
                            </div>
                        </div>
                    </div>
                    <div class="echarts_customer fl">
                        <div>
                            <div class="ch_title pr">
                                <span class="fl">购物中心客群</span>
                            </div>
                            <div class="ch_content">
                                <div class="pr mark fanrong">
                                    <div class="cs_text">
                                        <span style="font-size:20px">全年客流</span>
                                    </div>
                                    <div class="cs_points" style="right:50px">
                                        <span style="font-size:36px">62,895,986</span>
                                        <span style="font-size:24px">人</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </container>
    </div>
</template>

<script>
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
                percent: {
                    tooltip: {},
                    radar: {
                        name: {
                            textStyle: {
                                color: "#fff",
                                backgroundColor: "#999",
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                        },
                        indicator: [
                            { name: "", max: 20 },
                            { name: "", max: 15000 },
                            { name: "", max: 50 },
                            { name: "", max: 50 },
                            { name: "", max: 20000 }
                        ]
                    },
                    series: [
                        {
                            name: "购物中心指数",
                            type: "radar",
                            data: [
                                {
                                    value: [],
                                    name: "购物中心指数"
                                }
                            ]
                        }
                    ]
                },
                industry: {
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    calculable: true,
                    series: [
                        {
                            name: "购物中心业态",
                            type: "pie",
                            radius: [60, 220],
                            roseType: "area",
                            data: []
                        }
                    ]
                }
            },
            cityList: [],
            model8: "",
            charts: {},
            shopId: 0
        };
    },
    methods: {
        getPercent() {
            this.charts.percent = echarts.init(
                document.getElementById("percent")
            );
            this.charts.percent.showLoading("default", {
                text: "加载中...",
                color: "#f49c00",
                textColor: "#fff",
                maskColor: "rgba(0, 0, 0, 0.5)",
                zlevel: 0
            });
            this.$http
                .get(this.$api.getPercent(), {
                    params: {
                        ShopId: this.shopId,
                        token: this.token
                    }
                })
                .then(res => {
                    if (res.data.code == 1) {
                        this.data.percent.series[0].data[0].value =
                            res.data.result.dataY;
                        res.data.result.dataX.forEach((v, i) => {
                            this.data.percent.radar.indicator[i].name = v;
                        });

                        console.log(this.data.percent);
                        this.charts.percent.hideLoading();
                        this.charts.percent.setOption(this.data.percent);
                    } else if (res.data.code == -1) {
                        this.$router.push("/login");
                    } else {
                        this.charts.percent.hideLoading();
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getIndustry() {
            this.charts.industry = echarts.init(
                document.getElementById("industry")
            );
            this.charts.industry.showLoading("default", {
                text: "加载中...",
                color: "#f49c00",
                textColor: "#fff",
                maskColor: "rgba(0, 0, 0, 0.5)",
                zlevel: 0
            });
            this.$http
                .get(this.$api.getIndustry(), {
                    params: {
                        ShopId: this.shopId,
                        token: this.token
                    }
                })
                .then(res => {
                    if (res.data.code == 1) {
                        for (let i in res.data.result) {
                            this.data.industry.series[0].data.push({
                                value: res.data.result[i],
                                name: i
                            });
                        }

                        this.charts.industry.hideLoading();
                        this.charts.industry.setOption(this.data.industry);
                    } else if (res.data.code == -1) {
                        this.$router.push("/login");
                    } else {
                        this.charts.industry.hideLoading();
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.token = this.$store.state.token;
        this.getPercent();
        this.getIndustry();
    }
};
</script>

<style lang="less" scoped>
@import url("../../../style/base.less");
@import url("../../../assets/fonts/iconfont.css");

.content {
    div[class*="mark"] {
        width: 100%;
        height: 100%;
        background-color: #1ab2f3;
        background-image: linear-gradient(
                0,
                #2cb8f3 5%,
                transparent 5%,
                transparent
            ),
            linear-gradient(90deg, #2cb8f3 5%, transparent 5%, transparent),
            linear-gradient(0, transparent 100%, #2cb8f3 100%),
            linear-gradient(90deg, transparent 100%, #2cb8f3 100%);
        background-size: 30px 25px;
        .cs_text {
            position: absolute;
            left: 111px;
            bottom: 24px;
            & > span:first-child {
                font-size: 36px;
                line-height: 47px;
            }
            & > span:last-child {
                font-size: 18px;
                line-height: 24px;
            }
        }
        .cs_points {
            position: absolute;
            right: 158px;
            bottom: 4px;
            & > span:first-child {
                font-size: 90px;
                line-height: 119px;
            }
            & > span:last-child {
                font-size: 36px;
                line-height: 47px;
            }
        }
    }
    #hotMap {
        width: 80%;
        height: 80%;
        margin: 70px auto;
        background-image: url("../../../assets/images/hotMap.png");
    }
    font-family: "Microsoft Yahei";
    color: @fontColor;
    .ch_content {
        > div.ch_echarts {
            height: 100%;
            width: 100%;
        }
    }
    span.slt {
        margin: 0 0 0 30px;
        > select {
            width: 185px;
            height: 36px;
            border: 1px solid #0a4b90;
            border-radius: 5px;
            background-color: #00438b;
            color: #7f95ad;
            text-indent: 1em;
            margin: 0 20px;
        }
    }
    .navIpt {
        width: 100%;
        height: 100px;
        background-color: #013676;
        line-height: 100px;
        font-size: 16px;
        color: #dfe5ed;
        > span {
            > button {
                width: 100px;
                height: 36px;
                line-height: 36px;
                background-color: #245ee2;
                border: none;
                border-radius: 5px;
                color: #dfe5ed;
            }
        }
    }
    .content_charts {
        width: 100%;
        padding: 15px;
        > div {
            width: 50%;
            padding: 15px;
            > div {
                border: 1px solid #176bb8;
                overflow: hidden;
            }
        }
        .charts_success,
        .charts_prosperity {
            > div {
                height: 130px;
                border: none;
                color: #fff;
            }
        }
        .charts_success {
            div[class*="mark"] {
                background-color: #1ab2f3;
                background-image: linear-gradient(
                        0,
                        #2cb8f3 5%,
                        transparent 5%,
                        transparent
                    ),
                    linear-gradient(
                        90deg,
                        #2cb8f3 5%,
                        transparent 5%,
                        transparent
                    ),
                    linear-gradient(0, transparent 100%, #2cb8f3 100%),
                    linear-gradient(90deg, transparent 100%, #2cb8f3 100%);
                background-size: 30px 25px;
                .cs_text {
                    position: absolute;
                    left: 111px;
                    bottom: 24px;
                    & > span:first-child {
                        font-size: 36px;
                        line-height: 47px;
                    }
                    & > span:last-child {
                        font-size: 18px;
                        line-height: 24px;
                    }
                }
                .cs_points {
                    position: absolute;
                    right: 158px;
                    bottom: 4px;
                    & > span:first-child {
                        font-size: 90px;
                        line-height: 119px;
                    }
                    & > span:last-child {
                        font-size: 36px;
                        line-height: 47px;
                    }
                }
            }
        }
        .charts_prosperity {
            > div[class*="mark"] {
                background-color: #fc6e55;
                background-image: linear-gradient(
                        0,
                        #fc7962 5%,
                        transparent 5%,
                        transparent
                    ),
                    linear-gradient(
                        90deg,
                        #fc7962 5%,
                        transparent 5%,
                        transparent
                    ),
                    linear-gradient(0, transparent 100%, #fc7962 100%),
                    linear-gradient(90deg, transparent 100%, #fc7962 100%);
                background-size: 30px 25px;
                .cs_text {
                    position: absolute;
                    left: 111px;
                    bottom: 24px;
                    & > span:first-child {
                        font-size: 36px;
                        line-height: 47px;
                    }
                    & > span:last-child {
                        font-size: 18px;
                        line-height: 24px;
                    }
                }
                .cs_points {
                    position: absolute;
                    right: 158px;
                    bottom: 4px;
                    & > span:first-child {
                        font-size: 90px;
                        line-height: 119px;
                    }
                    & > span:last-child {
                        font-size: 36px;
                        line-height: 47px;
                    }
                }
            }
        }
        > div[class^="echarts_"] {
            > div {
                height: 688px;
                > .ch_title {
                    height: 40px;
                    width: 100%;
                    margin-top: 30px;
                    > span {
                        line-height: 40px;
                        &:first-child {
                            margin-left: 30px;
                            font-size: 20px;
                            color: #fff;
                            font-weight: bold;
                        }
                    }
                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        top: 25%;
                        width: 6px;
                        height: 50%;
                    }
                }
                > .ch_content {
                    height: 616px;
                }
            }
        }
        > div.echarts_hotMap {
            .ch_title::before {
                background-color: #bd10e0;
            }
        }
        > div.echarts_percent {
            .ch_title::before {
                background-color: #239dfd;
            }
        }
        > div.echarts_industry {
            .ch_title::before {
                background-color: #ffa094;
            }
        }
        > div.echarts_customer {
            .ch_title::before {
                background-color: #50e3c2;
            }
            .fanrong {
                width: 80%;
                margin: 20px auto;
                height: 129px;
            }
        }
    }
}
</style>
