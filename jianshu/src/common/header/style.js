import styled from 'styled-components'
import logoSrc from '../../static/img/logo.png'

// styled用于创建带样式的标签，并输出为组件。
// 使用类似stylus语法
export const HeaderWrap = styled.nav`
   position: relative;
   height: 56px;
   border-bottom: 1px solid #f0f0f0;
   .logo{
      height: 100%;
      width: 100px;
      position: absolute;
      left: 0;
      top: 0;
      background: url(${logoSrc});
      background-size: 100%;
   }
   .nav_left{
      width: 945px;
      height: 100%;
      margin: 0 auto;
      font-size: 17px;
      line-height: 54px;
      .theme_text{
         color: #ea6f5a;
         margin-right: 40px;
      }
      .normal_text{
         margin-right: 40px;
      }
      .searchBox{
         position: relative;
         display: inline-block;
         width: 160px;
         vertical-align: middle;
         height: 38px;
         line-height: 35px;
         border-radius: 19px;
         padding: 0 20px;
         background-color: #eee;
         &.slide-enter{
            transition: all .4s ease;
         }
         
         &.slide-enter-active{
            width: 240px;
            .icon-fangdajing{
               background-color: #aaa;
               color:#fff;
            }
         }
         &.slide-enter-done{
            width: 240px;
            .icon-fangdajing{
               background-color: #aaa;
               color:#fff;
            }
         }
         &.slide-exit{
            transition: all .4s ease;
         }
         
         input{
            width: 100%;
            border: none;
            background-color: #eee;
            &::placeholder{
               color: #aaa;
            }
         }
         .icon-fangdajing{
            position: absolute;
            top: 5px;
            right: 6px;
            width: 28px;
            height: 28px;
            line-height: 30px;
            border-radius: 50%;
            text-align:center;
            color:#969696;
         }
      }
   }
   .nav_right{
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      line-height: 56px;
      font-size: 15px;
      .detail_text{
         margin-right: 40px;
         color: #969696;
         &.other_font{
            font-size: 20px;
            font-family: -webkit-pictograph;
         }
      }
      .btn{
         display: inline-block;
         border: 1px solid #ea6f5a;
         height: 40px;
         line-height: 38px;
         border-radius: 20px;
         margin-top: 8px;
         margin-right: 20px;
         padding: 0 20px;
         &.regist_btn{
            height: 38px;
            line-height: 36px;
            color: #ea6f5a;
            transition: 0.1s ease-in;
            &:hover{
               background-color:rgba(236,97,73,.05);
            }
         }
         &.write_btn{
            background-color:#ea6f5a;
            color: #fff;
            transition: 0.1s ease-in;
            &:hover{
               background-color: #ec6149;
            }
            .icon--quill{
               margin-right: 4px;
               font-size: 14px;
            }
         }
      }
   }
`

export const SearchBox = styled.div`
  
`