// import {combineReducers} from 'redux';    // 
import {combineReducers} from 'redux-immutable';      // 使用redux-immutable同样提供的combineReducers
import headerReducer from '../common/header/store/reducer';

// 将header组件中的reducer合并到总的。
const reducer = combineReducers({     
   header: headerReducer
});

export default reducer;
