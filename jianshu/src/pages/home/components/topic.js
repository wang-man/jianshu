import React from 'react';
import { connect } from 'react-redux'
class Topic extends React.PureComponent {
   render(props){
      return (
         <div className='topic'>
            {
               this.props.list.map((item)=>{
                  return (
                     <a className='link' key={item.get("id")} target="_bank" href={item.get("link")}>
                        <img alt="" src={item.get("imgUrl")} />
                        <span>
                           {item.get("text")}
                        </span>
                     </a>
                  )
               })
            }
         </div>
      )
   }
}
const mapStateToProps = (state)=>{
   return {
      list: state.getIn(["home", "topicList"])
   }
}
export default connect(mapStateToProps, null)(Topic)