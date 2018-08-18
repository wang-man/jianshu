import styled from "styled-components"

export const Loginwrap = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #f1f1f1;
   .main{
      width: 300px;
      padding: 40px;
      margin: 100px auto 0;
      box-shadow: 0 0 8px rgba(0,0,0,.1);
      border-radius: 8px;
      background-color: #fff;
      input{
         width: 100%;
         height: 36px;
         margin: 10px 0;
      }
      button{
         width: 100%;
         height: 36px;
         margin-top: 10px;
         border-radius: 18px;
         border: none;
         background-color: #3194d0;
         font-size: 18px;
         color: #fff;
      }
   }
`