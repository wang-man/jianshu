import React from 'react'
import { HeaderWrap, SearchBox } from './style'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

const Header = (props)=>{
   return (
      <HeaderWrap>
         <a href='/' className='logo'></a>
         <div className='nav_left'>
            <a href='/' className='theme_text'>
               首页
            </a>
            <a href='/' className='normal_text'>
               下载App
            </a>

            <CSSTransition
               in={props.focused}
               timeout={400}
               classNames='slide'
            >
               <SearchBox className='searchBox'>
                  <input type='text' placeholder='搜索' onFocus={props.inputFocus} onBlur={props.inputBlur} />
                  <i className='iconfont icon-fangdajing'></i>
               </SearchBox>
            </CSSTransition>

         </div>
         <div className='nav_right'>
            <a href='/' className='detail_text other_font'>
               Aa
            </a>
            <a href='/' className='detail_text'>
               登录
            </a>
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
   // 这样本组件才可以在props中访问到
   return {
      focused: state.focused
   }
}
const mapDispatchToProps = (dispatch) => {
   // 将本组件中用到所有的事件方法返回到props
   // 这样本组件才可以在props中访问到
   return {
      inputFocus() {
         const action = {
            type: 'searchBox_focus'
         };
         dispatch(action);
      },
      inputBlur() {
         const action = {
            type: 'searchBox_blur'
         };
         dispatch(action);
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)