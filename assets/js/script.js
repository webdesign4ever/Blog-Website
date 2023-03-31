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

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems=Number(getComputedStyle(slider).getPropertyValue("--slider-items"));

let totalSlideableItems=sliderContainer.childElementCount-totalSliderVisibleItems;

let currentSlidePos=0;

const moveSliderItem =function(){
sliderContainer.style.transform=`translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext=function(){
  const slideEnd=currentSlidePos >= totalSlideableItems;
  if(slideEnd){
    currentSlidePos=0;
  }
  else{
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click",slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev=function(){
  if(currentSlidePos <= 0){
    currentSlidePos=totalSlideableItems;
  }
  else{
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click",slidePrev);

/**
 * RESPONSIVE
 */

window.addEventListener("resize",function(){

   totalSliderVisibleItems=Number(getComputedStyle(slider).getPropertyValue("--slider-items"));

 totalSlideableItems=sliderContainer.childElementCount-totalSliderVisibleItems;

 moveSliderItem();
});