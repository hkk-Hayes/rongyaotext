


import React, { Component } from 'react'


const Tolike=(props)=>{
  const url = 'https://hshop.honorfile.com/pimages/cnqx'
  const {HomeRegionInfo}=props
      return<div className="nav3-con">
        {HomeRegionInfo.map((item,index)=><div className="nav3-cont" key={index}>
          <h4>{item.name}</h4>
          <div className="nav3">
            {
          item.showPrdList.slice(0, 6).map((it,ind)=><div className="nav3-item" key={ind}>
            <img src={url + it.photoPath + '800_800_' + it.photoName} alt="无法显示"  />
              <div>{it.prdName}</div>
          </div>
          )
          }
           
          </div>
          </div>

        )}
        
      </div>
}




// export default  class Tolike extends Component{
      
//     render(){
//       const url = 'https://hshop.honorfile.com/pimages/cnqx'
//       return<div className="nav3-con">
//         {this.props.HomeRegionInfo.map((item,index)=><div className="nav3-cont" key={index}>
//           <h4>{item.name}</h4>
//           <div className="nav3">
//             {
//           item.showPrdList.slice(0, 6).map((it,ind)=><div className="nav3-item" key={ind}>
//             <img src={url + it.photoPath + '800_800_' + it.photoName} alt="无法显示"  />
//               <div>{it.prdName}</div>
//           </div>
//           )
//           }
           
//           </div>
//           </div>

//         )}
        
//       </div>
//     }
// }

export default Tolike