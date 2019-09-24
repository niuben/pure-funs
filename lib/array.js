
//唯一性
export var distinct = function (arr) {    
    var returnArray = [];
    for (n = 0; n < arr.length - 1; n++) {
        var currentValue = arr[n];
        for (m = n + 1; m < arr.length; m++) {
            if (currentValue == arr[m]) {
                returnArray.push(currentValue);
                break;
            }
        }
    }
    return returnArray;
}

//升序
export var asc = function (arr) {
    return bubbling(arr, "asc");
}

//降序
export var desc = function (arr) {
    return bubbling(arr, "desc");
}

//排序
var bubbling = function (arr, order) {    
    var args = arguments;

    for (n = 0; n < arr.length - 1; n++) {
        for (m = n + 1; m < arr.length; m++) {
            if ((order == "desc" && arr[n] < arr[m]) || (order == "asc" && arr[n] > arr[m])) {
                var changeValue = arr[n];
                arr[n] = arr[m];
                arr[m] = changeValue;
            }
        }
    }
    return arr;
}

//删除重复
export var distance = function (arr) {    
    var returnArray = [];
    var isHave = 0;
    for (n = 0; n < arr.length - 1; n++) {
        var currentValue = arr[n];
        isHave = 0;
        for (m = n + 1; m < arr.length; m++) {
            if (currentValue == arr[m]) {
                isHave = 1;
                break;
            }
        }
        if (!isHave) {
            returnArray.push(currentValue);
        }
    }
    var lastNum = arr.length - 1;
    returnArray.push(arr[lastNum]);
    return returnArray;
}

var first = function (arr, value) {
    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] == value){
            isHave = 1;
        }
        if(isHave == 0) continue;
        var chg = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = chg;
    }
    arr.pop();
    arr.unshift(value);
    return arr;
}

/*
var object2String=function(){
	
	var obj=this;
    var val, output = "";
    
	if (obj) {    
        output += "{";
        for (var i in obj) {
            
			val = obj[i];
			
            switch (typeof val) {
                case ("object"):                	
                    if (val[0]) {
                        output += i + ":" + val.array2String + ",";
                    } else {
                        output += i + ":" + val.object2String + ",";
                    }
                    break;
                case ("string"):
                    output += i + ":'" + val + "',";
                    break;
                default:
                    output += i + ":" + val + ",";
            }
        }
        output = output.substring(0, output.length-1) + "}";
    }
    return output;
}

var array2String=function() {
	
	var array=this;
	
    var output = "";
    if (array) {
        output += "[";
        for (var i in array) {
            val = array[i];
            switch (typeof val) {
                case ("object"):
                    if (val[0]) {
                        output += val.array2String() + ",";
                    } else {
                        output += val.object2String() + ",";		                
                    }
                    break;
                case ("string"):
                    output += "'" + val + "',";
                    break;
                default:
                    output += val + ",";
            }
        }
        output = output.substring(0, output.length-1) + "]";
    }
    return output;
	
}*/

