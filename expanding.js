window.onload = function () {
  let exp = document.getElementsByClassName("expanding");

  for (let i = 0; i < exp.length; i++) {
    exp[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
};
