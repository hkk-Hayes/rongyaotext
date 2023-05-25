
import React, { Component } from 'react'


const TitleNav=(props)=>{
  const {navlist} =props
  return <div className="nav2">
           {navlist.map((item,inedx)=><div className='nav2-item' key={inedx}>
             <img src={item.iconPhotoPath} alt="" />
             <div>{item.iconName}</div>
           </div>)}     
         </div>
}


// export default class TitleNav extends Component {

//     render() {
//       // console.log(this.props.navlist);
//       return <div className="nav2">
//         {this.props.navlist.map((item,inedx)=><div className='nav2-item' key={inedx}>
//           <img src={item.iconPhotoPath} alt="" />
//           <div>{item.iconName}</div>
//         </div>)}
      
//       </div>
  
//     }
//   }
  export default TitleNav