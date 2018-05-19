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
    // GET /MBase/getGropList
    return this.getApi("/MBase/getGropList");
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
    // GET /User/getUserListExport
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
  getCity() {
    return this.getApi("/BIData/getCityDistReport");
  },
  getPeople() {
    return this.getApi("/BIData/getBusCircleCharReport");
  },
  getPercent() {
    return this.getApi("/BusData/getShopIndex");
  },
  getIndustry() {
    return this.getApi("/BusData/getShopIndustryReport");
  },
  getCustomer() {
    return this.getApi("/BusData/getShopCustomerReport");
  },
  getCountRP() {
    return this.getApi("/BIData/getCountSumReport");
  }
};
module.exports = Api;
