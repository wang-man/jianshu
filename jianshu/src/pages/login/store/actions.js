import axios from 'axios';
import * as types from "./actionTypes";

const toLogin= (account, password)=>{
   return (dispatch)=>{
      axios.get("/api/login.json" , {params: {account: account, password: password}}).then((res)=>{
         const result = res.data.data;
         const action = {
            type: types.CHANGE_LOGIN,
            login: result
         };
         dispatch(action);
      })
   }
}

const logout= ()=>{
   const action = {
      type: types.CHANGE_LOGOUT,
      login: false
   };
   return action;
}
export {toLogin, logout}