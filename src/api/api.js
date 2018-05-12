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
    	var url = this.getApi('/MBase/getShopList');
        if(params){
        	url+='?';
        	for(var key in params)
        	{
        		url=url+key+'='+params[key]+'&';
        	}
        }
        return url;
    },
    getrolelist(params){
        var url = this.getApi('/Role/getRoleList');
        if(params){
        	url+='?';
        	for(var key in params)
        	{
        		url=url+key+'='+params[key]+'&';
        	}
        }
        return url;
    },
    getuserlist(params){
       var url = this.getApi('/User/getUserList');
        if(params){
            url+='?';
            for(var key in params)
            {
                url=url+key+'='+params[key]+'&';
            }
        }
        return url; 
    },
    getmenulist(){
    	return this.getApi('/Home/getMenuList');
    },
    addrole(){
        return this.getApi('/Role/AddUptRole')
    }
}

module.exports = Api
