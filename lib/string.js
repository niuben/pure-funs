//改变字符串的
 function change() {

    var Str = this;
    var targetStr = arguments[0];
    var replaceStr = arguments[1];
    var symbol = arguments[2];

    if (!symbol) { symbol = "&" }
    var comLength = targetStr.length;
    var searchArray = Str.split(symbol);
    var posNum;
    var posStartNum;
    Str = "";

    for (i = 0; i < searchArray.length; i++) {
        posNum = searchArray[i].indexOf(targetStr);
        posStartNum = posNum + comLength + 1;
        if (posNum != -1) { searchArray[i] = searchArray[i].substr(0, posStartNum) + replaceStr; }
        if (i != 0) { Str += symbol; }
        Str += searchArray[i];
    }

    return Str;
};

//去掉字符串开头和结束的空格字符串
function trim(){
    try {
        return this.replace(/^\s+|\s+$/g, '');
    }
    catch (a) {
        return this;
    }
};

 function copyStr() {
    var copy = this;

    if (window.clipboardData) {
        window.clipboardData.setData("Text", copy);
    } else if (window.netscape) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        } catch (e) {
            alert("被浏览器拒绝！\n请在浏览器地址栏输入[about:config]并回车\n然后将[signed.applets.codebase_principal_support]属性设置为[true]");
        }
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);

        if (!clip) {
            return;
        }

        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);

        if (!trans) {
            return;
        }

        trans.addDataFlavor('text/unicode');

        var str = new Object();
        var len = new Object();
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
        var copytext = copy;

        str.data = copytext;
        trans.setTransferData("text/unicode", str, copytext.length * 2);

        var clipid = Components.interfaces.nsIClipboard;

        if (!clip) {
            return false;
        }

        clip.setData(trans, null, clipid.kGlobalClipboard);

    }

    alert("已复制代码到剪贴板")
    return false;
}
module.exports = {
    change,
    trim,
    copyStr      
}