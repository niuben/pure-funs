//得到指定的值
export function get(name) {
    var locationSearch = location.search.substr(1, location.search.length);
    var paramsArray = locationSearch.split("&");
    for (var i = 0; i < paramsArray.length; i++) {
        var param = paramsArray[i];
        var paramArray = param.split("=");        
        if (paramArray[0] == name) {
            paramArray.shift();
            return paramArray.join("=");
        }
    }
}

//获取url路径最后一个信息
function getFileName() {
    var wu_url= window.location.href;
    var wu_nopar = wu_url.split("?")[0].split("/");
    var wu_urlName = wu_nopar[wu_nopar.length-1];
    return wu_urlName;		
}	
