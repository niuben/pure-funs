## React-Form-Config
基础库完成一些Form基础功能，用户通过__继承方式__使用这些功能。具体功能如下：

* 创建表单;    
* 验证表单;
* 提交事件;

举个例子
```
this.state = {
    form: {
        data: [{
               id: "username",
            label: "账号",
            type: "input",
            placeholder: "请输入账号"
        },{
               id: "password",
            label: "密码",
             type: "password",
            value: ""
        }],
        conf: {
              labelCol: 5,
            wrapperCol: 18,
            isShowRequired: true
        }
    }
};

```
上面配置可以生成一个登录表单。


### 创建表单
基础库会根据__this.state.form.data__数据创建表单，配置不同数据可以展示不同的表单。`data`一个__对象数组__。数组中每一个对象代表一行。对象中包含一些属性，有些属性是必填的，有些属性可选的。

### 必填项
* id: 唯一标示;(必填)
* label: 标题(必填)
* type: 表单类型(必填)
    * text: 纯文字展示;(不能修改)
    * input: 文本输入框;
    * password: 密码;
    * textarea: 文本域;
    * radio: 单选框;
    * checkbox: 复选框;
    * select: 下拉框;
    * range: 开始和结束日期选择;
* value: 表单值;（必填）

### 选填想
* list: 列表值(当type等于radio、checkbox、select时list必填，数组形式，其它类型不需要这个属性)
    * name: 显示内容;
    * value: 下拉框的值;
* onChange: change事件;(没有定义onChange事件会使用系统默认onChange事件)
* validator: 验证输入值;
* maxLength: 最大字符长度，当type是input、textarea是这个属性值有用;

#### list属性
上面提过输入框类型为单选框、复选框、下拉框时，会多个一个`list`属性。`list`是一个数组，举个例子
```
list: [{
    name: "不限",
    value: "1"
},{
    name: "免费",
    value: "2"
},{
    name: "付费",
    value: "3"
}]
```

#### validator方法
通过validator方法可以自定义验证逻辑，方法需要返回`true`或者`false`，`true`和`false`表明验证通过和不通过。

```
validator:(val)=>{
    return /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/.test(val); 
}
```
上面代码是自定义一个邮箱验证，

#### 表单整体样式设置
基础库还提供一些表单整体设置属性，以保证表单样式可以适应更多的场景。

* labelCol: 标题宽度；默认值为3 (网格24)
* wrapperCol: 内容宽度；默认值19 (网格24)
* isShowRequired: 是否显示必填项`*`号 默认为`true`
* footer: 是否显示表单底部;  默认为`true`


### 验证表单
基础库具有`check`方法，用户可以直接调用这个方法也可以通过继承方法覆盖这些方法。

* check: 检查表单输入值是否合法；

### 提交事件
当表单验证成功后会调用`handleSubmit`提交方法，可以把提交的业务逻辑放这个方法。

* handleSubmit: 提交表单的方式


登录框的整体代码示例
```
import BaseForm from "../../index.js";
class Login extends BaseForm {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                data: [{
                       id: "username",
                    label: "账号",
                    type: "input",
                    placeholder: "请输入账号",
                    maxLength: 1000
                },{
                       id: "password",
                    label: "密码",
                     type: "password",
                    value: ""
                }],
                conf: {
                      labelCol: 5,
                    wrapperCol: 18,
                    isShowRequired: true
                }
            }
        };
    }
    reset(){        
        this.state.form.data.map((item, index)=>{
            if(item.value != "") {
                item.value = "";
            }
        });
        this.forceUpdate();
    }
    handleSubmit(){
        if(!this.check()) {
            return false;
        }
        console.log("已提交");
    }
    render(){
        return(
            <div style={{width: "500px", marginTop: 20}}>
                {this.getForm()}
            </div>
        )
    }
}
```


