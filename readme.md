## pure-funs
一个纯函数库

### API

#### 曲线 (curve)

__linear__　　　linear(percent)  
获取线性直线的百分比值，`percent`代表线性上的百分比;
```js
linear(0.5);  //0.5
```

__easeout__　　　easeout(percent)    
得出缓出曲线百分比的值， `percent`代表点在线性上百分比

```js 
easeout(0.5) //0.75
```
__easein__      easein(percent)   
得出缓入曲线百分比的值， `percent`代表点在线性上百分比
```js 
easeout(0.5) //0.75
```

__easeinout__   easeinout(percent)  
得出缓入缓出百分比的值，`percent`代表点在线性上百分比

```js 
easeinout(0.5) //0.75
```


### 数组 (array)
    
__asc__ asc(arr)
数组升序

```js
asc([0, 3, 1])  //[0, 1, 3];
```

__desc__ desc(arr)
数组降序
```js
asc([3, 1, 0])  //[0, 1, 3];
```

__distance__　distance(arr)
数组去重
```js
distance([0, 0, 1, 1, 2, 3]) //[0, 1, 2]
```

#### 集合(collections)
__sort__　　　sort(collections, key, asc|desc)
按照某个`key`进行排序

```js
var objArr = [{index: 1}, {index: 3}, {index: 2}, {index: 0}];
sort(objArr, "index", "asc"); //[{index: 0}, {index: 1}, {index: 2}, {index: 3}]

```

__deepSearch__　　　deepSearch(collections, key, value)
根据`key`的`value`进行查找

```js
var objArr = [{index: 1}, {index: 3}, {index: 2}, {index: 0}];
sort(objArr, "index", "asc"); //[{index: 0}, {index: 1}, {index: 2}, {index: 3}]
```

#### Cookie
__getCookie__　　　getCookie(key)
获得`key`的值
```js
//document.cookie = "name=123&index=1";
getCookie("name") //123

```
__setCookie__　　　setCookie(key, val)
给`key`设置值
```js
//document.cookie = "name=123&index=1";
setCookie("name", 1234) ////document.cookie = "name=1234&index=1";
```
__delCookie__　　　delCookie(key)
删除`key`的值
```js
//document.cookie = "name=123&index=1";
delCookie("name") ////document.cookie = "index=1";
```


#### 日期时间(date)
__getDateTime__　　　getDateTime(dateFormate, millisecond)
根据特定的时间格式获取时间。`dateFormat`是时间格式：
* Y: 四位年份，如2019;
* y: 两位年份, 如19;
* M: 两位月份, 如01;
* m: 一位月份，如1;
* D: 两位日期, 如01;
* d: 一位日期，如1;
* H: 两位小时, 如01;
* h: 一位小时，如1;
* I: 两位分钟, 如01;
* i: 一位分钟，如1;
* S: 两位秒数, 如01;
* s: 一位秒数，如1;

```js
getDateTime("Y-M-D H:I:S", new Date().getTime()) // 2019-04-29 14:31:41
getDateTime("y/m/d h:i:s", new Date().getTime()) // 19/4/29 14:31:4
```

__getTime__　　　getTime(dateFormate)
根据时间字符串获取秒数

```js
getTime("2019-04-29 14:31:41") //1556519501227
```
__countdown__　　　countdown(dateFormate, millisecond)
显示特定时间格式的倒计时
```js
countdown("H:I:S", 20000); //00:00:20
```


#### 节点(dom)
__$__　　　$(selector)
模仿jquery选择器

```js
$("p");
```

__getElementByClass__　　　getElementByClass(classname)
获取类名
```js
getElementByClass(".list") 
```

#### 时间器(duration)
获取持续的时间

```js
var time = duration();  //获取当前时间
time() //返回持续的秒数;

```

#### 数字(number)
__isInt__　　　isInt(num)
是否是整数

__isFloat__　　　isFloat(num)
是否是浮点数

__toDecimal__　　　isDecimal(float, digit)
给数设置特定位数的小数，返回值`number`
```js
isDecimal(12.333, 2)    // 12.22
```

__toFixed__　　　toFixed()
给数设置特定位数的小数，返回值`String`;
```js
toFixed(8, 2); //“8.00”

```

#### object


#### 安全(safe)
__filterXss    __　　　filterXss(str)
将字符串的`<`和`>`分别转义成`&lt`和`&gt`;
```js
filterXss("<script>alert(123)</script>") //&lt;script&gt;alert(123)&lt;/script&gt;
```

#### 屏幕(screen)
__getPos__　　　getPos()
返回鼠标在页面上的坐标

__getHeight__　　　getHeight()
得到页面的高度

__getWidth__　　　getWidth()
得到页面的宽度

#### 字符串(string)
__trim__　　　trim(str)
去掉字符串开头和结束的空格字符串

__copyStr__　　　copyStr(str)
拷贝字符串

#### 单位(unit)
__toKm__     toKm(number)
转化成公里数

#### 超链接(url)
__get__　　　get(key)
获取超链接上的值;
