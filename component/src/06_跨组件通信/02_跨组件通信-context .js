import React, { Component } from "react";

//1.创建context对象
const userContext = React.createContext({
  nickName: "aaaaa",
  level: 99,
});
//函数式组件方法
function ProfileName(props) {
  return (
    <userContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户昵称: {value.nickName} </h2>
            <h2>用户等级: {value.level} </h2>
          </div>
        );
      }}
    </userContext.Consumer>
  );
}
//类组件使用方法
// class ProfileName extends Component {
//   render() {
//       console.log(this.context);
//     return (
//       <div>
//           {/* 4.0展示数据 */}
//         <h2>用户昵称:{this.context.nickName}</h2>
//         <h2>用户等级: {this.context.level} </h2>
//       </div>
//     );
//   }
// }
//3.绑定并获取到数据,只有是类组件时定义
// ProfileName.contextType = userContext;
function Profile(props) {
  return (
    <div>
      <ProfileName />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: "李四",
      level: 99,
    };
  }
  render() {
    return (
      <div>
        我是App组件
        {/* 2.包裹组件 */}
        <userContext.Provider value={this.state}>
          {/* 把父组件放到这个组件内部 */}
          <Profile />
        </userContext.Provider>
      </div>
    );
  }
}
