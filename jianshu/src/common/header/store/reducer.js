import * as types from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({       // fromJS将js原生对象转变为一个immutable对象
   focused: false,
   mouseIn: false,      // 鼠标是否在面板内
   hotList: [],
   current: 0
});

// reducer最后返回的是最新的状态，所以它的角色其实是state。
export default (state=defaultState, action)=>{
   if(action.type === types.SEARCHBOX_FOCUS){
      return state.set('focused', true);     // set方法并不会直接改变state，而是是返回一个新的immutable形式的state对象
   }
   if(action.type === types.SEARCHBOX_BLUR){
      return state.set('focused', false);
   }
   // 获取热门搜索数据
   if(action.type === types.REQHOTSEARCH){
      const data = fromJS(action.data.data);
      // const data = action.data.data;
      return state.set('hotList', data);
   }
   if(action.type === types.HOTCHANGE){
      let current = state.get('current');
      current++;
      if(current === action.total){
         current = 0;
      }
      return state.set('current', current);
   }
   if(action.type === types.MOUSE_ENTER){
      return state.set('mouseIn', true);
   }
   if(action.type === types.MOUSE_LEAVE){
      return state.set('mouseIn', false);
   }
   
   return state;
}