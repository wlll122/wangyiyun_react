import React, { Component } from 'react'

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    render() {
        return (
            <div>
                App
                <h3>
                    当前数字{this.state.count}
                </h3>
                <button onClick = {el=>{this.add()}}>点击增1</button>
                <button id='btn'>原生获取点击</button>
            </div>
        )
    }
    //同步和一步区分:
    /**
     * 在组件得生命周期或者react合成事件中,setState时异步的
     * 在setTimeout 或者原生dom事件中,setState是同步的
     * **/
    componentDidMount(){
        document.getElementById('btn').addEventListener('click',()=>{
            this.setState({
                count : this.state.count +1
            })
            console.log(this.state.count);
        })
    }

    componentDidUpdate(){
        //2.获取异步更新得state
        console.log(this.state.count);
    }
    add(){
        console.log(111);
        // 异步更新:
        /*
        1.提升性能,如果每次调用setState都更新render页面,函数会被频繁调用,界面
        重新渲染,效率极低,可以获取到多个更新,进行批量更新
        2.如果同步更新了state,但是没有更新render函数,会使得state与props
        不能保持同步,产生问题

        获取一步更新后的数据,setState可以传入state,和回调函数
        */
    //    this.setState({
    //        count:this.state.count +1
    //    },()=>{
           
    //    })
    //setState变为同步更新
    setTimeout(()=>{
        this.setState({
            count:this.state.count +1
        })
        console.log(this.state.count);
    },0)
    
    }
}
