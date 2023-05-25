//引入 常量
import { GET_SWIPER_DATA ,GET_ALLLIST_DATA} from '../constant';
// 引入axios
import axios from 'axios';

// 获取轮播数据的动作
export const fetchSwiperListAction=()=> {
    // 异步
    return dispatch => {
        axios.get('/home/queryMobileHomeInfo?portal=21&version=350&lang=zh-CN&country=CNQX&_areacode=CNQX&beCode=CNQX').then(res => {
            console.log(res);
            // 调用 reducers
            dispatch({
                type: GET_SWIPER_DATA, data: res.data.mobileHomeInfo.adsActivityInfos.AC_LOC_QX_APP_INDEX_SLIDE
            })
        })
    }
}
export const fetchAllListAction=(page)=> {
    // 异步
    return dispatch => {
        axios.get(
            `/getCategoryPrdList?portal=21&version=350&lang=zh-CN&country=CNQX&_areacode=CNQX&beCode=CNQX&cid=98&pageNumber=${page}&pagesize=20&sortField=default&sortType=desc&cidLevel=1`
        ).then(res => {
            // console.log(res);
            // 获取total的数据
            dispatch({
                type: GET_ALLLIST_DATA, data: res.data
            })

        })

    }
}
