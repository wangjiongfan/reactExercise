import React,{Component} from 'react'
import '../assets/css/tabbar.css'
// eslint-disable-next-line
import { Route,Link } from 'react-router-dom'
export default class Tabbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu:[
                {
                    title:'首页',
                    path:'/'
                },
                {
                    title:'购物车',
                    path:'/cart'
                },
                {
                    title:'我的',
                    path:'/mine'
                },
            ],
            navIndex:0
        }
    }
    render(){
        return (
            <div id="tabbar">
                <ul className="clear">
                    {
                        this.state.menu.map((item,index) => {
                            //要用props处理组件传入的值（this.props.navIndex）
                            let red = this.props.navIndex == index ? 'red' : ''; //eslint-disable-line
                        return <li className='left ' key={index} >
                                <Link to={item.path} className={red}>
                                    {item.title}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}