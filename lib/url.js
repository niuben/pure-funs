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

//将url转换成一个对象
export var parseQuery = function(url){
	var obj = {},
		arr = [];

    var index = url.indexOf("?");
    if(index == -1){
        return obj;
    }
            
	var paraString = url.substring(index + 1, url.length).split("&");	
	for(var i in paraString){
		arr = paraString[i].split("=");
		obj[arr[0]] = arr[1];
    } 
    	
	return obj;
}

export var formatQuery = function(queryObj){
    var queryArr = [];
    for (const key in queryObj) {
        if (queryObj.hasOwnProperty(key)) {
            queryArr.push(key + "=" + queryObj[key]);
        }
    }
    return queryArr.join("&");
}


//获取url路径最后一个信息
function getFileName() {
    var wu_url= window.location.href;
    var wu_nopar = wu_url.split("?")[0].split("/");
    var wu_urlName = wu_nopar[wu_nopar.length-1];
    return wu_urlName;		
}	
