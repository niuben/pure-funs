export function createDuration(duration) {
  const startTime = new Date();
  duration = duration !== undefined ? duration : 0;
  return function () {
    return duration + new Date().getTime() - startTime.getTime();
  };
}

export function createTimer(){
    var prevDuration = 0;
    var duration = createDuration();

    return {
      start: function(){        
        duration = createDuration(duration());        
      },
      stop: function(){        
        prevDuration = duration();
        duration = function(){
          return prevDuration;
        }
      },
      rest: function(){
        prevDuration = 0;
      },
      seconds: function(){
        return Math.floor(duration() / 1000);
      }
    }    
}

export function delay(number /* 秒数 */){
  return function(fun){
    setTimeout(fun, number);
  }
}

export function createRunning(){
  var isRunning = false;
  return {
    stop: function(){
       isRunning = false 
    },
    start: function(){
        isRunning = true;
    },
    status: function(){
        return isRunning;
    }
  }
}