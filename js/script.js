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

// Swiper for Slider Home Section
var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
});

// Swiper for Slider Home Courses Section
var swiper = new Swiper(".home-courses-slider", {
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween:20,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        }
    }
});

// Swiper for Slider Techers Sectin in About page
var swiper = new Swiper(".teachers-slider", {
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween:20,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        }
    }
});

// Swiper for Slider Students Review Sectin in About page
var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween:20,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        }
    }
});

// Swiper for Slider Logo Container in About page
var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        450:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
        991:{
            slidesPerView:4,
        },
        1200:{
            slidesPerView:5,
        }
    }
});

// Swiper for Frequently Asked Questions To Show p pharagraph text
let accordion = document.querySelectorAll('.freq .accordion-container .accordion');

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(dion => dion.classList.remove('active'));
        acco.classList.toggle('active');
    };
});

// Swiper for Button To Show image
document.querySelector('.load-more .btn').onclick = () => {
    document.querySelectorAll('.courses .box-container .hide').forEach(show => {
        show.style.display = 'block';
    });
    document.querySelector('.load-more .btn').style.display = 'none';
};





