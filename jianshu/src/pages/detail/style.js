import styled from 'styled-components'

export const DetailWrap = styled.div`
   width: 620px;
   margin: 0 auto;
   padding-top: 30px;
   .article{
      padding-top: 20px;
      .title{
         font-size: 34px;
      }
      .author{
         margin: 30px 0 40px;
         .avatar{
            width: 48px;
            height: 48px;
            vertical-align: middle;
            display: inline-block;
            img{
               width: 100%;
               height: 100%;
               border: 1px solid #ddd;
               border-radius: 50%;
            }
         }
         .info{
            vertical-align: middle;
            display: inline-block;
            margin-left: 8px;
            .name{
               margin-right: 3px;
               font-size: 16px;
               vertical-align: middle;
            }
            .follow{
               padding: 0 7px 0 5px;
               font-size: 12px;
               &.btn-success{
                  border-radius: 40px;
                  color: #fff;
                  background-color: #42c02e;
               }
            }
            .meta{
               margin-top: 5px;
               font-size: 12px;
               color: #969696;
               span{
                  margin-right: 5px;
               }
            }
         }
      }
      .content{
         .img_content{
            width: 700px;
            margin-left: -40px;
            margin-bottom: 30px;
            img{
               width: 100%;
            }
         }
         p{
            margin-bottom: 25px;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.7;
         }
      }
   }
`