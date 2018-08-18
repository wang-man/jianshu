import React from 'react';
import {connect} from 'react-redux'
import * as actions from "../store/actions"
import {Link} from "react-router-dom"

class Artlist extends React.PureComponent {
   render(props){
      return (
         <div className="art">
            <ul className="art_list">
               {
                  this.props.list.map((item, index) =>{
                     return (
                        <li className="art_item" key={index}>
                           <div className="art_left">
                              <Link className="title" to={"/detail/" + item.get("id")}>{item.get("title")}</Link>
                              <p className="description">
                                 {item.get("desc")}
                              </p>
                              <div className="meta">
                                 <span>{item.get("author")}</span>
                                 <span><i className="iconfont icon-comments"></i>{item.get("comments")}</span>
                                 <span><i className="iconfont icon-heart"></i>{item.get("heart")}</span>
                                 {this.dashang(item)}
                              </div>
                           </div>
                           <div className="art_right">
                              <img alt="" src={item.get("imgUrl")} />
                           </div>
                        </li>
                     )
                  })
               }
            </ul>
            <a href="javascript:;" className="load_more" onClick={
               ()=>{this.props.getArticle(this.props.artPage)}
            }>
               阅读更多
            </a>
         </div>
      )
   }

   dashang(item){
      if(item.get("dashang")){
         return (
            <span ><i className="iconfont icon-dashang"></i>{item.get("dashang")}</span>
         )
      }else{
         return null
      }
   }

}

const mapStateToProps = (state) =>{
   return {
      list: state.getIn(["home", "artList"]),
      artPage: state.getIn(["home", "artPage"])
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      getArticle(page){
         dispatch(actions.getArticle(page));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artlist)