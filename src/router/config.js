import React from 'react';

// import Main from '../pages/main';
// import AllList from '../pages/alllist';
// import Category from '../pages/category';
// import Login from '../pages/login';
// import Me from '../pages/me';
// import SlideExample from '../pages/page404';
// import Cart from '../pages/cart';
// import Title from '../pages/title'

const Main = React.lazy(() => import('../pages/main'));
const AllList = React.lazy(() => import('../pages/alllist'));
const Category = React.lazy(() => import('../pages/category'));
const Cart = React.lazy(() => import('../pages/cart'));
const Title = React.lazy(() => import('../pages/title'));
const Login = React.lazy(() => import('../pages/login'));
const Me = React.lazy(() => import('../pages/me'));
const routes = [
    { path: '/', element: <Main />, auth: false, name: '/' },
    { path: '/alllist', element: <AllList />, auth: false, name: '/alllist' },
    { path: '/cart', element: <Cart />, auth: true, name: '/cart' },
    { path: '/category', element: <Category />, auth: false, name: '/category' },
    { path: '/me', element: <Me />, auth: true, name: '/me' },
    { path: '/item/:id', element: <Title />, auth: false, name: '/Title' },
    { path: '/login', element: <Login />, auth: false, name: '/login' },
];
export default routes;
