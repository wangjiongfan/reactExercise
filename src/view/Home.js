// 首先
import React,{Component} from 'react'
import Tabbar from '../components/Tabbar'
import Searchbar from '../components/Searchbar'
import swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'

// react的组件首字母都要大写，不然会报错
export default class Home extends Component{
    // 继承组件的构造函数
    constructor(args){
        super(args)
        // 向 class 组件中添加局部的 state 
        // this.state相当于vue里的data
        this.state = {
           bannerlist:[require('../assets/img/002.jpg'),require('../assets/img/003.jpg'),require('../assets/img/004.jpg'),require('../assets/img/005.jpg')],
           productList:[],
           dats:[
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
           ],
           newArr:[]
        }
        this.mySwiper = null;
    }

    componentWillMount(){
        axios.get('http://leeyiqing.site/product.php')//get只是请求方式
        .then((e) =>{
            console.log(e)
            this.setState({
                productList:e.data
            })
        })
        console.log('开始渲染')
    }
    componentDidMount(){
        var mySwiper = new swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
                delay: 1000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            

            grabCursor: true,//鼠标光标
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
        })
        mySwiper.el.onmouseover = function(){ //鼠标放上暂停轮播 
            mySwiper.autoplay.stop();    
        }    
        mySwiper.el.onmouseleave = function(){      
            mySwiper.autoplay.start();    
        }


        let arr = this.state.dats;
        let newArr = [];
        let category = arr[0].category;
        let obj = {category:category,product:[]};
        //循环遍历原始数组
        arr.forEach((item,index) =>{
            //判断是否为相同的分类
            //如果是相同分类直接添加到该分类对象中
            //如果不是相同分类，添加新的分类对象
            if(category === item.category){
                obj.product.push(item)
            }else{
                newArr.push(obj)
                category = item.category
                obj = {category:category,product:[]}
                obj.product.push(item)
            }
            //将最后一个分类对象添加到新数组
            if(index === arr.length-1){
                newArr.push(obj)
            }
        })
        this.setState({
            newArr:newArr
        })
        
       
        console.log('渲染完成时')
    }
    componentWillUnmount(){
        console.log('开始卸载')
    }

    
    // 渲染一个DOM，等效于vue中的template
    render(){
        let lastCategory = null;
        let rows = [];
        //遍历商品数列数组
        // eslint-disable-next-line
        this.state.dats.map((item,index) => {
            let red = '';
            if(!item.stocked){
                red = 'red';
            }
            //如果分类不相同。添加新分类行
            if(item.category !== lastCategory){
                rows.push(
                    <tr key={index}>
                        <td className="name">{item.category}</td>
                    </tr>
                )
            }
            //默认追加商品行
            rows.push(
                <tr key={index}>
                    <td className={"name " + red}>{item.name}</td>
                    <td className="price">{item.price}</td>
                </tr>
            )
            lastCategory = item.category
        })
        return (
            <div>
                <Searchbar></Searchbar>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        {
                            this.state.bannerlist.map((item,index) => {
                                // eslint-disable-next-line
                                return <div class="swiper-slide" key={index}><img width='100%' src={item}></img></div>
                            })
                        }
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div class="swiper-pagination"></div>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                            {rows}
                        </tbody>
                    </table>
                </div>
                {/* <div>
                    {
                        this.state.productList.map((item,index)=>{
                            return (
                                <div>
                                    <img src={item.img}></img>
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div> */}
                <Tabbar navIndex="0"/>
            </div>
        
        )
            
        
    }
}