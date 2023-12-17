var slidePos = 1;
slideshow(slidePos);

function slideChange(n) {
    slideshow(slidePos += n);
}

function currentSlide(n) {
    slideshow(slidePos = n);
}

function slideshow(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow-item");
    var circles = document.getElementsByClassName("dots");

    if (n > slides.length) {slidePos = 1}

    if (n < 1) {slidePos = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePos-1].style.display = "block";
    circles[slidePos-1].className += " enable";
}