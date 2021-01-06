import React from "react";
import image from "./road-image.jpg";
import "./WeChat.scss";
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
      checked : false,
      registration_id: "wechatPro-test",
    },
    
  };
  this.signup = this.signup.bind(this)
  this.handleChange = this.handleChange.bind(this)
 }
handleChange(e){
  const {type, name, value, checked} = e.target
  type === 'checkbox'? this.setState({[name]: checked}):this.setState({[name]:value})
}
 signup(e) {
  e.preventDefault()
  let terms = document.querySelector(".terms-c");
  let emailFormat = document.querySelector(".emailFormat");
  let  passwordNumber = document.querySelector(".passwordNumber");
  let passwordMatch = document.querySelector(".passwordMatch");
  let checkboxErrorMessage = document.querySelector(".checkboxErrorMessage");
  

  if (!email.value.includes(".com")) {
    emailFormat.innerHTML = "wrong email format"
  } else if (password.value.length < 6) {
    passwordNumber.innerHTML = "passwords must contain six characters or more"
  } else if(confirmedPassword.value !== password.value){
    passwordMatch.innerHTML = "passwords do not match"
  }else if (!terms.checked) {
    checkboxErrorMessage.innerHTML = "do you accept the terms and conditions?"
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
        username: this.state.username,
        password: this.state.password,
        confirm_password: this.state.confirm_password,
        registration_id: "wechatPro-test",
      }),
    })
      .then((resp)=>{
      console.log(resp)
    return resp.json()
      })
      .then((d)=>{
        localStorage.setItem("accessToken", d.data.access_token )
        localStorage.setItem("refreshToken", d.data.refesh_token)
        console.log(d)
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

              <h5>Join the Trybe!</h5>
              <form onSubmit = {this.signup} className="sign">
                  <input type="text" placeholder="Username" className="userName" name = 'username'onChange={this.handleChange} value={this.state.username}/>
                  <input type="text" placeholder="Email" className="email" name='email'onChange={this.handleChange} value={this.state.email}/>
                  <input type="password" placeholder="Password" className="password" name ='password' onChange={this.handleChange} value={this.state.password}/>
                  <input type="password" placeholder="Confirm Password" className="confirmPassword" name='confirm_password' onChange={this.handleChange} value={this.state.confirm_password}/>
                  <div className="terms-c-container">
                    
                    <label htmlFor="terms">
                    <input type="checkbox" className="terms-c" id="terms"
                    onChange={this.handleChange}
                    name='checked'
                    checked = {this.state.checked}
                    />
                          I accept Wechat's <a href="#">terms of use</a>
                      </label>
                  </div>
                <button type="submit" className="signToDashboard">Sign Up</button>
              </form>
              <p className = 'emailFormat'></p>
              <p className = 'passwordNumber'></p>
              <p className = 'passwordMatch'></p>
              <p className = 'checkboxErrorMessage'></p>




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
