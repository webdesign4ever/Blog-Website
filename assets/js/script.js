/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const toggleNav = () => navbar.classList.toggle("active");

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * HEADER ANIMATION
 * When scrolleddone to 100px header will be active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () =>{
    if(window.scrollY >100){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
     }
});
