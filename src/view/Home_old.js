// 首先
import React,{Component} from 'react'
// 引入css
import "../assets/css/home.css"
import Box from '../components/Box' 

// react的组件首字母都要大写，不然会报错
export default class Home extends Component{
    // 继承组件的构造函数
    constructor(args){
        super(args)
        // 向 class 组件中添加局部的 state 
        // this.state相当于vue里的data
        this.state = {
            msg:'hello world!',
            box:'box',
            color:['red','orange','yellow','green','blue'],
            text:['红楼梦','西游记',"三国演义","水浒传"],
            num:1
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

    changeColor(){
        // state里面的对象不能直接用下列的赋值的方法改变，要先声明一个变量（let 或 var），再在setState里将变量赋给state的对象
        // this.state.msg = '你瞅啥'
        this.setState({
            msg:'你瞅啥'
        })
        this.abc = ++this.abc % this.state.color.length;
    }
    inputChange(e){
        
        this.setState({
            msg:e.target.value
        })
    }

    // 渲染一个DOM，等效于vue中的template
    render(){
        var div1 = '';
        if(this.state.num > 60){
            div1 = <div><span style={{color:'#333'}}>合格</span></div>
        }else{
            div1 = <div><span>不合格</span></div>
        }
        return (
            <div id="home">
                <h1>
                    {this.state.msg}
                </h1>

                <input type="text" value={this.state.msg} onChange={this.inputChange.bind(this)}/>

                <div className={this.state.box} style={{'background':this.state.color[this.abc]}} onClick={this.changeColor.bind(this)}>
                    {/* bind绑定this对象（this代表Home实例组件） */}
                    {/* 记得在style里的绑定属性加花括号 */}
                    
                </div>
                <Box title="盒子" onabcd={this.changeColor.bind(this)}/>
                <ul>
                    {
                        // map和forEach的区别在于map可以return，用map return的item是个数组，forEach没有返回值，for循环里return会终止循环
                        this.state.text.map(function(item,index){
                        return <li key={index}>{item}</li>
                        })
                    }
                </ul>
                {div1}
            </div>
        )
    }
}