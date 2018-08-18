import React, {PureComponent} from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {Loginwrap} from "./style"
import * as actions from "./store/actions"

class Login extends PureComponent{
   render(){
      return (
         <Loginwrap>
            {
               !this.props.login ? 
                  <div className="main">
                     <input type="text" placeholder="请输入账号" ref={(input)=>{this.account = input}} /> <br/>
                     <input type="password" placeholder="请输入密码" ref={(input)=>{this.password = input}} /> <br/>
                     <button onClick={()=>{this.props.toLogin(this.account.value, this.password.value)}}>登录</button>
                  </div>
               : <Redirect to="/"/>
            }
         </Loginwrap>
      )
   }
}

const mapStateToProps = (state)=>{
   return {
      login: state.getIn(["login","login"])
   }
}
const mapDispatchToprops = (dispatch)=>{
   return{
      toLogin(account, password){
         if((account, password) == null || (account, password) === ""){
            alert("不能为空");
            return;
         }
         dispatch(actions.toLogin(account, password));
      }
   }
}
export default connect(mapStateToProps, mapDispatchToprops)(Login);