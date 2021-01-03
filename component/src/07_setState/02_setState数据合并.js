import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name:'GG'
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
    this.setState({
      count: this.state.count + 1,
    });
    //加入传入一个值,不会将所有的覆盖,assign方法将拷贝一个新的对象
    Object.assign({},this.state,{count:this.state.count+1})
  }
}
