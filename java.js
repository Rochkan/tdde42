
/*
function toggleButtons() {
  var buttons = document.getElementById("buttons");
  var toggleButton = document.getElementById("toggleBtn");
  if (buttons.style.display == "none") {
    buttons.style.display = "flex";
    toggleButton.innerHTML = "🐵"
  } else {
    buttons.style.display = "none";
    toggleButton.innerHTML = "🙈"
  }
}
*/
function toggleButtons() {
  var buttons = document.getElementById("buttons");
  var toggleButton = document.getElementById("toggleBtn");
  if (buttons.style.display == "flex") {
    buttons.style.display = "none";
    toggleButton.innerHTML = "<img src='images/menubar.svg'>"
  } else {
    buttons.style.display = "flex";
    toggleButton.innerHTML = "<img src='images/menubar.svg' style='transform:rotate(90deg)'>"
  }
}

