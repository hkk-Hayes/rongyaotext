import React, { Component } from 'react'
import Carthead from "./cart_head.js";
import Cartcon from './cartcon'
import Maylike from './maylike.js';
import "./cart.scss"
import axios from 'axios';
export default class Cart extends Component {
   constructor(){
    super()
    this.state = {
      list: [],
      listselet:[]
    }
   }

      componentDidMount() {
        axios.post('/recommend/getRecommend', { "portal": 21, "version": 350, "lang": "zh-CN", "country": "CNQX", "_areacode": "CNQX", "beCode": "CNQX", "isRecommended": false, "pageSize": 20, "tid": "82da3ba5318d034ba339fb63e3c312d6", "pageNum": 1, "sceneId": "1,3,1,1801" }).then(res => {
          // console.log(res);
          this.setState({
            list: res.data.productList
          })
        })
    }
     listadd=(data)=>{
        // console.log(111,data)
       let datalist=[...this.state.listselet,data]
        this.setState({
          listselet:datalist
        })
      }
    render() {
  
        return (
            <div>
                <Carthead list={this.state.list} listselet={this.state.listselet}></Carthead>
                <Cartcon/>
                <Maylike list={this.state.list} listadd={this.listadd}></Maylike>
            </div>
        )
    }
}
