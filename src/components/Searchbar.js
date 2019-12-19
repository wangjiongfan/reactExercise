import React,{Component} from 'react'
import '../assets/css/searchbar.css'
// eslint-disable-next-line
import { Route,Link } from 'react-router-dom'
export default class Tabbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return (
            <div id="Seachbar">
                <span className="left"><i class="fa fa-bars" aria-hidden="true"></i></span>
                <span className="seach">
                    <span className='box clear'>
                        <span className="icon">图</span>
                        <span className="second">|</span>
                        <input type='text'/>
                    </span>
                </span>
                <span className="right"><i class="fa fa-plus" aria-hidden="true"></i></span>
            </div>
        )
    }
}