import React from "react";
import image from "./road-image.jpg";
import "./WeChat.css";
import { Link } from "react-router-dom";


class  Signup extends React.Component {
 constructor(props){
   super(props)
   this.state = {
    register: {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      registration_id: "wechatPro-test",
    },
    
  };
  this.signup = this.signup.bind(this)
 }

 signup() {
  let userName = document.querySelector(".userName");
  let email = document.querySelector(".email");
  let password = document.querySelector(".password");
  let confirmedPassword = document.querySelector(".confirmPassword");
  let terms = document.querySelector(".terms-c");
  this.setState({
    register: {
      email: email.value,
      username: userName.value,
      password: password.value,
      confirm_password: confirmedPassword.value,
      registration_id: "wechatPro-test",
    }
    
  });

  if (!email.value.includes(".com")) {
    alert("wrong email format");
  } else if (password.value.length < 6) {
    alert("passwords must contain six characters or more");
  } else if (!terms.checked) {
    alert("terms and conditions");
  } else {
    fetch("https://wechatpro.herokuapp.com/api/accounts/register", {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 93c5f7049eb1b5bdbaa98b8d5596335f59e078b049f937cf8898f29f9b39294a",
      },

      body: JSON.stringify({
        email: email.value,
        username: userName.value,
        password: password.value,
        confirm_password: confirmedPassword.value,
        registration_id: "wechatPro-test",
      }),
    })
      .then((resp) => resp.json())
      .then((d)=>{
        localStorage.setItem("accessToken", d.data.access_token )
        this.props.history.push("/pages/Profile")
      })
  }
}


render(){
return (
    <div>
      <section className="container">
        <section className="signup-section">
          <div className="signUp-display">
            <div className="signup-content">
              <h3>Welcome to WeChat</h3>
              <h5>Sign Up to join the Trybe!</h5>
              <form action="" className="sign"></form>
              <div className="sign">
                <input
                  type="text"
                  placeholder="Username"
                  className="userName"
                />
                <br />
                <input
                  type="text"
                  placeholder="johndoe@gmail.com"
                  className="email"
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                />
                <br />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="confirmPassword"
                />
              </div>
              <form action="">
                <input type="checkbox" className="terms-c" />
                <label htmlFor="terms">
                  I accept the <a href="#">terms and conditions</a> that guide
                  the <a href="#">operations</a> of this organization
                </label>
              </form>
              <a
                href="#"
                className="signToDashboard"
                onClick={this.signup}
              >
                Happy Chatting
              </a>

              <p className="p">
                Have an account? <Link to="/Login">Log In</Link>
              </p>
            </div>
            <div className="image-container">
              <img src={image} alt="" className="image" />
              <div className="overlaytext">
                <h3>WeChat</h3>
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
export default Signup;
