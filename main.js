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