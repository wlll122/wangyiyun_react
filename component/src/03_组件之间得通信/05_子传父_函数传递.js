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

