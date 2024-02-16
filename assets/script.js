const navEl= document.querySelector(".mobile_nav");
const hamburgerEl= document.querySelector(".ham-menu");

hamburgerEl.addEventListener("click",()=>{
    navEl.classList.toggle("nav-open");
});