// Curcular progress Bar start --------------------------------------
// HTML progress Ber -------------------------------------
let element = document.querySelector('#html');
let startValue = 0,
endValue = 360,
speed = 5; 
let progress = setInterval(() => {
    startValue++;
    element.style.background = `conic-gradient(#ffae00 ${startValue}deg, #161420 0deg)`;

    if(startValue === endValue){
        clearInterval(progress);
    };
}, speed)
// HTML progress Ber -------------------------------------

// css progress Ber -------------------------------------
let elementCss = document.querySelector('#css');
let startValueCss = 0,
endValueCss = 340,
speedCss = 5; 
let progressCss = setInterval(() => {
    startValueCss++;
    elementCss.style.background = `conic-gradient(#ffae00 ${startValueCss}deg, #161420 0deg)`;

    if(startValueCss === endValueCss){
        clearInterval(progressCss);
    };
}, speedCss)
// css progress Ber -------------------------------------

// js progress Ber -------------------------------------
let elementjs = document.querySelector('#js');
let startValuejs = 0,
endValuejs = 300,
speedjs = 5; 
let progressjs = setInterval(() => {
    startValuejs++;
    elementjs.style.background = `conic-gradient(#ffae00 ${startValuejs}deg, #161420 0deg)`;

    if(startValuejs === endValuejs){
        clearInterval(progressjs);
    };
}, speedjs)
// js progress Ber -------------------------------------
// Curcular progress Bar  END --------------------------------------


// ----------------Fade-In-Efect From Left side-----------------
const elementFadeLeft = document.querySelectorAll('.fade-left');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = 'fade-left 1s ease 1'
        } else {
            entry.target.style.animation = 'none'
        };
    });
});

elementFadeLeft.forEach(all => {
    observer.observe(all);
});
// ----------------Fade-In-Efect From Left side-----------------

// ----------------Fade-In-Efect From Right side-----------------
const elementFadeRight = document.querySelectorAll('.fade-right');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = 'fade-right 1s ease 1'
        } else {
            entry.target.style.animation = 'none'
        };
    });
});

elementFadeRight.forEach(all => {
    observer.observe(all);
});
// ----------------Fade-In-Efect From Right side-----------------

// ----------------Fade-In-Efect From Down side-----------------
const elementFadeDown = document.querySelectorAll('.fade-down');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = 'fade-down 1s ease 1'
        } else {
            entry.target.style.animation = 'none'
        };
    });
});

elementFadeDown.forEach(all => {
    observer.observe(all);
});
// ----------------Fade-In-Efect From Down side-----------------

// ----------------navigation Bars Selection color chenge efect-----------------
// ---------------Home part-------------
const home = document.querySelectorAll('.home-active');
let navHome = document.querySelector('#navhome');
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            navHome.style.color = '#ffae00'
        } else {
            navHome.style.color = '#e7e7e7'
        };
    });
});
home.forEach(all => {
    observer.observe(all);
});
// ---------------Home part-------------

// ---------------service part-------------
const service = document.querySelectorAll('.service-active');
let navservice = document.querySelector('#navservice');
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            navservice.style.color = '#ffae00'
        } else {
            navservice.style.color = '#e7e7e7'
        };
    });
});
service.forEach(all => {
    observer.observe(all);
});
// ---------------service part-------------

// ---------------project part-------------
const project = document.querySelectorAll('.nav-project');
let navPro = document.querySelector('#project');
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            navPro.style.color = '#ffae00'
            navservice.style.color = '#e7e7e7'
        } else {
            navPro.style.color = '#e7e7e7'
        };
    });
});
project.forEach(all => {
    observer.observe(all);
});
// ---------------project part-------------

// ---------------offer part-------------
const offer = document.querySelectorAll('.nav-offer');
let navoffer = document.querySelector('#navbar-offer');
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            navoffer.style.color = '#ffae00'
        } else {
            navoffer.style.color = '#e7e7e7'
        };
    });
});
offer.forEach(all => {
    observer.observe(all);
});
// ---------------offer part-------------

// ---------------contact part-------------
const contact = document.querySelectorAll('.nav-contact');
let navContact = document.querySelector('#navbar-contact');
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            navContact.style.color = '#ffae00'
        } else {
            navContact.style.color = '#e7e7e7'
        };
    });
});
contact.forEach(all => {
    observer.observe(all);
});
// ---------------contact part-------------
// ----------------navigation Bars Selection color chenge efect-----------------

// ---------------- Contact form email auto massege system ----------------
function sendEmail() {
    let name = document.getElementById('name').value;
    let email = document.querySelector('.input-width-1').value;
    let phone = document.getElementById('phone').value;
    let masseges = document.getElementById('massege').value;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "salmankhan01718098588@gmail.com",
        Password : "E2F74BD3FD133A4FAFFC767739639A74B938",
        To : 'salmankhan01718098588@gmail.com',
        From : 'salmankhan01718098588@gmail.com',
        Subject : email,
        Body : "Name :" + name + '<br/> Email :' + email +'<br/> Phone :' + phone + '<br/> Massege :' + masseges
    })
    .then(
      message => {
        if(message == 'OK'){
            document.querySelector('.success').innerHTML = 'Message send successfully';
            setTimeout(successRemover, 4000);
        }else{
            document.querySelector('.success').innerHTML = 'Failed to send message'
            setTimeout(successRemover, 4000);
        };
      }
    );
};
function successRemover() {
    document.querySelector('.success').innerHTML = ""
};
// ---------------- Contact form email auto massege system ----------------

// -------------------------menu left Function--------------------------
let skillManu= document.querySelector('.left-sibe-bar');
function showSkill() {
    skillManu.style.left = '0rem';
};
function hideSkill() {
    skillManu.style.left = '-20rem';
};
// -------------------------menu left Function--------------------------

// -------------------------menu UP DOWN Function--------------------------
function demo() {
    let element = document.querySelector('.aboutMe-navbar');
    let i = document.querySelector('.fa-bars');

    element.classList.toggle('about-up');
    i.classList.toggle('about-bar');
};
// -------------------------menu UP DOWN Function--------------------------

// -------------------------menu Right Function--------------------------
let rightSibeBar = document.querySelector('.right-sibe-bar');
function navigationShow() {
    rightSibeBar.style.top = '0rem'
}
function navigationHide() {
    rightSibeBar.style.top = '-45rem'
}
// -------------------------menu Right Function--------------------------
