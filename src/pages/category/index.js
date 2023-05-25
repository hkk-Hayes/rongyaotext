import React, { Component } from 'react'
import axios from 'axios';
import './index.scss';
// import { SideBar } from 'antd-mobile';
export default class Category extends Component {

    constructor(){
        super()
        this.state={
            tabsList: [],
            activeKey: "0",//初始的激活状态的左侧菜单的id
            list: []
        }
    }

    setActiveKey = (key) => {
        console.log("菜单点击了", key);
        this.setState({ list: this.state.tabsList[key].subCategorys, activeKey: key })


    }

    componentDidMount() {
        axios.get('/getCategoryInfo?portal=21&version=350&lang=zh-CN&country=CNQX&_areacode=CNQX&beCode=CNQX&categoryId=798').then(res => {
            console.log(res);
            this.setState({ tabsList: res.data, list: res.data[0].subCategorys })
        })
    }


    render() {
        const { tabsList, activeKey, list } = this.state;
        return (
            <div className='category'>
                <div className="cate_left">
                    {/* <SideBar activeKey={activeKey} onChange={this.setActiveKey}>
                        {tabsList.map((item, index) => (
                            <SideBar.Item key={index} title={item.name} />
                        ))}
                    </SideBar> */}

                </div>
                <div className="cate_right">
                 
        {activeKey === "0" && (
          <div className="cate_right_con">
            {list.map((item, index) => (
              <div key={index} className="cate_right_con_item">
                <div>
                  <img src={`https://hshop.honorfile.com/pimages/cnqx${item.subCategorys[0].photoPath}/${item.subCategorys[0].photoName}`} alt="" />
                  <div>{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeKey !== "0" && ( 
        list
        .filter((item) => item.name.includes("全部"))
        .map(
            (item,index)=><div className="cate_right_con1" key={index}>
                 {/* <h5>{item.name}</h5> */}
                 <div className="cate_right_con">
                    {
                        item.subCategorys.map(
                            (it, ind) => (
                                <div key={ind} className="cate_right_con_item">
                                  <div>
                                    <img src={`https://hshop.honorfile.com/pimages/cnqx${it.photoPath}/${it.photoName}`} alt="" />
                                    <div className="cate_right_con_item_name">{it.name}</div>
                                  </div>
                                </div>
                              )
                        )
                    }
                 </div>
            </div>
        )
        
        )}

        {activeKey !== "0" && ( 
        list
        .filter((item) => !item.name.includes("全部"))
        .map(
            (item,index)=><div className="cate_right_con1" key={index}>
                 <h5>{item.name}</h5>
                 <div className="cate_right_con">
                    {
                        item.subCategorys.map(
                            (it, ind) => (
                                <div key={ind} className="cate_right_con_item">
                                  <div>
                                    <img src={`https://hshop.honorfile.com/pimages/cnqx${it.photoPath}/${it.photoName}`} alt="" />
                                    <div className="cate_right_con_item_name">{it.name}</div>
                                  </div>
                                </div>
                              )
                        )
                    }
                 </div>
            </div>
        )
        
        )}
                </div>

            </div>
        )
    }
}
// https://hshop.honorfile.com/pimages/cnqx/pages/mobile/frontCategory/64107958907615970146.png