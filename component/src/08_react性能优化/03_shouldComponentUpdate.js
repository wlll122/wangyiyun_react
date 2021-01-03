import React,{Component} from 'react'
import {render} from "@testing-library/react";
//header
function Header() {
    console.log('header被调用');
    return(
        <div>我是header组件</div>
    )

}
// banner
// function Banner() {
//     return(
//         <h4>我是轮播图</h4>
//     )
// }
class Banner extends Component{
    render(h) {
        console.log("banner被调用");
        return(
            <h4>我是轮播图</h4>
        )   
       }
}
//main
// function Main() {
//     return(
//         <div>
//             <Banner/>
//         </div>
//     )
// }
class Main extends Component{
    render(h) {
        console.log('Main被调用');
     return(
        <div>
        <Banner/>
    </div>
     )   
    }
}
//footer
function Footer() {
    console.log('fotter被调用');
    return(
        <div>我是footer组件</div>
    )
}

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            message:"hello world"
        }
    }
    render() {
        console.log('App函数被调用');
        return(
            <div>
                <h2>当前计数: {this.state.count} </h2>
                <button onClick = {el=>{this.add()}}>点击添加</button>
                <button onClick = {el=>{this.changTexe()}}>改变文本</button>

            </div>
        )
    }

    shouldComponentUpdate(nextProps,nextState){
        // 阻止render函数阻断,优化render
        if (this.state.count !== nextState.count) {
            // 如果返回的值不行同则更新,其他render为true
            return true
        }
        return false;
    }
    add(){
        this.setState ({
            count:this.state.count +1
        })
    }
    changTexe(){
        this.setState({
            message:'hello 世界'
        })
        console.log(this.state.message);
    }
}
//m每次更新全部render浪费性能