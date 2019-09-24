	
  /*
     返回鼠标在页面上的坐标
  */	
 export function getPos() {
    var args = arguments;
    var e=args[0];
    var pos = { x: 0, y: 0};
    
    if (e.pageX || e.pageY) {
        pos.x = e.pageX;
        pos.y = e.pageY;
    } else {
        pos.x = e.clientX + document.body.scrollLeft - document.body.clientLeft,
        pos.y = e.clientY + document.body.scrollTop - document.body.clientTop
    }
    return pos;
}

/* 
   得到页面的高度
 */
 
export function getHeight() {
    if (document.documentElement.scrollHeight < document.documentElement.clientHeight) {
        if ("\v"=="v") {
            return document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
        } else {
            return self.innerHeight;
        }
    } else {
        return document.documentElement.scrollHeight;
    } 
}

/* 
   得到页面的宽度
 */

export function getWidth() {
    if (document.documentElement.scrollWidth < document.documentElement.clientWidth) {
        if ("\v" == "v") {
            return document.compatMode == "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth;
        } else {
            return self.innerWidth;
        }
    }else {
    return document.documentElement.scrollWidth;
    }

  } 

