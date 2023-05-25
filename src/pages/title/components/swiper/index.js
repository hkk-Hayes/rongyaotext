// import React, { Component } from 'react'
import { Swiper } from 'antd-mobile'
// import img1 from '../../../../img/11.png'
// import img2 from '../../../../img/12.png'
// import img3 from '../../../../img/13.png'
// import img4 from '../../../../img/14.png'
import './index.scss'


const Swiper2=()=>{
   const img=['https://hshop.honorfile.com/pimages/cnqx/product/6959495818116/group/800_800_EEFBDDDA0DA6EA322BE3525743AA7522F6F491EE26D6B2C9.jpg',
            'https://hshop.honorfile.com/pimages/cnqx/product/6959495818116/group/800_800_EEFBDDDA0DA6EA322BE3525743AA7522F6F491EE26D6B2C9.jpg',
            'https://hshop.honorfile.com/pimages/cnqx/product/6959495818116/group/800_800_EEFBDDDA0DA6EA322BE3525743AA7522F6F491EE26D6B2C9.jpg',
            'https://hshop.honorfile.com/pimages/cnqx/product/6959495818116/group/800_800_EEFBDDDA0DA6EA322BE3525743AA7522F6F491EE26D6B2C9.jpg'   
    ]
    return (
        <div className='image-swiper'>
            <Swiper autoplay loop >
                {img.map((item, index) => <Swiper.Item key={index}>
                    <img src={item} alt="" />
                </Swiper.Item>
                )}
            </Swiper>

        </div>
    )
}
export default Swiper2