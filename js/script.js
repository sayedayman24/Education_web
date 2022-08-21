// Show navbar for Click at button
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
};

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
};

// Show Or Hide Site for Login And Register
let accountForm = document.querySelector('.account-form');

document.querySelector('#account-btn').onclick = () => {
    accountForm.classList.add('active');
};

document.querySelector('#close-form').onclick = () => {
    accountForm.classList.remove('active');
};

// Swtich on Login and Register Form Display On Click
let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

let registerForm = document.querySelector('.account-form .register-form')
let loginForm = document.querySelector('.account-form .login-form')

registerBtn.onclick = () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');

    registerForm.classList.add('active');
    loginForm.classList.remove('active');
}

loginBtn.onclick = () => {
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');

    loginForm.classList.add('active');
    registerForm.classList.remove('active');
}