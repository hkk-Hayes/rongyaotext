


import React, { Component } from 'react'


export default class Maylike extends Component {
    
  
  render() {
      const { list } = this.props
      const addlist=(int)=>{
        this.props.listadd(int)
      }
      return <div className='top'>
  
        <div className='like'>
          <h3>您可能还喜欢</h3>
          <div className='title'>
            {list.map((item, index) => <div className='mybox' key={index} onClick={()=>{addlist(index)}}>
              <img src={item.photoPath} alt="" />
              <div className='name'>{item.name}</div>
              <div className='price'>{item.price}</div>
            </div>)}
  
          </div>
        </div>
  
      </div>
    }
  }