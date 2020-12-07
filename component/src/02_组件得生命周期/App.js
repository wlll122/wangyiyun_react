import React,{Component} from 'react'

class Cpn extends Component{
    render() {
        return(
            <div>
                我是cpn组件
            </div>
        )
    }
    componentWillUnmount() {
        console.log("调用了即将删除得方法")
    }
}

export default class App extends Component{
constructor() {
    super();
    console.log('执行了组件得constructor方法');
    this.state={
        count:0,
        isShow:true
    }
}
    render() {
        console.log('执行了组件得render函数');
        return(
            <div>
                我是App组件
                <h3>
                    {this.state.count}
                </h3>
                <button onClick={el=>this.isshows()}>切换</button>
                {this.state.isShow && <Cpn/>}
                <button onClick={el=>this.increment()}>+1</button>
            </div>
        )
    }
    isshows(){
    this.setState({
        isShow:!this.state.isShow
    })
    }

    increment(){
    this.setState({
        count:this.state.count+1
    })
    }
    componentDidMount() {
        console.log('执行了函数得componentDidment方法!')
    }
    componentDidUpdate() {
        console.log("执行了数据更新得方法")
    }

}
