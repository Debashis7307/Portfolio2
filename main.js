var typed = new Typed(".text",{
    strings: ["Frontend Developer", "Backend Developer", "Programmer ", "Content Creator", "Graphic Designer", "Artist", "Learner...." ],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});

// /////////////  Active menu ////////////
// let menuLi = document.querySelectorAll('header ul li a');
// let section = document.querySelectorAll('section');

// function activeMenu(){
//     let len = section.length;
//     while(--len && window.scrollY + 97 < section[len].offsetTop){}
//     menuLi.forEach(sec => sec.classList.remove("active"));
//     menuLi[len].classList.add("active");
// }

// activeMenu();
// window.addEventListener("scroll",activeMenu);

// scroll sections

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.screenY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             //active navbar links
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         }
//     });
//     // sticky header
//     let header = document.querySelector('header');

//     header.classList.toggle('sticky', window.scrollY >5);
// }
////////// skill circle //////////
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})

const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;

// //toggle icon navbar///
// let menuIcon = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist");

// menuIcon.onclick = ()=>{
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// }


// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }


// let sections = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('header nav a')

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
//             })
//         }
//     });


// let header = document.querySelector('.header');
// header.classList.toggle('sticky',window.scrollY > 100);

// menuIcon.classList.remove('bx-x');
// navbar.classList.remove('active');

// };

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            })
        }
    });


let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}