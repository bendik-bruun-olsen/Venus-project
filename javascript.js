window.onload = function () {
  slideshow(1);
}

var slidePos = 1;
slideshow(slidePos);

function slideChange(n) {
  slideshow((slidePos += n));
}

function currentSlide(n) {
  slideshow((slidePos = n));
}

function slideshow(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-item");
  var circles = document.getElementsByClassName("dots");

  // Switches back to first if end reached
  if (n > slides.length) {
    slidePos = 1;
  }

  // Switches to last if position 0 reached
  if (n < 1) {
    slidePos = slides.length;
  }
  // Disable all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Disable all dots
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  // Initialize slides and dots
  slides[slidePos - 1].style.display = "block";
  circles[slidePos - 1].className += " enable";
}
