hamburger_icon = document.querySelector(".hamburger-icon");

if (hamburger_icon) {
    hamburger_icon.addEventListener("click", ()=> {
        document.querySelector(".hamburger-icon").classList.toggle("active");
        document.querySelector(".hamburger-menu").classList.toggle("active");
        

    });
}

const navLinksChildren = document.querySelectorAll(".nav__link");
console.log(navLinksChildren)


navLinksChildren.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        document.querySelector(".nav__link.active")?.classList.remove("active");
        navLink.classList.add("active");
        
    });
});

document.addEventListener("click", (event) => {

    if(!hamburger_icon.contains(event.target) && !document.querySelector(".hamburger-menu").contains(event.target)) {
        
        document.querySelector(".hamburger-menu").classList.remove("active");
        document.querySelector(".hamburger-icon").classList.remove("active");


    }


});