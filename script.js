const LoginForm = document.getElementById("LoginForm");
const RegForm = document.getElementById("RegForm");
const Indicator = document.getElementById("Indicator");

  function register(){

    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
   Indicator.style.transform = "translateX(-53px)";
  }

 function login(){

    RegForm.style.transform = "translateX(280px)";
    LoginForm.style.transform = "translateX(230px)";
    Indicator.style.transform = "translateX(-125px)";
  }