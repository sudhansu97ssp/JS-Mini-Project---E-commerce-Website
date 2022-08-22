/* Navigation bar Handling */

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/* Sign up and Login form handling */

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login-form");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });
});

/* Sign up Form user data Handling */

function signUp(e) {
  event.preventDefault();

  //console.log("running");

  var username = document.getElementById("signupUsername").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var cpass = document.getElementById("cpassword").value;

  var user = {
    username: username,
    email: email,
    password: pass,
    cpassword: cpass,
  };

  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  validateSignup();
}

/* Signup validation */

function validateSignup(e) {
  event.preventDefault;

  var username = document.getElementById("signupUsername").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var cpass = document.getElementById("cpassword").value;

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  console.log(data);

  var returnVal = true;

  if (data.username.length < 6) {
    alert("Username length should be atleast 8.");
  }

  if (data.username.length == 0) {
    alert("Length of username cannot be zero");
  }

  // if (data.email.includes("@")) {
  //   alert("Email is not Correct");
  // }

  if (data.password.length < 8) {
    alert("Password length should be more than 8");
  }
  if (data.username.length >= 8 && data.password.length >= 8) {
    alert("User Registration Successful");
  }
}

/* Login form handling */

function loginForm(e) {
  event.preventDefault;

  var username = document.getElementById("username").value;
  var pass = document.getElementById("pass").value;
  var alertMessage = document.getElementById("alert");

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  console.log(data);

  if (user == null) {
    alertMessage.innerHTML = "Username Invalid";
  } else if (username == data.username && pass == data.password) {
    alert("Login Successful");
  } else if (username == data.username && pass == data.password) {
  } else {
    alertMessage = "Password invalid";
  }
}
