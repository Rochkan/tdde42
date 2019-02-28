
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var naturfakta = this.nextElementSibling;
    if (naturfakta.style.display === "block") {
      naturfakta.style.display = "none";
    } else {
      naturfakta.style.display = "block";
    }
  });
}