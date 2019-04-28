function getDateTime(pattenStr, time){
	
	/*pattenStr:Y,M,D,H,i,s*/
	var currentTime = new Date();
	time && currentTime.setTime(time);

	var currentYear = currentTime.getFullYear() + "",
	currentMonth = currentTime.getMonth() + 1 + "",
	currentDay = currentTime.getDate() + "",
	currentHours = currentTime.getHours() + "",
	currentMinutes = currentTime.getMinutes() + "",
	currentSeconds = currentTime.getSeconds() + "",
	showStr = "",
	posNum = 0;
	
	
	var pattenObj = {
		"Y": currentYear,
		"y": currentYear.substr(2, 2),
		"M": upperDate(currentMonth),
		"m": currentMonth,
		"D": upperDate(currentDay),
		"d": currentDay,
		"H": upperDate(currentHours),
		"h": currentHours,
		"I": upperDate(currentMinutes),
		"i": currentMinutes,
		"S": upperDate(currentSeconds),
		"s": currentSeconds
	};

	for(var i = 0; i< pattenStr.length; i++){					
		var char = pattenStr.charAt(i),
		_value = search(char, pattenObj);
		if( _value){	
			showStr += _value;
		}else{
			showStr += char;
		}
	}
	
	return showStr;	
}

function getTime(dateTime){
	// 标准形式 2014-07-31 08:10:00
	var dateObj = new Date();

	var dateTimeArray = dateTime.split(" "),
	date = dateTimeArray[0],
	time = dateTimeArray[1];

	var dateArray = date.split("-"),
	timeArray = time.split(":");

	dateObj.setFullYear(parseInt(dateArray[0]));
	dateObj.setMonth(parseInt(dateArray[1]) - 1);
	dateObj.setDate(parseInt(dateArray[2]));

	dateObj.setHours(parseInt(timeArray[0]));
	dateObj.setMinutes(parseInt(timeArray[1]));
	dateObj.setSeconds(parseInt(timeArray[2]));

	return dateObj.getTime();
}

function countdown(pattenStr, time){
	
	/*pattenStr:Y,M,D,H,i,s*/
	
	var currentDay = Math.floor(time / (24 * 3600 * 1000));
	time = time % (24 * 3600 * 1000);

	var currentHours = Math.floor(time / (3600 * 1000));
	time = time % (3600 * 1000);
	var currentMinutes = Math.floor(time / (60 * 1000));
	time = time % (60 * 1000);
	var currentSeconds = Math.floor(time / 1000);
	showStr = "";
	
	
	var pattenObj = {
		"D": upperDate(currentDay),
		"d": currentDay,
		"H": upperDate(currentHours),
		"h": currentHours,
		"I": upperDate(currentMinutes),
		"i": currentMinutes,
		"S": upperDate(currentSeconds),
		"s": currentSeconds
	};

	for(var i = 0; i< pattenStr.length; i++){					
		var char = pattenStr.charAt(i),
		_value = search(char, pattenObj);
		if( _value != null){	
			showStr += _value;
		}else{
			showStr += char;
		}
	}
	
	return showStr;	
}


function search(key,obj){
	for(var i in obj){
		if( i == key){
			return obj[i];
		}
	}
	return null;
}

function upperDate(currentDate){
	return currentDate.length == 1 || currentDate < 10 ? "0" + currentDate : currentDate
}

module.exports = {
	getTime,
	getDateTime,
	countdown,

}