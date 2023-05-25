// import React, { Component } from 'react'
import { NavLink, useLocation } from 'react-router-dom';


// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Footer =(props)=>{
   const goto=(e)=>{
      
      document.documentElement.scrollTop = document.body.scrollTop=0

    }

     // useLocation 相当于 this.props.location
     const { pathname } = useLocation();
        const pathArr = ['/', '/category', '/cart', '/me', '/alllist']
        const {type}=props
      return(<>{
        pathArr.indexOf(pathname) !== -1 ? <div className="fo">
      {type?<NavLink to="/"  exact='true' activestyle={{fontWeight:'bold',color:'red'}}><span className=" iconfont icon-31shouyexuanzhong"></span>
        <p>首页</p>
      </NavLink>
      :<NavLink to="/" onClick={goto} exact='true' activestyle={{fontWeight:'bold',color:'red'}}><span className=" iconfont icon-fanhuidingbu"></span>
      <p>返回顶部</p>
    </NavLink>
    }
      <NavLink to="/alllist"activestyle={{fontWeight:'bold',color:'red'}}><span className="iconfont icon-gouwudai"></span>
        <p>全部商品</p>
      </NavLink>
      <NavLink to="/cart" activestyle={{fontWeight:'bold',color:'red'}}>
        <span className="iconfont icon-gouwuche"></span>
        <p>购物车</p>
      </NavLink>
      <NavLink to="/category" activestyle={{fontWeight:'bold',color:'red'}}>
        <span className="iconfont icon-fenlei"></span>
        <p>分类</p>
      </NavLink>
      <NavLink to="/login" activestyle={{fontWeight:'bold',color:'red'}}>
        <span className="iconfont icon-yonghu"></span>
        <p>未登录</p>
      </NavLink>
    </div>:''
      }</>
    )
    
  }
  export default connect(
    state=>({type:state.app.type})
  )(Footer)