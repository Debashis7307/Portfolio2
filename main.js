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
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 50);
}
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