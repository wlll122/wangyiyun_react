## React

#### 组件的方式

1. 类组件

```
export default class App extends Component{
    constructor() {
        super();
        this.state = {
            message :'hello world'
        }
    }
render() {
    return(
        <div>
            我是App组件
            <h2>
                {this.state.message}
            </h2>
        </div>
    )
}
}
```

2. 函数式组件

```
export default function App () {
    return(
        <div>
            我是方法组件
        </div>
    )
}
//无自身内部状态,不能保持state
```

#### render 函数返回值

##### 函数组件可以返回的类型

1. react 元素
2. 数组
3. portals
4. 字符串及数值类型
5. 布尔值或者 null

#### 组件的生命周期

constructor

1. 通过 this.state 赋值对象初始化内部得 state
2. 为事件绑定实例(this)
   this.时间名.bind(this)
   componentDidMount

1.组件挂在后立即调用,发送网络请求 2.添加订阅,需要在 componentwillUmount 取消订阅 3.操作 dom

componentDidUpadte 1.组件更新后对此处操作 2.对更新前后得 props 进行对比,选择性进行网络请求

componemtWillUnmount 1.执行必要得清理操作 2.清楚 timer 取消网络请求,清除订阅

### 组件之间通信

#### 父传子----类组件

```
import React,{Component} from 'react'
//父传子,直接获取到props来进行展示
class ChildCpn extends Component{
    // 此处可以不写,继承自父类
    // constructor(props) {
    //     super(props);
    //     this.props = props
    // }
    render() {
        // 拿到数据
        const {name,age} = this.props
        return(
            <h2>
                子组件展示数据
                {name + '' + age + ''}
            </h2>
        )
    }
}
export default class App extends Component{
constructor() {
    super();

}
    render() {
        return(
            <div>
               <ChildCpn name='why' age='18' />
                <ChildCpn name='why' age='222' />
            </div>
        )
    }
}

```

#### 父传子 ---- 函数式组件

```
import React,{Component} from 'react'
function ChildCpn(props) {
    //此处直接通过解构来展示出传递的props
const {name,age} = props;
return(
    <div>
        <h2>
            姓名:{name}
            年龄:{age}
        </h2>
    </div>
)
}
export default class App extends Component{
    render() {
        return(
            <div>
                我是App组件
                <ChildCpn name='张三' age='19' />
            </div>
        )
    }
}
```

#### 函数传值的校验

1. 引入 ProType 方法
2. 使用: 组件名.propsTypes = {
   name:propsType.类型
   }

```
import React,{Component} from 'react'
import PropType from 'prop-types'
function ChildCpn(props) {
    const {name,age} = props;
    return(
        <div>
            <h2>
                姓名:{name}
                年龄:{age}
            </h2>
            <ul>
                {
                    name.map((item,index)=>{
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
// 传入默认值
ChildCpn.defaultProps = {
    age:1212
}
//验证,类型的设定
ChildCpn.propTypes = {
    name:PropType.array,
    //必须传递
    age:PropType.number.isRequired
}
export default class App extends Component{

    render() {
        console.log(undefined + 110)//返回NAN
        return(
            <div>
                我是App组件
                <ChildCpn name={[1, 2, 3, 4]} age={19} />
            </div>
        )
    }
}
```

#### 子传父实现

1. 子父组件定义一个事件,定义即将改变的值或者变量.
2. 定义点击事件传递给子组件
3. 子组件获取到事件后将事件解构后再次执行

```
import React,{Component} from 'react'

//子组件
class CounterButton extends Component{
    render() {
        const {onClick} = this.props
    return <button onClick={onClick}>+1</button>
    }
}

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:2
        }
    }
    render() {
        return(
            <div>
                <h3>当前的计数值:{this.state.count}</h3>
                我是App组件
                <h3>当前的计数:{this.state.count}</h3>
                <button onClick={e=>{this.increment()}}>点击+++</button>
                {/*//出现this指向问题,绑定this*/}
                {/*<CounterButton onClick={this.increment.bind(this)}/>*/}
                {/*<CounterButton onClick={this.increment}/>*/}
                {/*直接传入箭头函数*/}
                <CounterButton onClick={e=>this.increment()}/>

            </div>
        )
    }
    // 使用箭头函数来解决this问题
    increment = ()=>{
        this.setState({
            count:this.state.count +1
        })
    }
}


```

#### react 实现插槽功能

1. 在父组件定义需要传递的属性,类似于 vue 的具名插槽

```
class App extends Component {
    render() {
        return (
            <div>
                <NavBar>
                    <span>aaaa</span>
                    <strong>bbbbb</strong>
                    <a href="/#">ccccc</a>
                </NavBar>
                <NavBar2 leftslot={ <span>aaaa</span>}
                         centersolt = { <strong>bbbbb</strong>}
                         rightsolot = {<a href="/#">ccccc</a>}
                />
            </div>
        );
    }
}

```
2. 在子组件接收并插入到div中
```
class NavBar2 extends Component {
    render() {
        const {leftslot,centersolt,rightsolot} = this.props
        return (
            <div className="nav-bar">
                <div className="nav-left">
                    {leftslot}
                </div>
                <div className="nav-center">
                    {centersolt}
                </div>
                <div className="nav-right">
                    {rightsolot}
                </div>

            </div>
        );
    }
}
```
### 跨组件通信
