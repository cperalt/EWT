
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



const otherAmount = document.querySelector("#other-amount");
const radioButtons = document.querySelectorAll(".btn_donations-amt");

// For each radio button add an event listener that upon click changes the other amount input value
radioButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
            otherAmount.value =  btn.value;
        
        })
});
