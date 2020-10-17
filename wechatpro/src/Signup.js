import React from 'react';
import image from './road-image.jpg';
import './WeChat.css';
import {  Link } from 'react-router-dom';
import Header from './Header'



const Signup = (props)=>{
return(
<div>
    <Header/>
       <section className="container">
      <section className="signup-section">
        <div className="signUp-display">
          <div className="signup-content">
            <h3>Welcome to WeChat</h3>
            <h5>Sign Up to join the Trybe!</h5>
            <form action="" className="sign"></form>
            <div className="sign">
             
              <input type="text" placeholder="Username" className="userName" /><br />
              <input type="text" placeholder="johndoe@gmail.com" className="email"  /><br />
              <input type="password" placeholder="Password" className="password" /><br />
               <input type="password" placeholder="Confirm Password" className="confirmPassword" />
            </div>
            <form action="">
              <input type="checkbox" />
              <label htmlFor ="terms"
                >I accept the <a href="#">terms and conditions</a> that
                guide the <a href="#">operations</a> of this organization
                </label>
            </form>
            <a href="#" className="signToDashboard" onClick={() => props.registerbtn()}> Happy Chatting</a>
           
            <p className="p">Have an account?   <Link to =  '/Login'>Log In</Link> </p>
                
            
          </div>
          <div className="image-container">
            <img src= {image} alt="" className="image" />
            <div className="overlaytext">
              <h3>WeChat</h3>
              <h4>Meet.Connect.Chat</h4>
            </div>
          </div>
        </div>
      </section>
    </section>
    </div>
)
}
export default Signup