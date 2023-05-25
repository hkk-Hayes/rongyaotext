import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './alllist.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllListAction } from '../../store/action/rydata';

const AllList = ({ allList, fetchAllListAction }) => {
  const [listArr, setListArr] = useState([]);
  const [end, setEnd] = useState(false);
  const [total, setTotal] = useState(0);
  const pageRef = useRef(1);
  const totalRef = useRef(0);
  const timerRef = useRef(null);
  const lazyRef = useRef(true);//用来控制懒加载是否获取数据的,true的时候不触发

  useEffect(() => {
    (async () => {
      await fetchAllListAction("1");
      setTotal(allList.totalPage);
      totalRef.current = allList.totalPage;
      moreData();
      // 调用触底的函数
      onScrollFn();

      return () => {
        clearTimeout(timerRef.current);
        window.removeEventListener('scroll', onScrollFn);
      };
    })();
  }, [fetchAllListAction, allList.totalPage]);

  const moreData = () => {
    if (totalRef.current >= pageRef.current) {
      axios
        .get(
          `/getCategoryPrdList?portal=21&version=350&lang=zh-CN&country=CNQX&_areacode=CNQX&beCode=CNQX&cid=98&pageNumber=${pageRef.current}&pagesize=20&sortField=default&sortType=desc&cidLevel=1`
        )
        .then(res => {
          let data = res.data.cidPrdMap[98];
          setListArr(prevListArr => [...prevListArr, ...data]);
        });
    }
  };

  const debounce = (func, delay) => {
    return (...args) => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const pageAdd = () => {
    pageRef.current += 1;
  };

  const onScrollFn = debounce(() => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = document.documentElement.clientHeight;
    let scrollHeight = document.body.scrollHeight;

    if (scrollHeight - scrollTop <= windowHeight) {
      console.log("触底了");
      timerRef.current = setTimeout(() => {
        lazyRef.current = false;
        clearTimeout(timerRef.current);
      }, 1000);

      if (!lazyRef.current) {
        pageAdd();
        moreData();
        lazyRef.current=true
      }

      if (pageRef.current === totalRef.current) {
        setEnd(true);
      }
    }
  }, 300);

  useEffect(() => {
    window.addEventListener('scroll', onScrollFn);

    return () => {
      window.removeEventListener('scroll', onScrollFn);
    };
  }, [onScrollFn]);

  return (
    <div>
      <div className="alllist_fix">
        <div className="alllist_headtit">
          <span className='alllist_headtit_text'>所有商品</span>
          <span className="alllist_headtit_icon iconfont icon-sousuoxiao"></span>
        </div>
        <div className="alllist_navbar">
          <div className="alllist_navbar_item">综合</div>
          <div className="alllist_navbar_item">新品</div>
          <div className="alllist_navbar_item">评价</div>
          <div className="alllist_navbar_item">价格 <span className='iconfont icon-xianxingcuxiao'></span></div>
        </div>
      </div>
      <div className="alllist_pic_con">
        {listArr.map((item, index) => (
          <div className='alllist_pic_con_item' key={index}>
            <Link to={"/item/" + item.prdId}><img src={item.picUrl} alt="" /></Link>
            <div>{item.disPrdName}</div>
            <div>{item.prdBriefName}</div>
            <div>￥{item.price}</div>
          </div>
        ))}
      </div>
      {end && <div>您的所有数据都已经加载完毕...</div>}
    </div>
  );
};

export default connect(
  state => ({ allList: state.rydata.allList || [] }),
  { fetchAllListAction }
)(AllList);
