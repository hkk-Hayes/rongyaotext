import axios from "axios"

import React, { Component ,useState,useEffect} from 'react'

import Swiperee from './swiper'
import Contens from './contens'//下面那个大手机推荐模块
import TitleNav from './titlenav'//小图标推荐栏
import Tolike from './tolike'//荣耀亲选

const Con=()=>{
  const [list,setlist]=useState([])
  const [navlist,setnavlist]=useState([])
  const [HomeRegionInfo,setHomeRegionInfo]=useState([])

  useEffect(
    ()=>{
      axios.post('/recommend/getRecommend', { "portal": 21, "version": 350, "lang": "zh-CN", "country": "CNQX", "_areacode": "CNQX", "beCode": "CNQX", "isRecommended": false, "pageSize": 20, "tid": "82da3ba5318d034ba339fb63e3c312d6", "pageNum": 1, "sceneId": "1,3,1,1801" }).then(res => {
        // console.log(res);
        // this.setState({
        //   list: res.data.productList
        // })
        setlist(res.data.productList)
      })
       axios.get('/home/queryMobileHomeInfo?portal=21&version=350&lang=zh-CN&country=CNQX&_areacode=CNQX&beCode=CNQX').then(res => {
          // console.log(res);
          // this.setState({
          //   navlist: res.data.mobileHomeInfo.diamondInfo.squareIconList
  
          // })
          setnavlist(res.data.mobileHomeInfo.diamondInfo.squareIconList)
        })
        axios.get('/queryHomeRegionInfo?portal=21&version=350&lang=zh-CN&country=CNQX&_areacode=CNQX&beCode=CNQX')
        .then(res=>{
     
          setHomeRegionInfo(res.data.homeRegionInfos)
        })
    }
  ,[])


  return <div>
  <Swiperee />
 <TitleNav navlist={navlist} />
<Tolike HomeRegionInfo={HomeRegionInfo}></Tolike>
<Contens list={list} />
</div>
}


export default Con






// export default  class Con extends Component {
//   state = {
//     list: [],
//     navlist: [],
//     HomeRegionInfo:[]
//   }
//   componentDidMount() {
//     axios.post('/recommend/getRecommend', { "portal": 21, "version": 350, "lang": "zh-CN", "country": "CNQX", "_areacode": "CNQX", "beCode": "CNQX", "isRecommended": false, "pageSize": 20, "tid": "82da3ba5318d034ba339fb63e3c312d6", "pageNum": 1, "sceneId": "1,3,1,1801" }).then(res => {
//       // console.log(res);
//       this.setState({
//         list: res.data.productList
//       })
//     })
//      axios.get('/home/queryMobileHomeInfo?portal=21&version=350&lang=zh-CN&country=CNQX&_areacode=CNQX&beCode=CNQX').then(res => {
//         // console.log(res);
//         this.setState({
//           navlist: res.data.mobileHomeInfo.diamondInfo.squareIconList

//         })
//       })
//       axios.get('/queryHomeRegionInfo?portal=21&version=350&lang=zh-CN&country=CNQX&_areacode=CNQX&beCode=CNQX')
//       .then(res=>{
//         // console.log(res);
//         this.setState({
//           HomeRegionInfo: res.data.homeRegionInfos

//         })
//       })
//   }
//   render() {
//     const { list, navlist ,HomeRegionInfo} = this.state
//     return <div>
//         <Swiperee />
//        <TitleNav navlist={navlist} />
//       <Tolike HomeRegionInfo={HomeRegionInfo}></Tolike>
//       <Contens list={list} />
//     </div>
//   }
// }
