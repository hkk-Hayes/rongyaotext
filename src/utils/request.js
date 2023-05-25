/* 
baseURL
过期时间
请求拦截
响应拦截
*/

import axios from 'axios';
import store from '../store';
// import { Toast } from 'antd-mobile';

const service = axios.create({
    baseURL: "http://81.71.65.4:3003/",//"http://localhost:3006/",
    timeout: 36000
})
// 请求拦截
service.interceptors.request.use(
    config => {
        const token = "";//store.getState('user').user.token || "";
        if (!(token === undefined || token === "")) {
            config.headers['user-token'] = token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)

// 响应拦截
service.interceptors.response.use(
    res => {
        if (res.data.code !== 666) {//正确返回
            // Toast.show({
            //     icon: "fail",
            //     content: res.data.msg
            // })
            console.log(res)
        }
        return res;
    },
    err => {
        return Promise.reject(err);
    }
)

export default service;