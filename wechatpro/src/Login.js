import React from 'react'
import image from './road-image.jpg';
import {Link} from 'react-router-dom'
import './WeChat.css'
import Header from './Header'

const Login = ()=>{
    return(
        <div>
            <Header/>
    <section className="container">
      <section className="login-section">
        <div className="login-display">
          <div className="login-content">
            <h3>Welcome to WeChat</h3>
            <h5>Log In to join the Trybe!</h5>
            <div className="sign">
              <input type="text" placeholder="Enter your Email" className="email" /><br />
              <input type="password" placeholder="Password" className="password" />
            </div>
            <a href="#" className="logToDashboard" onClick={() => this.login()}> Happy Chatting</a>
            <p className="p">Don't have an account?   <Link to =  '/Signup'>Sign up</Link> </p>
          </div>

          <div className="image-container">
            <img src={image} alt="" className="image" />
            <div className="overlaytext">
              <h3>Trybe</h3>
              <h4>Meet.Connect.Chat</h4>
            </div>
          </div>
        </div>
      </section>
    </section>
    </div>
    )
}

export default Login