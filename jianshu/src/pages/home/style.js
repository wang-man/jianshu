import styled from 'styled-components'

export const HomeWrap = styled.div`
   width: 960px;
   margin: 0 auto;
   padding: 30px 0;
   overflow: hidden;
   .home_left{
      float: left;
      width: 640px;
      .banner{
         border-radius: 10px;
         overflow: hidden;
         .banner_img{
            width: 100%;
         }
      }
      .topic{
         margin-top: 30px;
         padding-bottom: 25px;
         border-bottom: 1px solid #f0f0f0;
         .link{
            display: inline-block;
            border-radius: 4px;
            overflow: hidden;
            margin-right: 20px;
            border: 1px solid #dcdcdc;
            background-color: #f7f7f7;
            img{
               width:32px;
               height: 32px;
               vertical-align: bottom;
            }
            span{
               display: inline-block;
               height: 32px;
               line-height: 32px;
               vertical-align: top;
               border-left: none;
               font-size: 14px;
               padding: 0 10px 0 6px;
            }
         }
      }
      .art{
         .art_list{
            .art_item{
               padding: 20px 0;
               margin-bottom: 15px;
               border-bottom: 1px solid #f0f0f0;
               overflow: hidden;
               .art_left{
                  float: left;
                  width: 483px;
                  .title{
                     font-size: 18px;
                     line-height: 1.5;
                     font-weight: 700;
                     &:hover{
                        text-decoration: underline;
                     }
                  }
                  .description{
                     margin: 8px 0;
                     font-size: 13px;
                     line-height: 24px;
                     color: #999;
                  }
                  .meta{
                     font-size: 12px;
                     color: #b4b4b4;
                     span{
                        margin-right: 12px;
                        .iconfont{
                           margin-right: 2px;
                        }
                        .icon-comments{
                           font-size: 12px;
                           vertical-align: 1px;
                        }
                        .icon-heart{
                           font-size: 13px;
                        }
                        .icon-dashang{
                           font-size: 12px;
                        }
                     }
                  }
               }
               .art_right{
                  float: right;
                  width: 125px;
                  height: 100px;
                  border-radius: 4px;
                  overflow: hidden;
                  img{
                     width: 100%;
                     height: 100%;
                  }
               }
            }
         }
         .load_more{
            display: block;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color:#a5a5a5;
            border-radius: 20px;
            color: #fff;
            &:hover{
               background-color:#9b9b9b;
            }
         }
      }
   }
   .home_right{
      float: right;
      width: 280px;
      .channel{
         .link{
            display: block;
            margin-bottom: 6px;
            img{
               width: 100%;
               vertical-align: bottom;
            }
         }
      }
      .appDown{
         display: block;
         padding: 10px 22px;
         margin-top: 10px;
         margin-bottom: 30px;
         border: 1px solid #f0f0f0;
         border-radius: 4px;
         img{
            width:60px;
            height: 60px;
            opacity: 0.8;
         }
         .info{
            display: inline-block;
            vertical-align: top;
            margin-top: 10px;
            margin-left: 10px;
            .title{
               font-size: 15px;
            }
            .description{
               margin-top: 3px;
               font-size: 13px;
               color: #999;
            }
         }
      }
      .author{
         font-size: 14px;
         .author_list{
            .author_item{
               display: flex;
               align-items: center;
               position: relative;
               margin-top: 15px;
               .author_img{
                  width: 48px;
                  height: 48px;
                  border-radius: 50%;
                  margin-right: 10px;
               }
               .author_info{
                  .nickname{
                     font-size: 14px;
                     line-height: 1.5;
                  }
                  .count{
                     font-size: 12px;
                     line-height: 1.7;
                     color: #969696;
                  }
               }
               .following{
                  position: absolute;
                  right: 0;
                  top: 0;
                  font-size: 13px;
                  color: #42c02e;
                  .icon{
                     font-size: 20px;
                     font-weight: bold;
                     vertical-align: -1px;
                  }
               }
            }
         }
      }
   }
   .scroll_to_top{
      position: fixed;
      bottom: 50px;
      right: 50px;
      width: 50px;
      height: 50px;
      a{
         display: block;
         height: 100%;
         line-height: 50px;
         text-align: center;
         border: 1px solid #dcdcdc;
         border-radius: 3px;
      }
      .tips{
         opacity: 0;
         position: absolute;
         top: 50%;
         transform:translateY(-50%);
         right: 130%;
         height: 30px;
         line-height: 30px;
         padding: 0 10px;
         font-size: 14px;
         border-radius: 4px;
         white-space: nowrap;
         background-color: #3f3f3f;
         color: #fff;
         transition: opacity 0.3s ease;
         .icon-xiaosanjiao{
            position: absolute;
            right: -9px;
            top: 50%;
            transform: translateY(-50%);
            color: #3f3f3f;
         }
      }
   }
`