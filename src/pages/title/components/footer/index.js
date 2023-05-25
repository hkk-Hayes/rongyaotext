// import React, { Component } from 'react'
import './index.scss'


const MyHeaderli=(props)=>{
    const {addcart}=props
   const footadd=()=>{
        addcart()
    }
    return (<div className='myfooter'>
    <div className="footer flex1">
        <div className='item'>
            <i className='iconfont icon-kefu'></i>
            <div>客服</div>
        </div>
        <div className='item'>
            <i className='iconfont icon-shoucang'></i>
            <div>收藏</div>
        </div>
        <div className='item'>
            <i className='iconfont icon-gouwuche'></i>
            <div>购物车</div>
        </div>
        <button className='gocart' onClick={footadd}>加入购物车</button>
        <button className='buy'>立即购买</button>
    </div>
</div>

)
}



export default MyHeaderli