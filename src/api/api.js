// http://121.201.14.250:83/swagger/ui/index
var Api = {
    http: "http://",
    https: "https://",
    url: window.domian,
    getApi(api) {
        return this.http + this.url + api;
    },
    login: function() {
        return this.getApi("/Home/Login");
    },
    logout: function() {},
    forgetpwd(params) {
        return this.getApi("/Home/ForgetPwd") + "?" + this.Params(params);
    },
    getReTimeDeviceList(params) {
        // GET /Device/getReTimeDeviceList
        return (
            this.getApi("/Device/getReTimeDeviceList") + "?" + this.Params(params)
        );
    },
    exportReTimeDeviceList(params) {
        //GET /Device/getReTimeDeviceListExport
        return (
            this.getApi("/Device/getReTimeDeviceListExport") +
            "?" +
            this.Params(params)
        );
    },
    getshopbase() {
        return this.getApi("/Base/getShopBase");
    },

    getshoplist(params) {
        return this.getApi("/MBase/getShopList") + "?" + this.Params(params);
    },
    getgroplist() {
        return this.getApi("/MBase/getGropList");
    },
    getbd_BusCategory() {
        return this.getApi("/Base/getbd_BusCategory");
    },
    getmalllist() {
        // GET /MBase/getMallList
        return this.getApi("/MBase/getMallList");
    },
    addUptShop() {
        return this.getApi("/MBase/AddUptShop");
    },
    getrolelist(params) {
        return this.getApi("/Role/getRoleList") + "?" + this.Params(params);
    },
    exportrolelist(params) {
        return this.getApi("/Role/getRoleListExport") + "?" + this.Params(params);
    },
    exportshoplist(params) {
        return this.getApi("/MBase/getShopListExport") + "?" + this.Params(params);
    },
    exportuserlist(params) {
        return this.getApi("/User/getUserListExport") + "?" + this.Params(params);
    },

    getMapArea() {
        return this.getApi("/Base/getMapArea");
    },
    getbd_DeviceStatus() {
        return this.getApi("/Base/getbd_DeviceStatus");
    },
    getbd_DeviceStatusFlow() {
        return this.getApi("/Base/getbd_DeviceStatusFlow");
    },

    getuserlist(params) {
        return this.getApi("/User/getUserList") + "?" + this.Params(params);
    },
    getdeptjobrole() {
        return this.getApi("/Base/getDeptJobRole");
    },
    adduser() {
        return this.getApi("/User/AddUptUser");
    },
    getmenulist() {
        return this.getApi("/Home/getMenuList");
    },
    getmenuAllListRole(){
        return this.getApi('/Home/getMenuListByRole');
    },
    addrole() {
        return this.getApi("/Role/AddUptRole");
    },
    delrole() {
        return this.getApi("/Role/DelRole");
    },
    deluser() {
        return this.getApi("/User/DelUser");
    },
    Params(params) {
        var par = "";
        if (params) {
            for (var key in params) {
                par = par + key + "=" + params[key] + "&";
            }
            par = par.slice(0, par.length - 1);
        }
        return par;
    },
    // 今日/昨日/上周 客流量统计
    getCountRP() {
        return this.getApi("/BIData/getCountSumReport");
    },
    // 城市分布情况
    getCity() {
        return this.getApi("/BIData/getCityDistReport");
    },
    // 商圈客流情况
    getPeople() {
        return this.getApi("/BIData/getBusCircleCharReport");
    },
    // 前10商业体绩效
    getTop10BusCR() {
        return this.getApi("/BIData/getBusCategoryReport");
    },
    // 前10业态绩效
    getTop10IR() {
        return this.getApi("/BIData/getIndustryReport");
    },
    // 品牌客流排名
    getBrandR() {
        return this.getApi("/BIData/getBrandReport");
    },
    // 购物中心客流排名
    getShopR() {
        return this.getApi("/BIData/getShopReport");
    },

    // 成功/繁荣指数
    getSPIndex() {
        return this.getApi("/BusData/getSuccessProsperityIndex");
    },
    // 购物中心指数
    getPercent() {
        return this.getApi("/BusData/getShopIndex");
    },
    // 购物中心业态
    getIndustry() {
        return this.getApi("/BusData/getShopIndustryReport");
    },
    // 购物中心客群
    getShopCustomer() {
        return this.getApi("/BusData/getShopCusomterReport");
    },
    // 购物中心关键指标
    getShopIndexTop() {
        return this.getApi("/BusData/getShopIndexTop");
    },
    // 竞争数据
    getCompete() {
        return this.getApi("/BusData/getShopCompetitiveData");
    },
    // 一周客流
    getWeekCount() {
        return this.getApi("/BusData/getShopWeekCountReport");
    },
    // Top3
    getTop3() {
        return this.getApi("/BusData/getShopHotTimeReport");
    },
    // 年龄分布
    getAge() {
        return this.getApi("/BusData/getAgeReport");
    },
    // 年龄分布
    getSex() {
        return this.getApi("/BusData/getShopSexReport");
    },
    // 近6个月回头客
    getLast6M() {
        return this.getApi("/BusData/getReturnGuesReport");
    },
    // 回头客年龄分布
    getReturnGuestAge() {
        return this.getApi("/BusData/getReturnGuesAgeReport");
    },
    //楼层店铺数据
    getFloorStorePointReport(){
        return this.getApi('/BusData/getFloorStorePointReport');
    },
    //楼层店铺数据
    getFloorStoreDataReport(){
        return this.getApi('/BusData/getFloorStoreDataReport');
    },
    getFloorList(){
        return this.getApi('/BusData/getFloorList');
    },
    getShopHotChartReport(){
        return this.getApi('/BusData/getShopHotChartReport')
    },
    getDeviceList(params){
        return this.getApi('/Device/getDeviceList')+ "?" + this.Params(params)
    },
    getDevice(){
        return this.getApi('/Device/getDevice')
    },
    setDevice(){
        return this.getApi('/Device/setDevice')
    },
    setDevImg(){
        // POST /api/mg/Device/setDevImg
        return this.getApi('/Device/setDevImg')
    }

};
module.exports = Api;