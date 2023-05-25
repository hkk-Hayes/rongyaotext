// 数据的纯函数
import { GET_SWIPER_DATA ,GET_ALLLIST_DATA} from '../constant';
const initData = {};//数据的初始值
const rydata = (state = initData, action) => {
    const { type, data } = action;
    switch (type) {
        case GET_SWIPER_DATA:
            return Object.assign({}, state, { swiperList: data });
        case GET_ALLLIST_DATA:
            return Object.assign({}, state, { allList: data })
        default:
            return state;
    }
}

export default rydata;