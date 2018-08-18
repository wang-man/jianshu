import axios from 'axios';
import * as types from "./actionTypes";

// 获取页面初始数据
const getHomeData = ()=>{
   return (dispatch)=>{
      axios.get("api/home.json").then((res)=>{
         const data = res.data.data;
         const action = {
            type: types.GET_HOME_DATA,
            topicList: data.topicList,
            artList: data.artList,
            channelList: data.channelList,
            authorList: data.users
         }
         dispatch(action);
      }) 
   }
}

// 加载‘阅读更多’文章
const getArticle = (page)=>{
   return (dispatch)=>{
      axios.get("/api/article.json?page=" + page).then((res)=>{
         const data = res.data.data;
         const action = {
            type: types.GET_ARTCLE_DATA,
            artcle: data.artcle,
            page: page+1
         }
         dispatch(action);
      }) 
   }
}
// 加载‘阅读更多’文章
const showScrollElement = (flag)=>{
   return {
      type: types.SHOW_SCROLL_TOTOP,
      showToTop: flag,
   }
}

const author_change = (total) => {
   return {
      type: types.AUTHOR_CHANGE,
      total
   }
}
export {getHomeData, getArticle, showScrollElement, author_change}