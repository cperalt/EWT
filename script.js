
//targets the hamburger icon
let menu = document.querySelector("#navbar--hamburger");

//targets elements with class navbar_links
let links = document.querySelector(".navbar_links");

//Add an event listener to hamburger menu that upon click toggles the navbar_links display, and also the overflow behavior
//Also does extra styling for a better mobile experience
menu.addEventListener("click", () => {


     if ( links.style.display === "flex") {
         links.style.display = "none";
         document.body.style.overflow = "auto";
     } else {
         links.style.display = "flex";
         links.style.flexDirection = "column";
         links.style.alignItems = "center";
         document.body.style.overflow = "hidden";
     }

});


//targets the other amount input in the first section of the form
const otherAmount = document.querySelector("#other-amount");

//targets the individual donation amount buttons
const radioButtons = document.querySelectorAll(".btn_donations-amt");

// For each radio button add an event listener that upon click changes the other amount input value
radioButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
            otherAmount.value =  btn.value;
        
        })
});
