window.onload = function () {
  const next = document.getElementById("next");
  const back = document.getElementById("back");
  const slides = document.getElementsByClassName("slideshow-item");
  const dots = document.getElementsByClassName("dots");

  let index = 0;
  slides[index].style.zIndex = 2;
  updateDot();

  next.addEventListener("click", (e) => {
    nextSlide();
    updateIndex(1);
    updateDot();
  });

  back.addEventListener("click", (e) => {
    prevSlide();
    updateIndex(-1);
    updateDot();
  });

  function updateIndex(n) {
    index += n;
    // If more than max reached
    if (index > slides.length - 1) {
      index = 0;
    }
    // If less than min reached
    else if (index < 0) {
      index = slides.length - 1;
    }
  }

  function updateDot () {
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("enable");
    }
    dots[index].classList.add("enable");
  }

  // Slide to next image
  function nextSlide() {
    let nextIndex;
    if (index === slides.length - 1) {
      nextIndex = 0;
    }
    else {
      nextIndex = (index + 1);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slideOutLeft", "slideInRight", "slideOutRight", "slideInLeft");
      slides[i].style.zIndex = 0;
    }

    slides[index].style.zIndex = 1;
    slides[nextIndex].style.zIndex = 1;

    slides[index].style.left = 0;
    slides[nextIndex].style.left = "100%";

    slides[index].classList.add("slideOutLeft");
    slides[nextIndex].classList.add("slideInRight");
  }

  // Slide to previous image
  function prevSlide () {
    let prevIndex;
    if (index === 0) {
      prevIndex = (slides.length - 1);
    }
    else {
      prevIndex = (index - 1)
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slideOutRight", "slideInLeft", "slideOutLeft", "slideInRight");
      slides[i].style.zIndex = 0;
    }

    slides[index].style.zIndex = 1;
    slides[prevIndex].style.zIndex = 1;

    slides[index].style.left = 0;
    slides[prevIndex].style.left = "-100%";

    slides[index].classList.add("slideOutRight");
    slides[prevIndex].classList.add("slideInLeft");
  }
}