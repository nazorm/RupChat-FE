import React from "react";
import "../WeChat.scss";
import "./profile.scss";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: {
        fname: "",
        lname: "",
        number: "",
        address: "",
      },
    };
    this.submit = this.submit.bind(this);
    this.handleUserValue = this.handleUserValue.bind(this)
   //[] this.getNewAccessToken = this.getNewAccessToken.bind(this)
  }

  componentDidMount() {
    let userToken = localStorage.getItem("accessToken");
    fetch("https://wechatpro.herokuapp.com/api/accounts/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((resp) => resp.json())
      .then((d) => {
        document.querySelector(".username").value = d.data.username
        document.querySelector(".email").value = d.data.email
      });
  }
  handleUserValue(e){
e.preventDefault()
this.setState({
  [e.target.name] : e.target.value
})
  }
  
  submit(e) {
    e.preventDefault()
    let userToken = localStorage.getItem("accessToken");
    
    fetch("https://wechatpro.herokuapp.com/api/accounts/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        first_name: this.state.fname,
        last_name: this.state.lname,
        phone_number: this.state.number,
        house_add: this.state.address,
      }),
    })
      .then((resp) => {
        return resp.json()
      } )
      .then((d) => {
        console.log(d);
        //this.getNewAccessToken();
        this.props.history.push("/pages/Account");
      });
  }
  // getNewAccessToken() {
  //   let userRefreshToken = localStorage.getItem("accessToken");
  //   let userToken = localStorage.getItem("accessToken");
  //   fetch("https://wechatpro.herokuapp.com/api/accounts/refresh", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${userToken}`,
  //     },
  //     body:JSON.stringify({
  //       refresh_token: `${userRefreshToken}`
  //     })
  //   })
  //     .then((resp) => resp.json())
  //     .then((d) => {
  //       console.log(d)
  //     });
  // }

  render() {
    return (
      <div>
        <section className="profile-container">
          <h1> You are here 😊!</h1>
          <div className="changeprofile">
            <h3>Let us get to know you</h3>
          </div>
          <form onSubmit={this.submit} className="user-profile">
            <input className="email" placeholder="johndoe@mail.com" />
            <br />
            <input className="username" placeholder="Username" name = ''/>
            <br />
            <input className="firstname" placeholder="First Name" name = 'fname' onChange = {this.handleUserValue}/>
            <br />
            <input className="lastname" placeholder="Last Name " name = 'lname' onChange = {this.handleUserValue} />
            <br />
            <input className="phonenumber" placeholder="+2341234567890" name = 'number' onChange = {this.handleUserValue} />
            <br />
            <input className="home-address" placeholder="House Address" name = 'address' onChange = {this.handleUserValue}/>
            <br />
            <button className="profile-submit-btn">Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Profile;
