
let loginPage = document.querySelector(".login-drp");
let signupPage = document.querySelector(".signup-drp")






const goToSignUp = () =>{
    
    if(signupPage.style.display === "block"){
        signupPage.style.display = "none"
    }else{
        signupPage.style.display = "block"
    }
    
    
}


const goToLogin = () =>{
    if(loginPage.style.display === "block"){
        loginPage.style.display = "none"
    }else{
        loginPage.style.display = "block"
    }
}

