const leftSlideshowButton = document.querySelector("#slideshow-left-btn");
const rightSlideshowButton = document.querySelector("#slideshow-right-btn");

const slides = document.querySelectorAll("#slides .slide");
let selectedSlide = 0;

const updateSlides = () => {
  slides.forEach((s) => {
    if (s.classList.contains("active")) {
      s.classList.remove("active");
    }
  });

  slides[selectedSlide].classList.add("active");
};

const handleLeftButtonClick = () => {
  if (selectedSlide == 0) {
    selectedSlide = slides.length - 1;
  } else {
    selectedSlide--;
  }

  updateSlides();
};

const rightRightButtonClick = () => {
  if (selectedSlide == slides.length - 1) {
    selectedSlide = 0;
  } else {
    selectedSlide++;
  }

  updateSlides();
};

leftSlideshowButton.addEventListener("click", handleLeftButtonClick);
rightSlideshowButton.addEventListener("click", rightRightButtonClick);
