import styled from 'styled-components'

export const ToggleWrap = styled.div`
   display: flex;
   justify-content: space-between;
   color: #969696;
   margin-bottom: 10px;
   .left{
      font-size: 14px;
   }
   .right{
      font-size: 13px;
      color: #969696;
      .icon-cycle{
         display: inline-block;
         font-size: 14px;
         margin-right: 2px;
         transition: all 0.2s ease-out;
         transform-origin: center center;
         transform: rotate(30deg);
      }
      &:hover{
         color: #2f2f2f;
      }
   }
`