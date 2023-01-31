//navbar to menu-btn clicked 
let navbar=document.querySelector('.header .navbar')
document.getElementById('menu-btn').onclick = ()=>{
    navbar.classList.add('active')
    document.getElementById('close-navbar').style.display='block'
}
document.getElementById('close-navbar').onclick = ()=>{
    navbar.classList.remove('active')
    document.getElementById('close-navbar').style.display='none'
}


//form user show/hide
let registerBtn=document.querySelector('.account-form .register-btn');
let loginBtn=document.querySelector('.account-form .login-btn');

registerBtn.onclick=()=>{
    registerBtn.classList.add('active')
    loginBtn.classList.remove('active')
    document.querySelector('.form-login').classList.remove('active')
    document.querySelector('.form-register').classList.add('active')
}
loginBtn.onclick=()=>{
    registerBtn.classList.remove('active')
    loginBtn.classList.add('active')
    document.querySelector('.form-login').classList.add('active')
    document.querySelector('.form-register').classList.remove('active')
}

let accountForm=document.querySelector('.account-form');
document.getElementById('account-btn').onclick=()=>{
    accountForm.classList.add('active')
}
document.getElementById('close-form').onclick=()=>{
    accountForm.classList.remove('active')
}

// <!-- Initialize Swiper -->

var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    loop:true,
    grabCursor:true,
});

// <!-- Initialize Swiper Courses -->

var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
            breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
});


//about teachers slider 
var swiper = new Swiper(".teachers-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//about reviews slider 
var swiper = new Swiper(".reviews-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//contact logo slider
var swiper = new Swiper(".logo-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

//contact faqs hide or show
let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
  acco.onclick = () =>{
    accordion.forEach(dion => dion.classList.remove('active'));
    acco.classList.toggle('active');
  };
});

//courses hide or show 
document.querySelector('.load-more .btn').addEventListener("click",()=>{
    document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
    show.style.display = 'block';
  });
  document.querySelector('.load-more .btn').style.display = 'none';
})







