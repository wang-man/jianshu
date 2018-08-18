import React from 'react';
import {connect} from 'react-redux'
class Channel extends React.PureComponent {
   render(props){
      return (
         <div className="channel">
            {
               this.props.list.map((item)=>{
                  return (
                     <a className="link" key={item.get("id")} href={item.get("link")}>
                        <img alt="" src={item.get("imgUrl")} />
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
      list: state.getIn(["home", "channelList"])
   }
}

export default connect(mapStateToProps, null)(Channel)