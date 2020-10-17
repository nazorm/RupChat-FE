let userName = document.querySelector(".userName");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let confirmedPassword = document.querySelector(".confirmPassword");


const signup = () => {
    if (!email.value.includes('.com')) {
        alert('wrong email format')
    }else if(password.value.length !== 6){
        errorMessage = 'passwords must contain six characters or more'
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
               
              email: email.value,
              username: userName.value,
              password: password.value,
              confirm_password: confirmedPassword.value,
              registration_id: 'wechatPro-test'
            }),
          })
          .then(resp => resp.json())
          .then(data => console.log(data))
    }
 
};

const login = () => {
  fetch('https://wechatpro.herokuapp.com/api/accounts/login',  {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
          Authorization : 'Bearer 93c5f7049eb1b5bdbaa98b8d5596335f59e078b049f937cf8898f29f9b39294a '
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      })
  })
  .then(resp => resp.json())
  .then(data => console.log(data))
};


