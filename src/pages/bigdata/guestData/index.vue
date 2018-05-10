<template>
    <div>
        <headnav></headnav>
        <sidebar></sidebar>
        <container>
            <div class="content clearfix">
                <div class="ct_left fl">
                    <div class="report_cityDist">
                        <div id="city" style="width:100%;height:100%"></div>
                    </div>
                    <div class="report_busCircle">商圈客流情况</div>
                </div>
                <div class="ct_right fr">
                    <div class="report_top10">前十商业体绩效</div>
                    <div class="report_bottom10">前十业态绩效</div>
                </div>
                <div class="ct_center ">
                    <div class="report_keliu">客流量统计</div>
                    <div class="report_paiming">客流量统计</div>
                </div>
            </div>
        </container>
    </div>
</template>

<style lang="less" scoped>
@import url("../../../style/base.less");

div {
  box-sizing: border-box;
}
.content {
  color: @fontColor;
  overflow: hidden;
  padding: 12px;
  > div[class^="ct_"] {
    > div[class^="report_"] {
      &:not(:first-child) {
        margin: 12px 0;
      }
      background-color: @boxbgc;
      border: 1px solid @borderColor;
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
import Base64 from "@/api/Base64";

// 引入基本模板
var echarts = require('echarts')
// // 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
// // 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

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
            data: {
                city: {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        padding: 10,
                        textStyle:{
                            color: '#d2dae0'
                        },
                        data: ['一线城市', '二线城市', '三线城市']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                { value: 335, name: '一线城市' },
                                { value: 310, name: '二线城市' },
                                { value: 234, name: '三线城市' }
                            ]
                        }
                    ]
                }
            },
            myChart: ''
        }
    },
    methods: {

    },
    mounted() {

        // console.log(Base64.encode('F699BDA69E5A20A1EA4FA0799C1AADF368183BD8D86ACE0D69F17A147EC00C70'));
        // this.$http.get(this.$api.getCountSumReport(), {
        //     params: {
        //         token: Base64.encode('F699BDA69E5A20A1EA4FA0799C1AADF368183BD8D86ACE0D69F17A147EC00C70')
        //     }
        // }).then(res => {
        //     console.log(res);

        this.cityChart = echarts.init(document.getElementById('city'));
        this.cityChart.setOption(this.data.city)
        // })
    }
}
</script>
