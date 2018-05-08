// http://121.201.14.250:83/swagger/ui/index
var Api = {
    http: 'http://',
    https: 'https://',
    url: 'localhost:8080/api',
    getApi(api) {
        return this.http + this.url + api;
    },
    login: function() { return this.getApi("/Home/Login") },
    logout:function(){}
}

module.exports = Api