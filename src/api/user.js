// 和登录相关的api
import request from '../utils/request';
//获取验证码
export const getSmsCode = (phone) => {
    return request({
        url: "/user/getSmsCode?phone=" + phone,
        method: "get"
    })
}
// 登录
export const login = (phone, smsCode) => {
    return request({
        url: "/user/login",
        method: "post",
        data: { phone: phone, smsCode: smsCode }
    })
}