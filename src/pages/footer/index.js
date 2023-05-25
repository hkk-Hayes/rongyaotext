





import React, { Component } from 'react'


export default  class Footer extends Component {
      render() {
        return <div className="fo">
          <a href="#" className="ac"><span className=" iconfont icon-31shouyexuanzhong"></span>
            <p>首页</p>
          </a>
          <a href="#"><span className="iconfont icon-gouwudai"></span>
            <p>全部商品</p>
          </a>
          <a href="#">
            <span className="iconfont icon-gouwuche"></span>
            <p>购物车</p>
          </a>
          <a href="#">
            <span className="iconfont icon-fenlei"></span>
            <p>分类</p>
          </a>
          <a href="#">
            <span className="iconfont icon-yonghu"></span>
            <p>未登录</p>
          </a>
        </div>
      }
    }