import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
// import Swiper2 from './components/swiper';
import PriceItem from './components/price'
// import MyHeaderli from './components/footer'
import { connect } from 'react-redux';
import {ADD_CARTaction} from '../../store/action/cartadd.js'

const Title=(props)=>{
   
    const [swiperimg, setswiperimg] = useState({});
    // const [titdata, settitdata] = useState({});
    // const [id, setid] = useState('');
    const { ADD_CARTaction} =props
    const params=useParams()
    console.log(params)
    const {id}=params
    const  navigate=useNavigate()
    useEffect(
        ()=>{ 
            
            axios.get(`/queryPrdDisplayDetailInfo?portal=21&version=350&lang=zh-CN&country=CNQX&_areacode=CNQX&beCode=CNQX&item_id=${id}&sbomCode=8086110027003&productId=${id}`).then(res => {
                console.log(res);
                // this.setState({
                //     swiperimg: res.data
                    
                // })
                setswiperimg(res.data)
            })
        }
    ,[id])

   const addcart=()=>{
        console.log(111)
        const { disPrdId, name } = swiperimg;
        // console.log(this.state.swiperimg.sbomList[0])
        const {photoPath,photoName}=swiperimg.sbomList[0]
        let addobj={ "id": disPrdId, "name": name,  "num": 1,price: swiperimg.sbomList[0].price || 0, 
        pic: `https://hshop.honorfile.com/pimages/cnqx/${photoPath}800_800_${photoName}`
        }
        // this.setState({titdata:addobj})
        // settitdata(addobj)
       ADD_CARTaction(addobj)
       navigate('/cart');
    }
    return<div>
    {/* <Swiper2 /> */}
    <PriceItem />
    {/* <MyHeaderli addcart={addcart}/> */}
    <button onClick={addcart}>添加购物车</button>
</div>
}

export default connect(state => {
    return { cart: state.cart }
}, { ADD_CARTaction })(Title)