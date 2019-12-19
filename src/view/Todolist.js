// 首先
import React,{Component} from 'react'
// 引入css
import "../assets/css/todolist.css"
// import Box from '../components/Box' 

// react的组件首字母都要大写，不然会报错
export default class Home extends Component{
    // 继承组件的构造函数
    constructor(args){
        super(args)
        // 向 class 组件中添加局部的 state 
        // this.state相当于vue里的data
        this.state = {
            todoList:[],
            del:'',
            obj:{
                inputval:'',
                delate:false,
                cn:''
            }
        }
        this.abc = 0
    }

    componentWillMount(){
        console.log('开始渲染')
    }
    componentDidMount(){
        console.log('渲染完成时')
    }
    componentWillUnmount(){
        console.log('开始卸载')
    }

    inputChange(e){
        this.setState({
            obj:{
                inputval:e.target.value,
                delate:false,
                cn:''
            }
        })
    }
    addList(){
        let arr = this.state.todoList;
        arr.push(this.state.obj);
        this.setState({
            todoList:arr,
            obj:{
                inputval:'',
                delate:false,
                cn:''
            },
            
        })
        console.log(this.state.todoList)
        // this.setState({
        //     todoList:[...this.state.todoList,this.state.inputval]//解构赋值法
        // })
    }
    delList(){
        // eslint-disable-next-line
        console.log();
        console.log(this.state.obj.delate)
        // eslint-disable-next-line
        // this.state.obj.delate = !this.state.obj.delate
        // eslint-disable-next-line
        if(!this.state.obj.delate){
            console.log(1)
            // eslint-disable-next-line
            // this.setState.obj.cn = 'del'
            this.setState({
                obj:{
                    delate:true,
                    cn:'del'
                }
            })
        }else{
            // eslint-disable-next-line
            console.log(2)

            this.setState({
                obj:{
                    delate:false,
                    cn:''
                }
            })
        }
        // console.log(this.state.todolist.cn)
    }

    // 渲染一个DOM，等效于vue中的template
    render(){
        return (
            <div>
                <input type="text" style={{'marginRight':'20px'}} value={this.state.obj.inputval} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addList.bind(this)}>添加</button>
                <ul>
                    {
                        this.state.todoList.map((item,index) =>{
                            console.log(item);
                            return <li className={item.cn} onClick={this.delList.bind(this)}>{item.inputval}</li>
                        })
                    }
                </ul>
            </div>
        
        )
            
        
    }
}