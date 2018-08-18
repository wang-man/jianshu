import React from 'react';
import {connect} from "react-redux"
import Toggle from "../../../common/toggleAnother"
import * as actions from "../store/actions"

let total = 0, newList=[];
class Author extends React.PureComponent {
   // 将作者数据十十分组
   parseHot(list, num){
      let arr = list.toJS();
      if(Object.prototype.toString.call(arr) !== '[object Array]') return [];
      if(arr.length <= 0) return arr;
      for (let i = 0; i < arr.length; i+=num) {
         newList.push(list.slice(i, i+num));
      }
      total = newList.length;
      return newList[this.props.current];
   }
   render(){
      return (
         <div className="author">
            <Toggle name={"推荐作者"} handle={this.props.author_change_handle}/>
            <ul className="author_list">
               {
                  this.parseHot(this.props.authorList, 5).map((item)=>{
                     return (
                        <li key={item.get("id")} className="author_item">
                           <img className="author_img" alt="" src={item.get("avatar_source")}/>
                           <div className="author_info">
                              <div className="nickname">{item.get("nickname")}</div>
                              <div className="count">写了{(item.get("total_wordage")/1000).toFixed(1)}k字，{ (item.get("total_likes_count")/1000).toFixed(1)}k喜欢</div>
                           </div>
                           <a className='following'><i className="icon">+</i>关注</a>
                        </li>
                     )
                  })
               }
            </ul>
         </div>
      )
   }
}

const mapStateToProps = (state)=>{
   return {
      authorList: state.getIn(["home", "authorList"]),
      current: state.getIn(['home', 'current']),
   }
}
const mapDispatchToProps = (dispatch)=>{
   return {
      author_change_handle(){
         dispatch(actions.author_change(total));
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Author);