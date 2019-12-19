
// 该文件为入口文件



import React from 'react';
// import logo from './logo.svg';
import './assets/css/App.css';
import {BrowserRouter,Route} from "react-router-dom";
// import HomeOld from './view/Home_old';
import Mine from './view/Mine';
import Cart from './view/Cart';
import Todolist from './view/Todolist';
import Home from './view/Home';
import "./assets/css/font-awesome.css";


function App() {
  return (
    <div className="App">
      {/* react是用以下方式确定routes */}
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/todolist" exact component={Todolist}></Route>
        {/* <Route path="/old" exact component={HomeOld}></Route> */}
        <Route path="/cart" exact component={Cart}></Route>

        <Route path="/mine" exact component={Mine}></Route>
      </BrowserRouter>
    </div>
  );
}

// 模块化导出
export default App;
