import React from 'react';
import {HomeWrap} from './style';
import Appdown from './components/appDown';
import Artlist from './components/artList';
import Author from './components/author';
import Banner from './components/banner';
import Channel from './components/channel';
import Topic from './components/topic';
import * as actions from './store/actions'
import {connect} from 'react-redux'

class Home extends React.Component {
   showTips(scrollTips){
      scrollTips.style.opacity=1;
   }
   hideTips(scrollTips){
      scrollTips.style.opacity=0;
   }
   scrollToTop(){
      clearInterval()
      const scrollTop = document.scrollingElement.scrollTop;
      const height = window.parseInt(scrollTop/50);
      for (let i = 1; i <= 50; i++) {
         setTimeout(()=>{
            document.scrollingElement.scrollTop = scrollTop-height*(i+2);
            if(document.scrollingElement.scrollTop <= 0){
               console.log(document.scrollingElement.scrollTop)
               document.scrollingElement.scrollTop = 0;
               return;
            } 
         }, i * 3)
      }
   }
   toTopElement(show){
      if(show){
         return (
            <div className="scroll_to_top" >
               <a href="javascript:;" onClick={this.scrollToTop} onMouseOver={()=>{this.showTips(this.scrollTips)}} onMouseLeave={()=>{this.hideTips(this.scrollTips)}}><i className="iconfont icon-shouqi"></i></a>
               <span className="tips" ref={(tips)=>{this.scrollTips = tips}}>回到顶部<i className="iconfont icon-xiaosanjiao"></i></span>
            </div>
         )
      }else{
         return null
      }
   }
   render(){
      return (
         <HomeWrap className="content">
            <div className='home_left'>
               <Banner></Banner>
               <Topic></Topic>
               <Artlist></Artlist>
            </div>
            <div className='home_right'>
               <Channel></Channel>
               <Appdown></Appdown>
               <Author></Author>
            </div>
            {this.toTopElement(this.props.showToTop)}
         </HomeWrap>
      )
   }
   componentDidMount(){
      this.props.getHomeData();
      document.addEventListener("scroll", ()=>{
         const scrollTop = document.scrollingElement.scrollTop;
         if(scrollTop > 200){
            this.props.showScrollElement(true);
         }else{
            this.props.showScrollElement(false);
         }
      })
   }
}

const mapStateToProps = (state)=>{
   return {
      showToTop: state.getIn(["home", "showToTop"])
   }
}
const mapDispatchToProps = (dispatch)=>{
   return {
      getHomeData(){
         dispatch(actions.getHomeData());
      },
      showScrollElement(flag){
         dispatch(actions.showScrollElement(flag));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);