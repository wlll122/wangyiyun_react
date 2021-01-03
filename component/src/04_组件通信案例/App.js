import React,{Component} from 'react'
import TabControl from './TabControl'
export default class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            //定义可能会变化的数据

            currentTitle:"精选"
        }
    }
    render() {
        const {currentTitle} = this.state
        return(
            <div>
                <TabControl itemClick={index => this.itemClick(index)} titles={['新款','精选','流行']} />
                <h2>
                    {currentTitle}
                </h2>
            </div>
        )
    }
    itemClick(index){
        console.log(index)
        const titles=['新款','精选','流行']
        this.setState({
            currentTitle:titles[index]
        })
    }
}
