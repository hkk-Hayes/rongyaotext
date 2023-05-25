// 路由
import { React ,Suspense} from 'react';
// import React from 'react'
// import { HashRouter as Router, Route ,Routes} from 'react-router-dom';
import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom';
import Footer from './footer.js'
// 引入页面
// import Main from '../pages/main';
// import AllList from '../pages/alllist';
// import Category from '../pages/category';
// import Login from '../pages/login';
// import Me from '../pages/me';
// import SlideExample from '../pages/page404';
// import Cart from '../pages/cart';
// import Title from '../pages/title'
// import { withRouter } from 'react-router-dom';
// 写路由表
import { connect } from 'react-redux';
import routes from './config';
const App = (props) => {
    //路由守卫
    function guardRoutes(routes) {
        console.log(routes);
        const list = [];//保存整理好的路由表
        console.log( props.token)
        const isLogin = props.token !== "" ? true : false;//登录状态 true 表示已经登录了
        console.log(isLogin)
        routes.forEach(route => {
            const obj = { ...route };//一条路由信息
            if (obj.redirect) {
                obj.element = <Navigate to="/login" replace={true} />
            }
            if (!isLogin) {//没登录
                if (obj.auth) {//该页有守卫
                    console.log(obj.auth)
                    obj.element = <Navigate to="/login" replace={true} />
                }
            }
            list.push(obj);
        })
        return list;
    }
    const GetRoutes = () => useRoutes(guardRoutes(routes));
    return (
        <BrowserRouter>
            <Footer />
            <Suspense fallback={<div> Loading... </div>}>
                {/* 已经配置好守卫的路由路径 */}
                <GetRoutes />
            </Suspense>
        </BrowserRouter>
    )
}
export default connect(state => ({ token: state.user.token || "" }))(App);
