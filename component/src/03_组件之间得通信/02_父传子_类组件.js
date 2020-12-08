import React,{Component} from 'react'

//父传子
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
// 进度////2:10





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
