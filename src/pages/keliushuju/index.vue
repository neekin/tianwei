<template>
    <section class="clearfix">
        <Aside></Aside>
        <div class="content clearfix fl">
            <!-- <div id="main" style="width: 600px;height:400px;"></div> -->
            <div class="report_cityDist fl">城市分布情况</div>
        </div>
    </section>
</template>

<script>
import Base64 from "@/api/Base64";

// 引入基本模板
var echarts = require('echarts')
// // 引入柱状图组件
require('echarts/lib/chart/bar')
// // 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
    data() {
        return {
            data: {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            },
            myChart: ''
        }
    },
    methods: {

    },
    created() {
        // console.log(Base64.encode('F699BDA69E5A20A1EA4FA0799C1AADF368183BD8D86ACE0D69F17A147EC00C70'));
        // this.$http.get(this.$api.getCountSumReport(), {
        //     params: {
        //         token: Base64.encode('F699BDA69E5A20A1EA4FA0799C1AADF368183BD8D86ACE0D69F17A147EC00C70')
        //     }
        // }).then(res => {
        //     console.log(res);

        // this.myChart = echarts.init(document.getElementById('main'));
        // this.myChart.setOption(this.data)
        // })
    }
}
</script>

<style lang="less" scoped>
@import url("../../style/base.less");

section {
  box-sizing: border-box;
  //   width: 100vw;
  //   height: 100vh;
  width: 1920px;
  height: 946px;
  //   outline: 2px solid red;
  overflow: hidden;
  .aside {
    width: 212px;
    height: 100%;
    border-right: 3px solid #e59607;
    box-sizing: border-box;
  }
  .content {
    margin-left: 212px;
    color: @fontColor;
    > div[class^="report_"] {
      margin: 12px;
      background-color: @boxbgc;
      border: 3px solid @borderColor;
    }
    .report_cityDist {
      width: 324px;
      height: 564px;
      float: left;
    }
  }
}
</style>
