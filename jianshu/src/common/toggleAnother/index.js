import React from "react"
import {connect} from "react-redux"
import {ToggleWrap} from './style'

const Toggle = (props)=>{
   return (
      <ToggleWrap className='toggle'>
         <div className='left'>{props.name}</div>
         <a className='right' onClick={()=>{props.changeDeg(this.cycle, props.handle)}}><i className='iconfont icon-cycle' ref={(cycle)=>{this.cycle = cycle}}></i>换一批</a>
      </ToggleWrap>
   )
}


const mapDispatchToProps=(dispatch)=>{
   return {
      changeDeg(cycle, handle){
         let deg = cycle.style.transform.match(/\d+/ig);
         if(deg){
            deg = window.parseInt(deg[0]);       // match匹配到的是一个数组
         }else{
            deg = 0;       // 第一次
         }
         // 每次加360度旋转
         deg += 360;
         cycle.style.transform = "rotate("+ deg +"deg)";
         handle();
      }
   }
}
export default connect(null, mapDispatchToProps)(Toggle)