import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "GG",
    };
  }

  render() {
    return (
      <div>
        App
        <h3>当前数字{this.state.count}</h3>
        {this.state.name}
        <button
          onClick={(el) => {
            this.add();
          }}
        >
          点击增1
        </button>
      </div>
    );
  }

  add() {
    //   setState本身会执行合并
    // this.setState({
    //   count: this.state.count + 1,
    // });

    //加入传入一个值,不会将所有的覆盖,assign方法将拷贝一个新的对象
// 2. 合并时累加,参数第一个为上一个值,累加时传入函数
this.setState((prevState,props)=>{
return {
    count:prevState.count + 1
}
})
this.setState((prevState,props)=>{
    return {
        count:prevState.count + 1
    }
    })

}
}
