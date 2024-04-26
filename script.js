
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

//targets the first next button
const firstNext = document.querySelector("#first_next");

//targets the second next button
const secondNext = document.querySelector("#second_next");

//targets the first section of the form
const firstSection = document.querySelector(".section_square");

//targets the second section of the form
const secondSection = document.querySelector(".section_square-2");

//targets the third section of the form
const thirdSection = document.querySelector(".section_square-3");

//Event listener to first next button that will show the next section and hide current
firstNext.addEventListener("click", () => {
    if (secondSection.style.display == "" ) {
        secondSection.style.display = "flex";
        firstSection.style.display = "none";
    }
});

secondNext.addEventListener("click", () => {

    if (thirdSection.style.display == "" ) {
        thirdSection.style.display = "flex";
        secondSection.style.display = "none";
    }
});

//targets the first previous button
const firstPrevious = document.querySelector("#first_previous");

firstPrevious.addEventListener("click", () => {
    if (secondSection.style.display == "flex" ) {
        secondSection.style.display = "none";
        firstSection.style.display = "flex";
    }
});

//targets the second previous button
const secondPrevious = document.querySelector("#second_previous");

secondPrevious.addEventListener("click", () => {
    if (thirdSection.style.display == "flex" ) {
        thirdSection.style.display = "none";
        secondSection.style.display = "flex";
    }
});

const paymentNumbers = document.querySelectorAll(".payment_number");

paymentNumbers.forEach((btn) => {
    btn.addEventListener("keydown", () => {

         // Regrex checks for non numerical characters, if no match it will return -1 which means all characters are numbers
         // I set the condition to check if its not -1 meaning non numerical numbers were typed. I run an alert to notify
         // the user to enter only numbers.
        if ( event.key.search(/\D/g) != -1 && event.key !== "Backspace" && event.key !== "Enter") {
            window.alert("PLEASE ENTER ONLY NUMBERS");

            //prevents the key from being pressed/added to the cardnumber.value
            event. preventDefault()

        }
    })
});


const cardNumber = document.querySelector("#cardnumber");

console.log(cardNumber);
