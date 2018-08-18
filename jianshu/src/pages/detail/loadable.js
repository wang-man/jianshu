import React from "react";
import Loadable from "react-loadable"

const Loading = ()=>{
   return <div className="loading" style={{position: 'absolute', left: 0,top: 0, right:0, bottom: 0, textAlign:'center'}}>
      <div style={{padding: "20px", backgroundColor: '#666', borderRadius: '4px', display: "inline-block", color: '#fff', marginTop: '40%'}}><i className="iconfont icon-jiazaizhong"></i><br/><br/>加载中...</div>
      
   </div>
}

const LoadableComponent = Loadable({
   loader: ()=>import('./index'),
   loading: Loading
})

export default ()=>{return <LoadableComponent />}
