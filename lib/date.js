export function getDateTime(pattenStr, millisecond){
	
	/*pattenStr:Y,M,D,H,i,s*/
	var currentTime = new Date();
	millisecond && currentTime.setTime(millisecond);

	var currentYear = currentTime.getUTCFullYear() + "",
	currentMonth = currentTime.getUTCMonth() + 1 + "",
	currentDay = currentTime.getUTCDate() + "",
	currentHours = currentTime.getUTCHours() + "",
	currentMinutes = currentTime.getUTCMinutes() + "",
	currentSeconds = currentTime.getUTCSeconds() + "",
	currentMilliSeconds = millisecond % 1000;
	
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
		"s": currentSeconds,
		"N": upperDate(Math.floor(currentMilliSeconds/10)),
		"n": Math.floor(currentMilliSeconds/100)
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

export function getTime(dateTime){
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

export function countdown(pattenStr, millisecond){
	
	/*pattenStr:Y,M,D,H,i,s*/
	//	
	millisecond = typeof millisecond != "number" || millisecond < 0 ? 0 : millisecond;

	var currentDay = Math.floor(millisecond / (24 * 3600 * 1000));
	millisecond = millisecond % (24 * 3600 * 1000);

	var currentHours = Math.floor(millisecond / (3600 * 1000));
	millisecond = millisecond % (3600 * 1000);
	var currentMinutes = Math.floor(millisecond / (60 * 1000));
	millisecond = millisecond % (60 * 1000);
	var currentSeconds = Math.floor(millisecond / 1000);	

	var currentMilliSeconds = millisecond % 1000;

	var showStr = "";
	
	
	var pattenObj = {		
		"D": upperDate(currentDay),
		"d": currentDay,
		"H": upperDate(currentHours),
		"h": currentHours,
		"I": upperDate(currentMinutes),
		"i": currentMinutes,
		"S": upperDate(currentSeconds),
		"s": currentSeconds,
		"N": upperDate(Math.floor(currentMilliSeconds/10)),
		"n": Math.floor(currentMilliSeconds/100)
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
