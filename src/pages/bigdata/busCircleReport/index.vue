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
                                <span>{{ SPIndex.Success }}</span>
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
                                <span>{{ SPIndex.Prosperity }}</span>
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
                                    <div class="cs_text" style="text-align:center">
                                        <i class="iconfont icon-zhuzhuangtu" style="font-size:50px"></i>
                                        <div style="font-size:20px">全年客流</div>
                                    </div>
                                    <div class="cs_points" style="right:50px">
                                        <span style="font-size:36px">{{ this.shopCustomer.yearcount }}</span>
                                        <span style="font-size:24px">人</span>
                                    </div>
                                </div>
                                <div class="pr mark fanrong">
                                    <div class="cs_text" style="text-align:center">
                                        <i class="iconfont icon-people" style="font-size:50px"></i>
                                        <div style="font-size:20px">进店客流</div>
                                    </div>
                                    <div class="cs_points" style="right:50px">
                                        <span style="font-size:36px">{{ this.shopCustomer.instore }}</span>
                                        <span style="font-size:24px">人</span>
                                    </div>
                                </div>
                                <div class="pr mark fanrong">
                                    <div class="cs_text" style="text-align:center">
                                        <i class="iconfont icon-qian" style="font-size:50px"></i>
                                        <div style="font-size:20px">商圈租金</div>
                                    </div>
                                    <div class="cs_points" style="right:50px">
                                        <span style="font-size:36px">{{ this.shopCustomer.rent }}/平米/月</span>
                                        <span style="font-size:24px">仅参考</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="echarts_keyData fl" style="width: 100%;">
                        <div style="height: 100%;">
                            <div class="ch_title pr">
                                <span class="fl">购物中心关键指标和排名</span>
                            </div>
                            <div class="ch_content clearfix" style="padding: 60px 0 38px 0;height: 440px;">
                                <div class="fl">
                                    <div class="clearfix">
                                        <i class="iconfont icon-jiangbei fl" style="color: #eb4590;"></i>
                                        <div class="fl" style="margin-left:60px">
                                            <div>城市评级</div>
                                            <div style="color: #eb4590;">
                                                <strong style="font-size:64px;line-height:85px">{{ indexTop.city.data }}</strong>
                                                星
                                            </div>
                                        </div>
                                        <div class="fr">
                                            <div>城市经济评级</div>
                                            <div style="font-size:30px;line-height:110px;font-weight:bold;">{{ indexTop.city.TOP }}</div>
                                        </div>
                                    </div>
                                    <div class="clearfix">
                                        <i class="iconfont icon-qian fl" style="color: #ffc84e;"></i>
                                        <div class="fl" style="margin-left:60px">
                                            <div>单人次租金比</div>
                                            <div style="color: #ffc84e;">
                                                <strong style="font-size:64px;line-height:85px">{{ indexTop.rent.data }}</strong>
                                                元
                                            </div>
                                        </div>
                                        <div class="fr">
                                            <div>全国排名</div>
                                            <div style="font-size:30px;line-height:110px;font-weight:bold;">{{ indexTop.rent.TOP }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="fl">
                                    <div class="clearfix">
                                        <i class="iconfont icon-people fl" style="color: #579def;"></i>
                                        <div class="fl" style="margin-left:60px">
                                            <div>全国客流</div>
                                            <div style="color: #579def;">
                                                <strong style="font-size:64px;line-height:85px">{{ indexTop.yearcount.data }}</strong>
                                                万人
                                            </div>
                                        </div>
                                        <div class="fr">
                                            <div>全国排名</div>
                                            <div style="font-size:30px;line-height:110px;font-weight:bold;">{{ indexTop.yearcount.TOP }}</div>
                                        </div>
                                    </div>
                                    <div class="clearfix">
                                        <i class="iconfont icon-zhuanhuajiedubaogao fl" style="color: #b774e1;"></i>
                                        <div class="fl" style="margin-left:60px">
                                            <div>进店转化率</div>
                                            <div style="color: #b774e1;">
                                                <strong style="font-size:64px;line-height:85px">{{ indexTop.instore.data }}</strong>
                                            </div>
                                        </div>
                                        <div class="fr">
                                            <div>全国排名</div>
                                            <div style="font-size:30px;line-height:110px;font-weight:bold;">{{ indexTop.instore.TOP }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="echarts_compete fl" style="width: 100%;">
                        <div>
                            <div class="ch_title pr">
                                <span class="fl">竞争数据</span>
                            </div>
                            <div class="ch_content">
                                <div class="cc_top clearfix">
                                    <div class="fl">
                                        <div class="pr mark">
                                            <div class="cs_text">
                                                <span>店铺总数</span>
                                            </div>
                                            <div class="cs_points">
                                                <span>{{ compete.shopnumber }}</span>
                                                <span>家</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fl">
                                        <div class="pr mark">
                                            <div class="cs_text">
                                                <span>整体评分</span>
                                                <span>（ 满分5分 ）</span>
                                            </div>
                                            <div class="cs_points">
                                                <span>{{ compete.grade }}</span>
                                                <span>分</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fl">
                                        <div class="pr mark">
                                            <div class="cs_text">
                                                <span>单人次平均租金</span>
                                            </div>
                                            <div class="cs_points">
                                                <span>{{ compete.rent }}</span>
                                                <span>元/人</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cc_bottom clearfix">
                                    <div class="fl cb_left">
                                        <div class="ch_title pr">
                                            <!-- <span class="fl">购物中心热力图</span> -->
                                            <span class="slt fr">
                                                楼层:
                                                <select v-model="model8">
                                                    <option value='' disabled selected style='display:none;'>请选择</option>
                                                    <option :value='i' v-for="(v,i) in cityList" :key="i">{{v.value}}</option>
                                                </select>
                                            </span>
                                        </div>
                                        <div class="ch_content">
                                            <div id="competeIMG"></div>
                                        </div>
                                    </div>
                                    <div class="fl cb_right">
                                        <table>
                                            <tr>
                                                <th>序号</th>
                                                <th>名称</th>
                                                <th>日均客流量</th>
                                                <th>总评分</th>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>歌莉娅001店</td>
                                                <td>45635</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>歌莉娅001店</td>
                                                <td>45635</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>歌莉娅001店</td>
                                                <td>45635</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>歌莉娅001店</td>
                                                <td>45635</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>歌莉娅001店</td>
                                                <td>45635</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>歌莉娅001店</td>
                                                <td>45635</td>
                                                <td>5</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="echarts_guestPercent fl" style="width: 100%;">
                        <div>
                            <div class="ch_title pr">
                                <span class="fl">购物中心客流指标</span>
                            </div>
                            <div class="ch_content clearfix">
                                <div class="fl pr">
                                    <div class="eg_title">近一周客流趋势</div>
                                    <div class="eg_charts" id="weekCount"></div>
                                </div>
                                <div class="fl pr">
                                    <div class="eg_title">热点时段 TOP3</div>
                                    <div class="eg_charts" id="top3"></div>
                                </div>
                                <div class="fl pr">
                                    <div class="eg_title">性别构成</div>
                                    <div class="eg_charts" id="sex"></div>
                                </div>
                                <div class="fl pr">
                                    <div class="eg_title">年龄分布</div>
                                    <div class="eg_charts" id="age"></div>
                                </div>
                                <div class="fl pr">
                                    <div class="eg_title">近6个月回头客趋势</div>
                                    <div class="eg_charts" id="last6M"></div>
                                </div>
                                <div class="fl pr">
                                    <div class="eg_title">回头客年龄分布</div>
                                    <div class="eg_charts" id="agePercent"></div>
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
                },
                weekCount: {
                    tooltip: {
                        trigger: "axis"
                    },
                    xAxis: {
                        splitLine: {
                            show: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        },
                        axisLabel: {
                            color: "#fff",
                            fontSize: 16
                        },
                        type: "category",
                        data: [
                            "05/21",
                            "05/20",
                            "05/19",
                            "05/18",
                            "05/17",
                            "05/16",
                            "05/15"
                        ]
                    },
                    yAxis: {
                        // show:false,
                        splitLine: {
                            show: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        },
                        axisLabel: {
                            color: "#fff",
                            fontSize: 16
                        },
                        type: "value"
                    },
                    series: [
                        {
                            data: [34, 34, 55, 3444, 3224, 444, 32224],
                            type: "line",
                            smooth: true
                        }
                    ]
                }
            },
            cityList: [],
            model8: "",
            charts: {},
            shopId: 0,
            SPIndex: {},
            shopCustomer: {},
            customer: {},
            indexTop: {
                yearcount: {},
                city: {},
                rent: {},
                instore: {}
            },
            compete: {}
        };
    },
    methods: {
        // 成功/繁荣指数
        getSPIndex() {
            this.$http
                .get(this.$api.getSPIndex(), {
                    params: {
                        token: this.token,
                        ShopId: this.shopId
                    }
                })
                .then(res => {
                    console.log(res);
                    if (res.data.code == 1) {
                        this.SPIndex = res.data.result;
                    } else {
                        console.log(res);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        // 购物中心指数
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
        // 购物中心业态
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
        },
        // 购物中心客群
        getShopCustomer() {
            this.$http
                .get(this.$api.getShopCustomer(), {
                    params: {
                        token: this.token,
                        ShopId: this.shopId
                    }
                })
                .then(res => {
                    console.log(res);
                    if (res.data.code == 1) {
                        this.shopCustomer = res.data.result;
                    } else {
                        console.log(res);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        // 购物中心关键指标
        getShopIndexTop() {
            this.$http
                .get(this.$api.getShopIndexTop(), {
                    params: {
                        token: this.token,
                        ShopId: this.shopId
                    }
                })
                .then(res => {
                    console.log(res);
                    if (res.data.code == 1) {
                        this.indexTop = res.data.result;
                    } else {
                        console.log(res);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        // 竞争数据
        getCompete() {
            this.$http
                .get(this.$api.getCompete(), {
                    params: {
                        token: this.token,
                        ShopId: this.shopId
                    }
                })
                .then(res => {
                    console.log(res);
                    if (res.data.code == 1) {
                        this.compete = res.data.result;
                    } else {
                        console.log(res);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        // 一周客流趋势
        getWeekCount() {
            this.charts.weekCount = echarts.init(
                document.getElementById("weekCount")
            );
            this.charts.weekCount.showLoading("default", {
                text: "加载中...",
                color: "#f49c00",
                textColor: "#fff",
                maskColor: "rgba(0, 0, 0, 0.5)",
                zlevel: 0
            });
            this.$http
                .get(this.$api.getWeekCount(), {
                    params: {
                        token: this.token,
                        ShopId: this.shopId
                    }
                })
                .then(res => {
                    console.log(res);
                    if (res.data.code == 1) {
                        this.data.weekCount.xAxis.data = res.data.result.dataX;
                        this.data.weekCount.series[0].data = res.data.result.dataY;

                        this.charts.weekCount.hideLoading();
                        this.charts.weekCount.setOption(this.data.weekCount);
                    } else {
                        console.log(res);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.token = this.$store.state.token;
        this.getSPIndex();
        this.getPercent();
        this.getIndustry();
        this.getShopCustomer();
        this.getShopIndexTop();
        this.getCompete();
        this.getWeekCount();
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
        background-image: linear-gradient( 0,
        #2cb8f3 5%,
        transparent 5%,
        transparent),
        linear-gradient(90deg, #2cb8f3 5%, transparent 5%, transparent),
        linear-gradient(0, transparent 100%, #2cb8f3 100%),
        linear-gradient(90deg, transparent 100%, #2cb8f3 100%);
        background-size: 30px 25px;
        .cs_text {
            position: absolute;
            left: 111px;
            bottom: 24px;
            &>span:first-child {
                font-size: 36px;
                line-height: 47px;
            }
            &>span:last-child {
                font-size: 18px;
                line-height: 24px;
            }
        }
        .cs_points {
            position: absolute;
            right: 158px;
            bottom: 4px;
            &>span:first-child {
                font-size: 90px;
                line-height: 119px;
            }
            &>span:last-child {
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
        background-repeat: no-repeat;
        background-size: cover;
    }
    font-family: "Microsoft Yahei";
    color: @fontColor;
    .ch_content {
        >div.ch_echarts {
            height: 100%;
            width: 100%;
        }
    }
    span.slt {
        margin: 0 0 0 30px;
        >select {
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
        >span {
            >button {
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
        >div {
            width: 50%;
            padding: 15px;
            >div {
                border: 1px solid #176bb8;
                overflow: hidden;
            }
        }
        .charts_success,
        .charts_prosperity {
            >div {
                height: 130px;
                border: none;
                color: #fff;
            }
        }
        .charts_success {
            div[class*="mark"] {
                background-color: #1ab2f3;
                background-image: linear-gradient( 0,
                #2cb8f3 5%,
                transparent 5%,
                transparent),
                linear-gradient( 90deg,
                #2cb8f3 5%,
                transparent 5%,
                transparent),
                linear-gradient(0, transparent 100%, #2cb8f3 100%),
                linear-gradient(90deg, transparent 100%, #2cb8f3 100%);
                background-size: 30px 25px;
                .cs_text {
                    position: absolute;
                    left: 111px;
                    bottom: 24px;
                    &>span:first-child {
                        font-size: 36px;
                        line-height: 47px;
                    }
                    &>span:last-child {
                        font-size: 18px;
                        line-height: 24px;
                    }
                }
                .cs_points {
                    position: absolute;
                    right: 158px;
                    bottom: 4px;
                    &>span:first-child {
                        font-size: 90px;
                        line-height: 119px;
                    }
                    &>span:last-child {
                        font-size: 36px;
                        line-height: 47px;
                    }
                }
            }
        }
        .charts_prosperity {
            >div[class*="mark"] {
                background-color: #fc6e55;
                background-image: linear-gradient( 0,
                #fc7962 5%,
                transparent 5%,
                transparent),
                linear-gradient( 90deg,
                #fc7962 5%,
                transparent 5%,
                transparent),
                linear-gradient(0, transparent 100%, #fc7962 100%),
                linear-gradient(90deg, transparent 100%, #fc7962 100%);
                background-size: 30px 25px;
                .cs_text {
                    position: absolute;
                    left: 111px;
                    bottom: 24px;
                    &>span:first-child {
                        font-size: 36px;
                        line-height: 47px;
                    }
                    &>span:last-child {
                        font-size: 18px;
                        line-height: 24px;
                    }
                }
                .cs_points {
                    position: absolute;
                    right: 158px;
                    bottom: 4px;
                    &>span:first-child {
                        font-size: 90px;
                        line-height: 119px;
                    }
                    &>span:last-child {
                        font-size: 36px;
                        line-height: 47px;
                    }
                }
            }
        }
        >div[class^="echarts_"] {
            >div {
                height: 688px;
                >.ch_title {
                    height: 40px;
                    width: 100%;
                    margin-top: 30px;
                    >span {
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
                >.ch_content {
                    height: 616px;
                }
            }
        }
        >div.echarts_hotMap {
            .ch_title::before {
                background-color: #bd10e0;
            }
        }
        >div.echarts_percent {
            .ch_title::before {
                background-color: #239dfd;
            }
        }
        >div.echarts_industry {
            .ch_title::before {
                background-color: #ffa094;
            }
        }
        >div.echarts_customer {
            .ch_title::before {
                background-color: #50e3c2;
            }
            .fanrong {
                width: 80%;
                margin: 55px auto;
                height: 129px;
                &:nth-child(1) {
                    background-color: #c87ff3;
                    background-image: linear-gradient( 0,
                    #ce8cf3 5%,
                    transparent 5%,
                    transparent),
                    linear-gradient( 90deg,
                    #ce8cf3 5%,
                    transparent 5%,
                    transparent),
                    linear-gradient(0, transparent 100%, #ce8cf3 100%),
                    linear-gradient(90deg, transparent 100%, #ce8cf3 100%);
                    background-size: 30px 25px;
                    .cs_text {
                        position: absolute;
                        left: 111px;
                        bottom: 24px;
                        &>span:first-child {
                            font-size: 36px;
                            line-height: 47px;
                        }
                        &>span:last-child {
                            font-size: 18px;
                            line-height: 24px;
                        }
                    }
                    .cs_points {
                        position: absolute;
                        right: 158px;
                        bottom: 4px;
                        &>span:first-child {
                            font-size: 90px;
                            line-height: 119px;
                        }
                        &>span:last-child {
                            font-size: 36px;
                            line-height: 47px;
                        }
                    }
                }
                &:nth-child(2) {
                    background-color: #33c882;
                    background-image: linear-gradient( 0,
                    #4dce94 5%,
                    transparent 5%,
                    transparent),
                    linear-gradient( 90deg,
                    #4dce94 5%,
                    transparent 5%,
                    transparent),
                    linear-gradient(0, transparent 100%, #4dce94 100%),
                    linear-gradient(90deg, transparent 100%, #4dce94 100%);
                    background-size: 30px 25px;
                    .cs_text {
                        position: absolute;
                        left: 111px;
                        bottom: 24px;
                        &>span:first-child {
                            font-size: 36px;
                            line-height: 47px;
                        }
                        &>span:last-child {
                            font-size: 18px;
                            line-height: 24px;
                        }
                    }
                    .cs_points {
                        position: absolute;
                        right: 158px;
                        bottom: 4px;
                        &>span:first-child {
                            font-size: 90px;
                            line-height: 119px;
                        }
                        &>span:last-child {
                            font-size: 36px;
                            line-height: 47px;
                        }
                    }
                }
                &:nth-child(3) {
                    background-color: #f68d71;
                    background-image: linear-gradient( 0,
                    #f6967c 5%,
                    transparent 5%,
                    transparent),
                    linear-gradient( 90deg,
                    #f6967c 5%,
                    transparent 5%,
                    transparent),
                    linear-gradient(0, transparent 100%, #f6967c 100%),
                    linear-gradient(90deg, transparent 100%, #f6967c 100%);
                    background-size: 30px 25px;
                    .cs_text {
                        position: absolute;
                        left: 111px;
                        bottom: 24px;
                        &>span:first-child {
                            font-size: 36px;
                            line-height: 47px;
                        }
                        &>span:last-child {
                            font-size: 18px;
                            line-height: 24px;
                        }
                    }
                    .cs_points {
                        position: absolute;
                        right: 158px;
                        bottom: 4px;
                        &>span:first-child {
                            font-size: 90px;
                            line-height: 119px;
                        }
                        &>span:last-child {
                            font-size: 36px;
                            line-height: 47px;
                        }
                    }
                }
            }
        }
        >div.echarts_compete {
            .ch_title::before {
                background-color: #d5187e;
            }
            >div {
                height: auto;
                >div.ch_content {
                    padding: 26px;
                    height: auto;
                    >div.cc_top {
                        >div {
                            width: calc((100% - 30px) / 3);
                            height: 122px;
                            &:nth-child(2) {
                                margin: 0 15px;
                            }
                            div.cs_text {
                                bottom: 40px;
                                left: 36px;
                                >span {
                                    font-size: 24px;
                                    line-height: 31px;
                                }
                            }
                            div.cs_points {
                                bottom: 30px;
                                right: 50px;
                                >span:first-child {
                                    font-size: 48px;
                                    line-height: 64px;
                                    font-weight: bold;
                                }
                                >span:last-child {
                                    font-size: 24px;
                                    line-height: 31px;
                                }
                            }
                        }
                        >div:nth-child(2) {
                            >div {
                                background-color: #fe6464;
                                background-image: linear-gradient( 0,
                                #fe7070 5%,
                                transparent 5%,
                                transparent),
                                linear-gradient( 90deg,
                                #fe7070 5%,
                                transparent 5%,
                                transparent),
                                linear-gradient( 0,
                                transparent 100%,
                                #fe7070 100%),
                                linear-gradient( 90deg,
                                transparent 100%,
                                #fe7070 100%);
                            }
                        }
                        >div:nth-child(3) {
                            >div {
                                background-color: #fc9d30;
                                background-image: linear-gradient( 0,
                                #fca645 5%,
                                transparent 5%,
                                transparent),
                                linear-gradient( 90deg,
                                #fca645 5%,
                                transparent 5%,
                                transparent),
                                linear-gradient( 0,
                                transparent 100%,
                                #fca645 100%),
                                linear-gradient( 90deg,
                                transparent 100%,
                                #fca645 100%);
                            }
                        }
                    }
                    >div.cc_bottom {
                        padding-top: 26px;
                        >div.cb_left {
                            width: calc(66.66% - 5px); // margin-right: 15px;
                            padding: 26px;
                            border: 1px solid #176bb8;
                            height: 638px;
                            #competeIMG {
                                background-image: url("../../../assets/images/compete.png");
                                height: 574px;
                                margin-top: 36px;
                                background-repeat: no-repeat;
                                background-position: center;
                            }
                        }
                        >div.cb_right {
                            width: calc(33.33% - 10px);
                            height: 638px;
                            margin-left: 15px;
                            border: 1px solid #176bb8;
                            >table {
                                width: 100%;
                                font-size: 14px;
                                line-height: 3;
                                tr,
                                th {
                                    text-align: center;
                                    border-bottom: 1px solid #204c74;
                                }
                                tr:first-child {
                                    background-color: #003b70;
                                }
                            }
                        }
                    }
                }
            }
        }
        >div.echarts_keyData {
            .ch_title::before {
                background-color: #189cd5;
            }
            .ch_content {
                >div {
                    width: 50%;
                    height: 100%;
                    padding: 0 26px;
                    &:not(:nth-child(2n)) {
                        border-right: 1px solid #204c74;
                    }
                    >div {
                        &:not(:nth-child(2n)) {
                            border-bottom: 1px solid #204c74;
                        }
                        width: 100%;
                        height: 50%;
                        padding: 40px 30px;
                        text-align: center;
                        >i {
                            font-size: 80px;
                            line-height: 90px;
                            padding-top: 12px;
                        }
                        >div {
                            &:last-child {
                                width: 140px;
                            }
                            >div:first-child {
                                font-size: 16px;
                                line-height: 21px;
                            }
                            >div:last-child {
                                font-size: 30px;
                                line-height: 40px;
                            }
                        }
                    }
                }
            }
        }
        >div.echarts_guestPercent {
            >div {
                height: auto;
            }
            .ch_title::before {
                background-color: #189cd5;
            }
            div.ch_content {
                height: auto;
                padding: 26px;
                >div {
                    &:nth-child(2n-1) {
                        margin-right: 26px;
                    }
                    margin-bottom: 26px;
                    width: calc(50% - 13px);
                    height: 424px;
                    border: 1px solid #204c74;
                    >div.eg_charts {
                        width: 100%;
                        height: 100%;
                    }
                    >div.eg_title {
                        position: absolute;
                        font-size: 16px;
                        top: 12px;
                        left: 12px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>
