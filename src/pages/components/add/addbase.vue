<template>
<div>
         <div class='input group'>
           <span class='title'>集团：</span><input type="text" v-model='addParams.GroupName'>
         </div>
         <div class='input'>
           <span class='title'>SHOPID：</span> <input type="text" v-model='addParams.ShopId'>
           <span class='title'>平台：</span>
               <select v-model='addParams.SysVersionID'> 
                  <option value="0">请选择~</option>}
               <option v-for="item in SysVersion"  :key='item.SysVersionID' :value="item.SysVersionID">{{ item.SysVersion }}</option>
              </select>
         </div>
         <div class='input'>
           <span class='title'>城市分布：</span>
           <select  v-model='addParams.CityDistID'>
                               <option value="0">请选择~</option>}
               <option v-for="item in CityDist"  :key='item.CityDistID' :value="item.CityDistID">{{ item.CityDist }}</option>
           </select>
           <span class='title'>商圈特性：</span>
           <select v-model='addParams.BusCircleCharID'>
                       <option value="0">请选择~</option>}
               <option v-for="item in BusCircleChar"  :key='item.BusCircleCharID' :value="item.BusCircleCharID">{{ item.BusCircleChar }}</option>
           </select>
         </div>
         <div class='input '>
           <span class='title'>商业体类别：</span> 
           <select style='margin-left:-1px' v-model='addParams.BusCategoryID'>
              <option value="0">请选择~</option>
               <option v-for="item in BusCategory"  :key='item.BusCategoryID' :value="item.BusCategoryID">
               {{ item.BusCategory }}
              </option>
           </select>
           <span class='title'>平台维护：</span>
           <label>
            <span class='radio'>
                <input type="radio" value='0' v-model='addParams.Operation' name='Operation'>
                <i></i>
            </span>
             是 </label>
          <label> <span class='radio'>
                <input type="radio" value='1' v-model='addParams.Operation' name='Operation'>
                <i></i>
            </span> 否 </label>
           
         </div>
         <div class='input'>
           <span class='title'>备注：</span><textarea v-model='addParams.Remark' cols="30" rows="10"></textarea>
         </div>
</div>
</template>
<script>
export default {
  name: "addbase",
  props:['edit'],
  data() {
    return {
      BusCategory: [],
      BusCircleChar: [],
      CityDist: [],
      SysVersion: [],
      addParams: {
        GroupName: "",
        ShopId: 0,
        SysVersionID: 0,
        CityDistID: 0,
        BusCircleCharID: 0,
        BusCategoryID: 0,
        Operation: '',
        Remark: ""
      }
    };
  },
  methods: {
    init() {
      this.$http
        .get(this.$api.getshopbase() + "?token=" + this.$store.state.token)
        .then(res => {
          if (res.data.code === 1) {
            this.BusCategory = res.data.result.BusCategory;
            this.BusCircleChar = res.data.result.BusCircleChar;
            this.CityDist = res.data.result.CityDist;
            this.SysVersion = res.data.result.SysVersion;
          }
        });
    },
    add(){
      var addParams ={};
      for(var key in this.addParams)
      {
        addParams[key]= this.addParams[key];
      }
      console.log(addParams);
      addParams.token = this.$store.state.token;
       this.$http.post(this.$api.addUptShop(),addParams).then(res=>{
           console.log(res);
       })
    }
  },
  mounted() {
    if(this.edit!=null)
    {
      this.addParams = this.edit;
    }
    this.init();
  }
};
</script>
<style scoped>
.input input,
.input select {
  background-color: rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  height: 38px;
  outline: none;
  /*border:none;*/
  width: 160px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
.input select option {
  background-color: rgba(0, 42, 80, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.input {
  width: 640px;
  margin: 20px auto;
}
.input span {
  display: inline-block;
  width: 120px;
  text-align: right;
  padding-right: 25px;

  display: inline-block;
  height: 38px;
  line-height: 38px;
  vertical-align: top;
}
.group {
  margin-top: 30px;
}
.group input {
  width: 450px;
}
.input .radio{
    position: relative;
    display: inline-block;
    height:16px;
    width: 16px;
    background: rgba(0,0,0,0.12);
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    padding:0;
    vertical-align: middle;
    margin-right: 10px;
}
.input label{
  margin: 0 20px;
}
.input .radio input{
   width: 16px;
  height: 16px;
  position: absolute;
  top:0;
  left:0;
  opacity: 0;
  z-index: 1;
}
.input .radio i{
  height:12px;
  width: 12px;
  background-color: #F49C00;
  position: absolute;
  left:1px;
  top:1px;
  border-radius: 50%;
  opacity: 0;
  z-index: 0;
}
.input .radio input:checked ~ i {
  opacity: 1;
}
.input select {
  margin-left: 4px;
}
.input textarea {
  background-color: rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  outline: none;
  width: 450px;
  height: 60px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  padding: 8px;
}
</style>
