import React,{Component} from 'react'
import {render} from "@testing-library/react";
//header
function Header() {
    return(
        <div>我是header组件</div>
    )

}
// banner
function Banner() {
    return(
        <h4>我是轮播图</h4>
    )
}
//main
function Main() {
    return(
        <div>
            <Banner/>
        </div>
    )
}

//footer
function Footer() {
    return(
        <div>我是footer组件</div>
    )
}

export default class App extends Component{
    render() {
        return(
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}
