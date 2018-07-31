import * as types from './actionTypes'
import axios from 'axios';
const searchBox_focus = {
   type: types.SEARCHBOX_FOCUS
};
const searchBox_blur = {
   type: types.SEARCHBOX_BLUR
};
const hot_search = (data)=>{
   return {
      type: types.REQHOTSEARCH,
      data
   }
} 
const reqHotSearch = () => {
   return (dispatch)=>{
      axios.get('/api/hotsearch.json').then((res)=>{
         const data = res.data;
         dispatch(hot_search(data))
      }).catch(()=>{
         console.log('请求出错')
      })
   }
};

// view中每次点击只是传入值，逻辑判断则在此地。然后由reducer去改变state
const hot_change = (total) => {
   return {
      type: types.HOTCHANGE,
      total
   }
}

const mouse_enter = {
   type: types.MOUSE_ENTER
}
const mouse_leave = {
   type: types.MOUSE_LEAVE
}

export {searchBox_focus, searchBox_blur, reqHotSearch, hot_change, mouse_enter, mouse_leave}