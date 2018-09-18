<template>
    <div class='model'>
        <div class="title">
               {{m.title}}
        </div>
        <div class="info">
         <div class="first">
             <div class="infomsg">
                 <div class="icon">
                       <img src="/static/today.png" alt="">
                 </div>
                 <div class="infotext">
                           <div class="title">今日(个)</div>
                           <p>{{m.today}}</p>
                 </div>
             </div>
               <div class="infomsg">
                 <div class="icon">
                         <img src="/static/lastday.png" alt="">
                 </div>
                 <div class="infotext">
                           <div class="title">昨日(个)</div>
                           <p>{{m.yestoday}}</p>
                 </div>
             </div>
               <div class="infomsg">
                 <div class="icon">
                         <img src="/static/lastweek.png" alt="">
                 </div>
                 <div class="infotext">
                           <div class="title">上周(个)</div>
                           <p>{{m.lastweek}}</p>
                 </div>
             </div>
               <div class="infomsg">
                 <div class="icon">
                     <img src="/static/lastmonth.png" alt="">
                 </div>
                 <div class="infotext">
                           <div class="title">上月(个)</div>
                           <p>{{m.lastmonth}}</p>
                 </div>
             </div>
         </div>
         <div class="second">
     <div class="infomsg">
                 <div class="icon">
                      <img src="/static/gouwu.png" alt="">
                 </div>
                 <div class="infotext">
                           <div class="title">购物中心今日(个)</div>
                           <p>{{m.skycount}}</p>
                 </div>
             </div>
                  <div class="infomsg">
                 <div class="icon">
                    <img src="/static/liansuo.png" alt="">
                 </div>
                 <div class="infotext">
                           <div class="title">连锁中心今日(个)</div>
                           <p>{{m.mycount}}</p>
                 </div>
             </div>
         </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props:['m']
};
</script>
<style lang='less' >
.model {
     padding-left:20px;
  padding-right: 20px;
  background-color: #fff;
      margin-top: 4px;
  .title {
    font-size: 18px;
    font-family: "微软雅黑";
    margin-left: -20px;
    border-bottom: 1px solid #ccc;
    margin-bottom:10px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left:10px;
  }
  .info {
    .first {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .infomsg {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 180px;
        // border:1px solid #000;
        img{
            width: 50px;
            // margin-right: 20px;
        }
        .title {
          font-size: 14px;
          color: #afafaf;
            border-bottom: none;
        }
        p {
          font-size: 30px;
        }
      }
    }
    .second {
        margin-top: 20px;
        display: flex;
        .infomsg{
            margin-left: 30px;
            width: 180px;
            display: flex;
             align-items: center;
             justify-content: space-between;
             img{
                 width: 30px;
             }
        .title {
          font-size: 14px;
          color: #afafaf;
          border-bottom: none;
        }
         p {
          font-size: 24px;
        }

        }
        .infomsg:nth-of-type(2){
            margin-left:60px;
        }
    }
  }
}
</style>

