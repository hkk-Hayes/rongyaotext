


// import React, { Component } from 'react'

const Contens=(props)=>{
  const { list } = props
      return <div className='top'>
  
        <div className='like'>
          <h3>您可能还喜欢</h3>
          <div className='title'>
            {list.map((item, index) => <div className='mybox' key={index}>
              <img src={item.photoPath} alt="" />
              <div className='name'>{item.name}</div>
              <div className='price'>{item.price}</div>
            </div>)}
  
          </div>
        </div>
  
      </div>
}

// export default class Contens extends Component {
//     render() {
//       const { list } = this.props
//       return <div className='top'>
  
//         <div className='like'>
//           <h3>您可能还喜欢</h3>
//           <div className='title'>
//             {list.map((item, index) => <div className='mybox' key={index}>
//               <img src={item.photoPath} alt="" />
//               <div className='name'>{item.name}</div>
//               <div className='price'>{item.price}</div>
//             </div>)}
  
//           </div>
//         </div>
  
//       </div>
//     }
//   }
  export default Contens