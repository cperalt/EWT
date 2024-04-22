
let menu = document.querySelector("#navbar--hamburger");
let links = document.querySelector(".navbar_links");

menu.addEventListener("click", () => {

// let menu = document.querySelector("#navbar--hamburger");
// let links = document.querySelector(".navbar_links");


     if ( links.style.display === "flex") {
         links.style.display = "none";
     } else {
         links.style.display = "flex";
         links.style.flexDirection = "column";
         links.style.alignItems = "center";
     }

});

