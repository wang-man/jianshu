import * as types from './actionTypes';
import axios from "axios"

const getArticleDetail = (id)=>{
   return (dispatch)=>{
      axios.get("/api/detail.json?id=" + id).then((res)=>{
         const data = res.data.data;
         const action = {
            type: types.GET_ARTICLE_DETAIL,
            title: data.title,
            author: data.author,
            content: data.content
         }
         dispatch(action)
      }).catch(()=>{
         console.log("请求失败")
      })
   }
}

export {getArticleDetail}