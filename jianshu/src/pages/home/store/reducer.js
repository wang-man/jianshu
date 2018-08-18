import * as types from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({       // fromJS将js原生对象转变为一个immutable对象
   topicList: [],
   artList: [],
	channelList: [],
	authorList: [],
	artPage: 1,
	showToTop: false,
	current: 0
});

// reducer最后返回的是最新的状态，所以它的角色其实是state。
export default (state=defaultState, action)=>{
   switch (action.type) {
		case types.GET_HOME_DATA:
			// merge在immutable中用于同时设置多个值
         return state.merge({
            topicList: fromJS(action.topicList),
            artList: fromJS(action.artList),
            channelList: fromJS(action.channelList),
            authorList: fromJS(action.authorList)
         })
      case types.GET_ARTCLE_DATA:
			// 拼接
         const newartList = state.get("artList").concat(fromJS(action.artcle));
         return state.merge({
				artList: newartList,
				artPage: action.page
			});
      case types.SHOW_SCROLL_TOTOP:
         return state.set("showToTop", action.showToTop);
      case types.AUTHOR_CHANGE:
			let current = state.get('current');
			current++;
			if(current === action.total){
				current = 0;
			}
			return state.set('current', current);
      default:
         return state;
   }
}