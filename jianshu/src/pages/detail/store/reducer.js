import * as types from './actionTypes';
import {fromJS} from "immutable"

const defaultState = fromJS({
   title: "",
   author: "",
   content: ""
})

export default (state=defaultState, action)=>{
   switch (action.type) {
      case types.GET_ARTICLE_DETAIL:
         return state.merge({
            title: action.title,
            author: action.author,
            content: action.content
         })
      default:
         return state;
   }
}