import React from 'react';
import Signup from './Signup'
import {  BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Login'
import Profile from './pages/Profile'

class  App extends React.Component{
  constructor(){
    super()
    this.state = {
         register:{
          email : "",
          username : "",
          password : "",
          confirm_password : "",
          registration_id: 'wechatPro-test'
         },
         log : {
           email : "",
           password : ""
         }
    }
    this.signup = this.signup.bind(this)
  }

  signup(){
let userName = document.querySelector(".userName");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let confirmedPassword = document.querySelector(".confirmPassword");
this.setState({
  email: email.value,
  username: userName.value,
  password: password.value,
  confirm_password: confirmedPassword.value,
  registration_id: 'wechatPro-test'
})
let newUserDetails = {}
newUserDetails = this.state.register
if (!email.value.includes('.com')) {
  alert('wrong email format')
}else if(password.value.length < 6){
  alert('passwords must contain six characters or more')
} else{
  fetch("https://wechatpro.herokuapp.com/api/accounts/register", {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 93c5f7049eb1b5bdbaa98b8d5596335f59e078b049f937cf8898f29f9b39294a'
      },
     
      body: JSON.stringify({
        
       newUserDetails
     
      }),
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
}
  }
  
  render(){
    return (
      <Router>
        
      <div className="App">
      
       <Switch>
       <Route exact path="/" component={() => <Signup  registerBtn={this.signup} />} />
      <Route exact path="/Login"component = {Login}/>
      </Switch>
    
      
       
      
        </div>
        </Router>
      
    );
  }
  
}

export default App;
