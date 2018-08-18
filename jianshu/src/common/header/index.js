import React from 'react'
import { HeaderWrap, SearchBox } from './style'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as headerActions from './store/actions';
import * as loginActions from '../../pages/login/store/actions';     // 引入login页面的action
import logoSrc from '../../static/img/logo.png'
import Toggle from "../toggleAnother"

let total = 0, newList = [];
const Header = (props) => {
   // 将热门数据十十分组
   const parseHot = (list, num)=>{
      let arr = list.toJS();
      if(Object.prototype.toString.call(arr) !== '[object Array]') return [];
      if(arr.length <= 0) return arr;
      for (let i = 0; i < arr.length; i+=num) {
         newList.push(list.slice(i, i+num));
      }
      total = newList.length;
      return newList[props.current];
   }
   const hotSearch = () => {
      if (props.focused || props.mouseIn) {
         return (
            <div className='hot_search' onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave}>
               <Toggle name={"热门搜索"} handle={props.hot_change_handle}/>
               <div className='hot_search_body'>
                  {
                     parseHot(props.hotList, 10).map((item)=>{
                        return <a className='hot_search_item' key={item}>{item}</a>
                     })
                  }
               </div>
            </div>
         )
      } else {
         return null;
      }
   }
   return (
      <HeaderWrap>
         <Link to='/' className='logo'>
            <img alt="" src={logoSrc} />
         </Link>
         <div className='nav_left'>
            <a href='/' className='theme_text'>
               首页
            </a>
            <a href='/' className='normal_text'>
               下载App
            </a>
            <div className='searchBox_wrap'>
               <CSSTransition
                  in={props.focused}
                  timeout={400}
                  classNames='slide'
               >
                  <SearchBox className='searchBox'>
                     <input type='text' placeholder='搜索' onFocus={()=>{props.inputFocus(props.hotList)}}  onBlur={props.inputBlur}/>
                     <i className='iconfont icon-fangdajing'></i>
                  </SearchBox>
               </CSSTransition>
               {hotSearch()}
            </div>

         </div>
         <div className='nav_right'>
            <a href='/' className='detail_text other_font'>
               Aa
            </a>
            {
               props.login ? <a href='javascript:;' onClick={props.logout} className='detail_text'>退出</a> : <Link to='/login' className='detail_text' >登录</Link>
            }
            <a href='/' className='btn regist_btn'>
               注册
            </a>
            <a href='/' className='btn write_btn'>
               <i className='iconfont icon--quill'></i>
               写文章
            </a>
         </div>
      </HeaderWrap>
   )
}
const mapStateToProps = (state) => {
   // 将本组件中用到所有的状态返回(映射)到props
   // 这样本组件才可以在props中访问到。这里很容易出现要使用到但没引入的失误中。。。。。
   return {
      // header已经变为一个immutable对象，不能再使用原生的赋值方法，而是使用immutable的get方法
      // focused: state.get('header').get('focused')        // 同下作用一致
      focused: state.getIn(['header', 'focused']),
      hotList: state.getIn(['header', 'hotList']),
      current: state.getIn(['header', 'current']),
      mouseIn: state.getIn(['header', 'mouseIn']),
      login: state.getIn(['login', 'login'])
   }
}
const mapDispatchToProps = (dispatch) => {
   // 将本组件中用到所有的事件方法返回到props
   // 这样本组件才可以在props中访问到
   return {
      inputFocus(list) {
         // 获取热门搜索
         // 通过传入的state中的hotList来判断是否要ajax请求数据
         if (list.size === 0) {
            dispatch(headerActions.reqHotSearch());
         }
         
         // 鼠标聚焦改变focused
         dispatch(headerActions.searchBox_focus);
         
      },
      inputBlur() {
         dispatch(headerActions.searchBox_blur);
      },
      hot_change_handle(){
         dispatch(headerActions.hot_change(total));
      },
      mouseEnter(){
         dispatch(headerActions.mouse_enter);
      },
      mouseLeave(){
         dispatch(headerActions.mouse_leave);
      },
      logout(){
         dispatch(loginActions.logout());    // 注意，这里是login组件定义的action
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)