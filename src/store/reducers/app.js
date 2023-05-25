// 购物车的纯函数
import { CHANGE_NAV_TYPE } from '../constant';

// EDIT_CART
//初始化
const initApp = { type: true };

// 纯函数
const app = (state = initApp, action) => {
    const { type, data } = action;
    // console.log(data);
    switch (type) {
        case CHANGE_NAV_TYPE://修改状态
            return { type: data };
        default:
            return state;
    }
}
export default app