// 购物车的纯函数
import { ADD_CART, } from '../constant';
// EDIT_CART
//初始化
const initCartList = [];

// 纯函数
const cart = (state = initCartList, action) => {
    const { type, data } = action;
   
    switch (type) {
        case ADD_CART://添加逻辑时
        const { id } = data;
        // findIndex 在数组中查找跟该条记录相同的id的数据下标，找到返回下标 没找到返回-1
        const index = state.findIndex(value => value.id === id)
        if (index === -1) {//新增
            return [...state, data];
        } else {//修改
            state[index].num++;
            return [...state];
        }
        default:
            return state;
    }
}

export default cart;