import { CHANGE_NAV_TYPE } from '../constant';
// 修改状态的动作
export const changeNavTypeAction = (data) => {
    return { type: CHANGE_NAV_TYPE, data: data }
}