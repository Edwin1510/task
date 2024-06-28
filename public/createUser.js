const SIGNUP_URI = `${window.location.origin}/api/auth/signup`;
const SIGNIN_URI =`${window.location.origin}/api/auth/signin`;
const RESET_URI =`${window.location.origin}/api/auth/reset`;

const createAccountButton = document.getElementById("createAccount");

if (createAccountButton) {
    // Adding event listener to submit button
    createAccountButton.addEventListener("click", createAccount);
  }
  
  
  
  function showAlert(message) {
    alert(message);
  }
  
  function createAccount() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (!name) {
      showAlert("Name is not valid");
    }
  
    if (!email) {
      showAlert("Email is not valid");
    }
  
    if (password != confirmPassword) {
      showAlert("Password don't match");
    } else {
      fetch(SIGNUP_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result && result.success) {
            window.location.replace("/");
            alert("signin successfully")
          }
        })
        .catch((error) => console.log(error));
    }
  }
  
  const signinButton = document.getElementById("signin");

  if (signinButton) {
    
    signinButton.addEventListener("click", signinAccount);
  }

  function signinAccount() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!email) {
      showAlert("Email is not valid");
    }
    if (!password) {
      showAlert("Password don't match");
    } else {
      fetch(SIGNIN_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result && result.success) {
            window.location.replace("/index");
          }else{
            window.location.replace("/signup");
            alert("go to signup page")
          }
        })
        .catch((error) => console.log(error));
    }
  }

  const Resetbutton = document.getElementById("resetbutton");
 
  if (Resetbutton){

    Resetbutton.addEventListener("click", ResetAccount );
  }


  function ResetAccount() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const forgotpassword = document.getElementById("changepassword").value;
  
    if (!email) {
      showAlert("Email is not valid");
    }
    if (!password) {
      showAlert("Password don't match");
    } else {
      fetch(RESET_URI, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          forgotpassword,

        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result && result.success) {
            window.location.replace("/");
          }
        })
        .catch((error) => console.log(error));
    }
  }

