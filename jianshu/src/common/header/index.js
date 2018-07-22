import React from 'react'
import { HeaderWrap, SearchBox } from './style'
import { CSSTransition } from 'react-transition-group';
class Header extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         focused: false
      }
      this.inputFocus = this.inputFocus.bind(this)
      this.inputBlur = this.inputBlur.bind(this)
   }
   render() {
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
                  in={this.state.focused}
                  timeout={400}
                  classNames='slide'
               >
                  <SearchBox className='searchBox'>
                     <input type='text' placeholder='搜索' onFocus={this.inputFocus} onBlur={this.inputBlur} />
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

   inputFocus() {
      this.setState({
         focused: true
      })
   }
   inputBlur() {
      this.setState({
         focused: false
      })
   }
}
export default Header