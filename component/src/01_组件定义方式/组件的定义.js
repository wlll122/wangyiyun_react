import React,{Component} from "react";
/*
// 类组件
export default class App extends Component{
    constructor() {
        super();
        this.state = {
            message :'你好,万亮'
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
*/
// 函数式组件,1.没有this对象,2.无内部状态(hooks)
export default function App () {
    return(
        <div>
            我是方法组件
        </div>
    )
}
