window.onload = function () {
  const next = document.getElementById("next");
  const back = document.getElementById("back");
  const slides = document.getElementsByClassName("slideshow-item");
  const dots = document.getElementsByClassName("dots");

  let index = 0;
  slide();

  next.addEventListener("click", (e) => {
    update_index(1);
    slide();
    slideNext();
  });

  back.addEventListener("click", (e) => {
    update_index(-1);
    slide();
    slideBack();
  });

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
      index = i;
      slide();
    });
  }

  function update_index(n) {
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
  function slideNext() {
    for (let i = 0; i < slides.length; i++) {
      if (i === index) {
        slides[i].style.transform = `translateX(0%)`;
        slides[i].style.opacity = 1;
      } else {
        slides[i].style.transform = `translateX(${-100 * (index - i)}%)`;
        slides[i].style.opacity = 0;
      }
      // slides[index].style.display = "block";
    }
  }

  function slideBack() {
    for (let i = 0; i < slides.length; i++) {
      if (i === index) {
        slides[i].style.transform = `translateX(0%)`;
      } else {
        slides[i].style.transform = `translateX(${100 * (index - i)}%)`;
      }
      // slides[index].style.display = "block";
    }
  }

  function slide() {
    // Initialize
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("enable");
    }

    dots[index].classList.add("enable");
  }
};
