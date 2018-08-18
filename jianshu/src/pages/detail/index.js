import React from 'react';
import {withRouter} from "react-router-dom";
import { DetailWrap } from "./style";
import {connect} from "react-redux";
import * as actions from "./store/actions";

class Detail extends React.Component {
   render() {
      return (
         <DetailWrap>
            <div className="article">
               <h1 className="title">{this.props.title}</h1>
               <div className="author" dangerouslySetInnerHTML={{__html: this.props.author}}>
               </div>
               <div className="content" dangerouslySetInnerHTML={{__html: this.props.content}}>
               </div>
            </div>
         </DetailWrap>
      )
   }

   componentDidMount(){
      this.props.getArticleDetail(this.props.match.params.id)
   }
}

const mapStateToProps = (state)=>{
   return {
      title: state.getIn(["detail", "title"]),
      author: state.getIn(["detail", "author"]),
      content: state.getIn(["detail", "content"])
   }
}

const mapDispatchToProps = (dispatch)=>{
   return {
      getArticleDetail(id){
         dispatch(actions.getArticleDetail(id));
      }
   }
}
      
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))