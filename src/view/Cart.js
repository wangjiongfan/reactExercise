//{Component}表示将该页面视为组件运行
import React,{Component} from 'react'
import Tabbar from '../components/Tabbar'

// 引入css
import "../assets/css/home.css"



export default class Cart extends Component{
    // constructor(args){
    //     super(args)
    // }

    // 渲染一个DOM，等效于vue中的template
    render(){
        return (
            <div id="cart">
                购物车
                <Tabbar navIndex="1"/>
            </div>
        )
    }
}