<template>
    <div>
        <headnav></headnav>
        <sidebar></sidebar>
         <div class="container">
             <div class="context">
                <div class="content">    
                    <model :m='zero'></model>
               
                </div>
                <div class="content">
                    <model :m='diff'></model>
                </div>
               <div class="content">
                 <list :list='list' :search='search' @getlist='getlist'></list>
                  <Page :total="countpage" @on-page-size-change='changePagesize' @on-change='changePage' show-sizer />
               </div>
             </div>
           
         
         </div>
             

    </div>
</template>
<script>
import headnav from "../../components/headnav.vue";
import sidebar from "../../components/sidebar";
import container from "../../components/container";
import model from "./model";
import list from "./list";

export default {
  components: {
    headnav,
    sidebar,
    container,
    model,
    list
  },
  data() {
    return {
      token:'',
      zero: {
        title:'数据为零统计'
      },
      diff:{
        title:'数据差异统计'
      },
      search:{
        camid:'',
        shopname:'',
        warmtype:'',
        wStatus:'',
        SysVersionID:''

      },
      pagesize:10,
      pageindex:1,
      countpage:0,
      total:0,
      list:[]
    };
  },
  methods: {
    getWarningStatistics(){
      this.$http.get(this.$api.getWarningStatistics()+'?token='+this.token).then(res=>{
        this.zero = res.data.result.zero;
        this.zero.title ='数据为零统计';
        this.diff = res.data.result.diff;
        this.diff.title = '数据差异统计';
      
      })
    },
    getlist(){
      // console.log(this.search.camid)
        var params = {
            token :this.token,
            camid :this.search.camid,
            shopname:this.search.shopname,
            warmtype:this.search.warmtype,
            wStatus:this.search.wStatus,
            SysVersionID:this.search.SysVersionID,
            pagesize:this.pagesize,
            pageindex:this.pageindex

        }
        this.$http.get(this.$api.getWaringList(params)).then(res=>{
          // http://localhost:8080/api/Warn/getWaringList?token=A42B07DF94D2FF8162C7900A1B0DD6EB2C9AFAEB9365908A4D4DB3EC9424ACCC&
          // camid=&
          // shopname=&
          // warmtype=&
          // wStatus=&
          // SysVersionID=&
          // pagesize=10&
          // pageindex=1
          // console.log('数据列表',res);
          if(res && res.status ==200)
          {
            this.list = res.data.result
            this.countpage = Math.ceil(res.data.total / this.pagesize);
            this.total = res.data.total;
          }
        })
    },
    exportECL(){
        var params = {
            token :this.token,
            camid :this.search.camid,
            shopname:this.search.shopname,
            warmtype:this.search.warmtype,
            wStatus:this.search.wStatus,
            SysVersionID:this.search.SysVersionID

        }
    },
   changePage(pageindex){
      this.pageindex = pageindex;
      this.getlist();
    },
    changePagesize(pagesize){
      this.pagesize= pagesize;
      this.getlist();
    },
  },
  computed: {},
  mounted() {
    this.token = this.$store.state.token;
    this.getWarningStatistics();
    this.getlist();
  }
};
</script>
<style lang='less' scoped>

.container {
  width: 100%;
  background-color: #002b52;
}
.context {
  margin-left: 210px;
  margin-top:54px;
  background-color: #002b52;
  transition: all 1s;
  background-color: #cdcdcd;
}
</style>

