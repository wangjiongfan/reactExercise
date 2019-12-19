import React,{Component} from 'react'

export default class Home extends Component{
    // constructor构造函数
    constructor(props){
        super(props);
        this.state={

        }
    }
    onchanges(){
        this.props.onabcd();
    }
    render(){
        return (
            <div style={{color:'#333'}} onClick={this.onchanges.bind(this)}>
                {this.props.title}
                {this.props.img}
            </div>
        )
    }
}