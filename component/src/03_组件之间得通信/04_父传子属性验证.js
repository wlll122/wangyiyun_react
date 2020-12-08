import React,{Component} from 'react'
import PropType from 'prop-types'
function ChildCpn(props) {
    const {name,age} = props;
    return(
        <div>
            <h2>
                姓名:{name}
                年龄:{age}
            </h2>
            <ul>
                {
                    name.map((item,index)=>{
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>

    )
}
// 传入默认值
ChildCpn.defaultProps = {
    age:1212
}
//验证,类型的设定
ChildCpn.propTypes = {
    name:PropType.array,
    //必须传递
    age:PropType.number.isRequired
}


export default class App extends Component{

    render() {
        console.log(undefined + 110)//返回NAN
        return(
            <div>
                我是App组件
                <ChildCpn name={[1, 2, 3, 4]} age={19} />
            </div>
        )
    }
}

