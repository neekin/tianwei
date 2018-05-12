// http://121.201.14.250:83/swagger/ui/index
var Api = {
    http: 'http://',
    https: 'https://',
    url: 'localhost:8080/api',
    getApi(api) {
        return this.http + this.url + api;
    },
    login: function() { return this.getApi("/Home/Login") },
    logout:function(){},
    getshoplist(params){
      return this.getApi('/MBase/getShopList')+'?'+this.Params(params);

    },
    getrolelist(params){
       return this.getApi('/Role/getRoleList')+'?'+this.Params(params);
    },
    getuserlist(params){
        return this.getApi('/User/getUserList')+'?'+this.Params(params);
    },
    getdeptjobrole(){
        return this.getApi('/Base/getDeptJobRole');
    },
    adduser(){
        return this.getApi('/User/AddUptUser');
    },
    getmenulist(){
    	return this.getApi('/Home/getMenuList');
    },
    addrole(){
        return this.getApi('/Role/AddUptRole')
    },
    delrole(){
        return this.getApi('/Role/DelRole')
    },
    Params(params){
          var par = '';
          if(params)
          {
            for(var key in params)
            {
                par=par+key+'='+params[key]+'&';
            }
           par =  par.slice(0,par.length-1)
          }
         
           return par;
    }
}

module.exports = Api
