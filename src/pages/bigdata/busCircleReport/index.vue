<template>
    <div>
        <headnav></headnav>
        <sidebar></sidebar>
        <container>
            <div class="content">

                <form @submit.prevent="console.log('submit')" class="navIpt">
                    <span>
                        类别:
                        <select v-model="model8">
                            <option value='' disabled selected style='display:none;'>请选择</option>
                            <option :value='i' v-for="(v,i) in cityList" :key="i">{{v.value}}</option>
                        </select>
                    </span>
                    <span>
                        商圈:
                        <select v-model="model8">
                            <option value='' disabled selected style='display:none;'>请选择</option>
                            <option :value='i' v-for="(v,i) in cityList" :key="i">{{v.value}}</option>
                        </select>
                    </span>
                    <span>
                        <button>
                            <i class="iconfont icon-fenxiang"> 查询</i>
                        </button>
                    </span>
                </form>

                <div class="content_charts clearfix">
                    <div class="charts_success fl">
                        <div class="clearfix">
                            <div class="fl">
                                <span>点址成功指数</span>
                                <span>（满分10）</span>
                            </div>
                            <div class="fr">
                                5分
                            </div>
                        </div> 
                    </div>
                    <div class="charts_prosperity fl">
                        <div>
                            222
                        </div>
                    </div>
                    <div class="fl">
                        <div>
                            333
                        </div>
                    </div>
                    <div class="fl">
                        <div>
                            444
                        </div>
                    </div>
                </div>

            </div>
        </container>
    </div>
</template>

<script>
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
            cityList: [],
            model8: ""
        };
    },
    mounted() {
        this.token = this.$store.state.token;
    }
};
</script>

<style lang="less" scoped>
@import url("../../../style/base.less");
@import url("../../../assets/fonts/iconfont.css");

.content {
    font-family: "Microsoft Yahei";
    color: @fontColor;
    .navIpt {
        width: 100%;
        height: 100px;
        background-color: #013676;
        line-height: 100px;
        font-size: 16px;
        color: #dfe5ed;
        > span {
            margin: 0 0 0 30px;
            > select {
                width: 185px;
                height: 40px;
                border: 1px solid #0a4b90;
                border-radius: 5px;
                background-color: #00438b;
                color: #7f95ad;
                text-indent: 1em;
                margin: 0 20px;
            }
            > button {
                width: 100px;
                height: 40px;
                line-height: 40px;
                background-color: #245ee2;
                border: none;
                border-radius: 5px;
                color: #dfe5ed;
            }
        }
    }
    .content_charts {
        width: 100%;
        // padd ing: 30px;
        padding: 15px;
        > div {
            width: 50%;
            padding: 15px;
            > div {
                border: 1px solid #176bb8;
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
            > div {
                background-color: #1ab2f3;
            }
        }
        .charts_prosperity {
            > div {
                background-color: #fc6e55;
            }
        }
    }
}
</style>
