//用户相关纯函数
import { GET_USER_DATA } from '../constant';

const initUser = {};
const user = (state = initUser, action) => {
    const { type, data } = action;
    switch (type) {
        case GET_USER_DATA:
            return data;
        default:
            return state;
    }
}
export default user;