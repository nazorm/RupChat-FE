import React from 'react'
import '../WeChat.css'
import './profile.css';

class  Profile extends React.Component{
    constructor(){
        super()
        this.state = {
          profile : {
              
          }
        }
        this.submit = this.submit.bind(this)
        this.edit = this.edit.bind(this)
    }
  
    componentDidMount(){
        let userToken = localStorage.getItem("accessToken")
        fetch('https://wechatpro.herokuapp.com/api/accounts/profile', {
            method : 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization:
                  `Bearer ${userToken}`,
            },
        })
        .then(resp => resp.json())
        .then((d)=>{
             this.getuserinfo(d.data)
            
        })
    }
getuserinfo(d){
    let userName = document.querySelector(".username")
    let email = document.querySelector(".email")

document.querySelector(".firstname").disabled = true;
document.querySelector(".lastname").disabled = true;
document.querySelector(".phonenumber").disabled = true;
document.querySelector(".home-address").disabled = true;

    userName.value = d.username
    email.value = d.email;
    
}
    edit(){
        document.querySelector(".firstname").disabled = false;
        document.querySelector(".lastname").disabled = false;
        document.querySelector(".phonenumber").disabled = false;
        document.querySelector(".home-address").disabled = false;
    
     }
     submit(){
        let userToken = localStorage.getItem("accessToken")
        let fname =  document.querySelector(".firstname");
        let lname =  document.querySelector(".lastname")
        let number = document.querySelector(".phonenumber")
        let  address = document.querySelector(".home-address")

         fetch('https://wechatpro.herokuapp.com/api/accounts/profile', {
            method: 'PUT', 
            headers: {
                "Content-Type": "application/json",
                Authorization:
                  `Bearer ${userToken}`,
            },
            body:JSON.stringify({
                "first_name": fname.value,
                "last_name": lname.value,
                "phone_number": number.value,
                "house_add": address.value
            })
         })
         .then(resp => resp.json())
         .then((d)=>{
             console.log(d)
         })
     }

    render(){
        return(
            <div> 
               <section className = "profile-container">
                   <h1> You are here 😊!</h1>    
                   <div className = "changeprofile">
                   <h3>Let us get to know you</h3>
                <button onClick = {this.edit}>edit</button>
                   </div>
                  
                 <div className = "user-profile">
                     <input className = "email" placeholder = "johndoe@mail.com"/><br/>
                     <input className = "username" placeholder = "Username"/><br/>
                     <input className = "firstname"  placeholder = "First Name"/><br/>
                     <input className = "lastname"  placeholder = "Last Name "/><br/>
                     <input className = "phonenumber" placeholder = "+2341234567890"/><br/>
                     <input className = "home-address" placeholder = "House Address"/><br/>
                     <button className = "profile-submit-btn" onClick = {this.submit}>Submit</button>
                 </div>
               </section>
            </div>
        )
    }
   
}


export default Profile