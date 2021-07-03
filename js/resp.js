burger=document.querySelector(".burger");
navbar=document.querySelector(".navbar");
searchnav=document.querySelector(".searchnav");
navlist=document.querySelector(".nav-list");

burger.addEventListener('click',()=>{
    searchnav.classList.toggle("v-class-resp");
    navlist.classList.toggle("v-class-resp");
    navbar.classList.toggle("height-nav-resp");
});

