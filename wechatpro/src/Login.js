import React from "react";
import image from "./road-image.jpg";
import { Link } from "react-router-dom";
import "./WeChat.css";


class  Login extends React.Component {
  constructor(){
    super()
    this.state = {
        email: "",
        password: "",
    }
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    const {name, value} = e.target
    this.setState({
      [name] : value,
    })
  }
  login(e) {
	  e.preventDefault()


    if (!email.value.includes(".com")) {
      alert("wrong email format");
    } else if (password.value.length < 6) {
      alert("passwords must contain six characters or more");
    } else {
      fetch("https://wechatpro.herokuapp.com/api/accounts/login", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 93c5f7049eb1b5bdbaa98b8d5596335f59e078b049f937cf8898f29f9b39294a",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((resp)=>{
          return resp.json()
        })
        .then((d)=>{
          localStorage.setItem("accessToken", d.data.access_token )
          localStorage.setItem("refreshToken", d.data.refesh_token)
          this.props.history.push("/pages/Profile")
        })
    }

  }
  render(){
    return (
      <div>
        <section className="container">
          <section className="login-section">
            <div className="login-display">
              <div className="login-content">
                <h3>Welcome Back</h3>
                <h5>Log In</h5>
                <form onSubmit={this.login} className="sign">
                  <input
                      type="text"
                      placeholder="Email"
                      name='email'
                      className="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                  />
                  <br />
                  <input
                      type="password"
                      name='password'
                      placeholder="Password"
                      className="password"
                      value = {this.state.password}
                      onChange={this.handleChange}
                  />

                  <button type="submit" className="logToDashboard">Log In</button>
                </form>

                <p className="p">
                  Don't have an account? <Link to="/">Sign up</Link>
                </p>
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
    );
  }
 
};

export default Login;
