import React,{Component} from 'react'

function ProfileName(props) {
    return (
        <div>
            <h2>用户昵称:{props.nickName}</h2>
            <h2>用户等级: {props.level}</h2>
        </div>
    )
}
//
function Profile (props){
    return (
    <div>
        {/* <ProfileName nickName = {props.nickName} level = {props.level}/> */}
        {props.nickName} {props.level}
        {/* 属性展开 */}
        <ProfileName {...props}/>
       
       
        <ul>
            <li>设置1</li>
            <li>设置2</li>
            <li>设置3</li>
            <li>设置4</li>
        </ul>
    </div>
    )
}

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nickName:'李四',
            level:99
        }
    }
    render() {
        const {nickName,level} = this.state
        return(
            <div>
                我是App组件
                <h2>是我 {nickName} </h2>
                <Profile nickName={nickName} level= {level} />
            </div>
        )
    }
}
