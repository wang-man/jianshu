// import {combineReducers} from 'redux';    // 
import {combineReducers} from 'redux-immutable';      // 使用redux-immutable同样提供的combineReducers
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/reducer';
import detailReducer from '../pages/detail/store/reducer';
import loginReducer from '../pages/login/store/reducer';

// 将header组件中的reducer合并到总的。
const reducer = combineReducers({     
   header: headerReducer,
   home: homeReducer,
   detail: detailReducer,
   login: loginReducer
});

export default reducer;
