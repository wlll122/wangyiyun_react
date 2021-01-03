import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     movies:['星际穿越','盗梦空间','猩球崛起']
    };
  }

  render() {
    return (
      <div>
        App
        <ul>
            {
                this.state.movies.map((el,index)=>{
                    return(
                        // 添加唯一的key来进行性能优化
                        <li key={el}>{el}</li>
                    )
                })
            }
        </ul>
        <button onClick={el=>{this.addMovie()}}>添加电影</button>
      </div>
    );
  }

  addMovie() {
    this.setState({
        movies:[...this.state.movies,'大话西游']
    })
}
}
