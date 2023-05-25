// import React, { Component } from 'react'
// import Swiper from 'swiper'
// import qinxuan from '../../img/1.jpg'
import React, { Component ,useState,useEffect} from 'react'
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay,} from 'swiper';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import {changeNavTypeAction} from '../../store/action/app'
import {fetchSwiperListAction} from '../../store/action/rydata'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swiperee=(props)=>{

  // const [swiperList,setswiperList]=useState([])
  const [swiperBg,setswiperBg]=useState(true)
  const [myswiper,setmyswiper]=useState(null)
  const {changeNavTypeAction,fetchSwiperListAction,swiperList} =props
  useEffect(
    ()=>{
      window.onscroll = () => {
                  // console.log("滚动事件触发了", this.state.myswiper);
                  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                  if (scrollTop > 10) {
                      // this.setState({ swiperBg: false })
                      setswiperBg(false)
                      // myswiper.autoplay.stop();
                  } else {
                      // this.setState({ swiperBg: true })
                      setswiperBg(true)
                      // this.state.myswiper.autoplay.start();

                  }
                  if(scrollTop > 200){
                    changeNavTypeAction(false)
                  }else{
                    changeNavTypeAction(true)
                  }
                  // console.log(this.state.swiperBg)
              }
              fetchSwiperListAction()
              return ()=>{
                window.onscroll = null;
                changeNavTypeAction(true)
              }
          }
    
  ,[])


  return <div className='swiper1'>
      <div className='swi-nav'><div className='t1'>推荐</div><div className='t2'>智能家居</div></div>
      
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      // navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      direction= "vertical"
      loop
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => setmyswiper(swiper)}
      // onSlideChange={() => console.log('slide change')}
      className='swi-con'
    >
   
      {
        swiperList.map(
          (item,index)=><SwiperSlide className='swi-image' key={index}> <img src={item.adsPicPath} alt="" /></SwiperSlide>
        )
      }
      
    </Swiper>
        </div>

}


//  class Swiperee extends Component{
//     state={
//       swiperList: [],
//     swiperBg: true,  //true 黄色  false 黑
//     myswiper: null// 保存当前swiper对象
//     }

//     componentDidMount() {
//       // 绑定滚动事件
//       window.onscroll = () => {
//           // console.log("滚动事件触发了", this.state.myswiper);
//           let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//           if (scrollTop > 10) {
//               this.setState({ swiperBg: false })
//               this.state.myswiper.autoplay.stop();
//           } else {
//               this.setState({ swiperBg: true })
//               // this.state.myswiper.autoplay.start();
//           }
//           if(scrollTop > 200){
//             this.props.changeNavTypeAction(false)
//           }else{
//             this.props.changeNavTypeAction(true)
//           }
//           // console.log(this.state.swiperBg)
//       }
//       this.props.fetchSwiperListAction()
//   }
//   // 优化 停止轮播、解除事件绑定
//   componentWillUnmount() {
//       // this.state.myswiper.autoplay.stop();
//       window.onscroll = null;
//       this.props.changeNavTypeAction(true)
//   }

//     render() {
//       // let { swiperBg } = this.state
//         let {swiperList} =this.props
//         return <div className='swiper1'>
//           <div className='swi-nav'><div className='t1'>推荐</div><div className='t2'>智能家居</div></div>
      
//       <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
//       // navigation
//       autoplay={{
//         delay: 5000,
//         disableOnInteraction: false,
//       }}
//       direction= "vertical"
//       loop
//       pagination={{ clickable: true }}
//       // scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => this.setState({ myswiper: swiper })}
//       // onSlideChange={() => console.log('slide change')}
//       className='swi-con'
//     >
//       {/* <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide> */}
//       {
//         swiperList.map(
//           (item,index)=><SwiperSlide className='swi-image' key={index}> <img src={item.adsPicPath} alt="" /></SwiperSlide>
//         )
//       }
      
//     </Swiper>
//         </div>
//       }
// }
export default connect(
  state=>({type:state.app.type,swiperList: state.rydata.swiperList || []})
  ,{changeNavTypeAction,fetchSwiperListAction})(Swiperee)