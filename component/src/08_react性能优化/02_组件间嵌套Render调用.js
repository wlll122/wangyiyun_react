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
            count:0
        }
    }
    render() {
        console.log('App函数被调用');
        return(
            <div>
                <h2>当前计数: {this.state.count} </h2>
                <button onClick = {el=>{this.add()}}>点击添加</button>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
    add(){
        this.setState ({
            count:this.state.count +1
        })
    }
}
//m每次更新全部render浪费性能