window.onload = function () {
  var coll = document.getElementsByClassName("expanding");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active"); // this reprsesnts the element with collapsible class which is clicked
      var content = this.nextElementSibling;
      console.log("style:", content.style.display);
      if (content.style.display === "block") {
        // to check if the two values are equal
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
};
