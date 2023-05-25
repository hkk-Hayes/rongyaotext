import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Carthead extends Component {
    state={
        empty:false,
        headlist:[]
    }
    componentDidMount(){
        // console.log(this)
        const {listselet}=this.props
        if(listselet.length===0){
            this.setState({empty:true})
        }
       
    }
    // componentDidUpdate(){
    //     const {listselet,list}=this.props
    //     let fliesele=[]
    //     listselet.forEach(item => {
    //         const filteredArray = list.filter((it, index) => index === item);
    //         fliesele.push(filteredArray)
    //     });
    //     // console.log(fliesele)
    //     this.setState({
    //         headlist:fliesele
    //     })
    // }
    render() {
        // const {empty}=this.state
        const { cart } = this.props;
        // console.log(cart)
        return (
            <div className="Cartcon">
                <div className="Cartcon_headtit"><span>购物车</span></div>
                <div className="Cartcon_cartbox">
                   { cart.length === 0 ?<div className="Cartcon_cart_empty">
                        <img src="https://hshop.honorfile.com/cnqx/23430102/static/img/ic_empty_cart.fbf4fc01.png" alt="" />
                        <div>购物车是空的，快去买点东西奖励自己吧~</div>
                        <div>去逛逛</div>
                    </div>:<div className='Cartcon_cart_con'> {
                            cart.map((item) => <div key={item.id} className='Cartcon_cart_item'>
                                <img src={item.pic} alt={item.id} className='Cartcon_cart_item_img'/>
                                <span>{item.name}</span>
                                <span>{item.price}</span>
                                <span>{item.num}</span>

                            </div>
                            )
                        }</div>
                       

                    
                   }

                   {/* {
                    empty&&headlist.map(
                        (item,index)=><div className='Cartcon_cart_item' key={index}>
                            <div className='Cartcon_cart_item_img'><img src={item.photoPath} alt="" /></div>
                            <div className='Cartcon_cart_item_con'><div>{item.name}</div><div>{item.briefName}</div></div>
                        </div>
                    )
                   } */}
                </div>
            </div>
        )
    }
}
export default connect(
    state => ({ cart: state.cart })
)(Carthead);
