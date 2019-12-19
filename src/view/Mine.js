import React,{Component} from 'react'
import Tabbar from '../components/Tabbar'



export default class Mine extends Component{
    // constructor(args){
    //     super(args)
    // }
    render(){
        return (
            <div id="mine">
                我的
                <Tabbar navIndex="2"/>
            </div>
        )
    }
}