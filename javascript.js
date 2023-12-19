window.onload = function () {
const next = document.getElementById("next")
const back = document.getElementById("back")
const slides = document.getElementsByClassName("slideshow-item")
const dots = document.getElementsByClassName("dots")

let index = 0;
slide();

next.addEventListener("click", (e) => {
  update_index(1)
  slide()
});

back.addEventListener("click", (e) => {
  update_index(-1)
  slide()
});

for (let i = 0; i < dots.length; i++) {
  (function(i) {
    dots[i].addEventListener("click", function() {
      dots[i].classList.add("enable");
    })
  })
}

function update_index(n) {
  index += n
  // If more than max reached
  if (index > (slides.length - 1)) {
    index = 0
  }
  // If less than min reached
  else if (index < 0) {
    index = slides.length - 1
  }
};

function slide() {

  // Initialize
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("enable");
  }

  slides[index].style.display = "block";
  dots[index].classList.add("enable");
};
}
// var slidePos = 1;
// slideshow(slidePos);

// function slideChange(n) {
//   slideshow((slidePos += n));
// }

// function currentSlide(n) {
//   slideshow((slidePos = n));
// }

// function slideshow(n) {
//   var i;
//   var slides = document.getElementsByClassName("slideshow-item");
//   var circles = document.getElementsByClassName("dots");

//   // Switches back to first if end reached
//   if (n > slides.length) {
//     slidePos = 1;
//   }

//   // Switches to last if position 0 reached
//   if (n < 1) {
//     slidePos = slides.length;
//   }
//   // Disable all slides
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   // Disable all dots
//   for (i = 0; i < circles.length; i++) {
//     circles[i].className = circles[i].className.replace(" enable", "");
//   }
//   // Initialize slides and dots
//   slides[slidePos - 1].style.display = "block";
//   circles[slidePos - 1].className += " enable";
// }
