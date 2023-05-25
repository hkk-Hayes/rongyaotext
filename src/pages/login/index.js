// import React, { Component } from 'react'
import { useEffect, useState, useRef, useCallback } from 'react';
import { getSmsCode, login } from '../../api/user';
import { loginAction } from '../../store/action/user';
import { connect } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import debounce from 'lodash/debounce';
const Login=(props)=>{
    const [phone, setPhone] = useState("");
    const [smsCode, setSmsCode] = useState("");
    const [btnText, setBtnText] = useState("获取验证码");
    const [disabled, setDisabled] = useState(true);
    const { loginAction } = props;
    const navigate = useNavigate();
    const phoneRef = useRef();
    const smsRef = useRef();
    // 设置定时器的初始值
    // let timer = null;
    let timer = useRef(null);

    useEffect(() => {
        // 组件卸载时清除定时器
        return () => {
            timer.current = null;
        }
    }, []);

    // 登录函数
    const loginFn = () => {
        console.log("登录触发了");
        if (phone !== "" && smsCode !== "") {
            login(phone, smsCode).then(res => {
                console.log(res);
                if (res.data.code === 666) {
                    // 将信息保存到 redux
                    console.log(res);
                    loginAction(res.data.result);
                    //页面跳转
                    navigate('/me');
                }
            })
        }
    }
    // 接收input的值
    const changeInput = (type, val) => {
        if (type === 'phone') {
            // console.log(val)
            setPhone(phoneRef.current.value);
            console.log(phoneRef.current.value);

            if (phoneRef.current.value !== "") {
                // console.log(1);
                setDisabled(false);
            } else {
                // console.log(2);
                setDisabled(true);
            }
        } else {
            console.log(smsRef.current.value);
            setSmsCode(smsRef.current.value);
        }
    }
    const layset=useCallback(debounce(type=>changeInput(type),200),[changeInput])
    // 获取验证码
    const getSmsCodeFn = () => {
        if (phone !== "") {
            // 调用获取验证码的api
            getSmsCode(phone).then(res => {
                console.log(res);
                if (res.data.code === 666) {
                    let num = 10;
                    setBtnText(`重新获取(${num})`);
                    setDisabled(true);
                    timer.current = setInterval(() => {
                        num--;
                        setBtnText(`重新获取(${num})`);
                        if (num <= 0) {
                            clearInterval(timer.current);
                            setBtnText('重新获取');
                            setDisabled(false);
                        }
                    }, 1000);
                }
            })
        }
    }


    return<>
        <div
        
        >
            <div name='phone' >
                <input type="number" placeholder='请输入手机号' onChange={(val) => { layset('phone', val) }}
                    ref={phoneRef}
                />
            </div>
            <div  >
                <button disabled={disabled}  onClick={getSmsCodeFn}>{btnText}</button>
            </div>

            <div name='smsCode' >
                <input type="number" placeholder='请输入验证码' onChange={(val) => { layset('smsCode', val) }}  ref={smsRef}/>
            </div>
            <div name='smsCode' >
            <button disabled={disabled}  onClick={loginFn}>登录</button>
            </div>
        </div>
    </>
}

export default connect(state => ({ user: state.user }), { loginAction })(Login);