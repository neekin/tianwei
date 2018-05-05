// http://121.201.14.250:83/swagger/ui/index
var Api = {
	 http:'http://',
	 https:'https://',
     url:'121.201.14.250:83',
     getApi(api){
            return this.http+this.url+api;
     },
     login:function(){return this.getApi("/Home/Login")}
}

module.exports = Api