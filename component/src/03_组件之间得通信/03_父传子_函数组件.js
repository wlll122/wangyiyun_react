import React,{Component} from 'react'
function ChildCpn(props) {
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
