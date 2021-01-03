import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class TabControl extends Component{
constructor(props) {
    super(props);
    this.state={
        currentIndex:0
    }
}
    render() {
        const {titles} = this.props
        const {currentIndex} =this.state
        return(
            <div className="tab-control">
                {
                    titles.map((item,index)=>{
                        return <div onClick={el=>this.itemClick(index)} className={"tab-item " + (index == currentIndex?"active":"")} key={index}>{item}</div>
                    })
                }
            </div>
        )
    }
    itemClick(val){
        this.setState({
            currentIndex:val
        })
        const {itemClick} = this.props
        itemClick(val)
    }
}

TabControl.propTypes ={
    titles:PropTypes.array.isRequired
}
