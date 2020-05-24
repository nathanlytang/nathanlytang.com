var i = 0;
var txt = "Hi there! I'm";
var speed = 50;

function typeText() {
  if (i < txt.length) {
    document.getElementById("hiDesc").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}

function hamburgerMenu() {
  var x = document.getElementById("navbar");
  if (x.className == "navbar") {
    x.className += " responsive";
    document.getElementById("hamburgerMenuImage").src = "images/exit.svg"
  } else {
    x.className = "navbar";
    document.getElementById("hamburgerMenuImage").src = "images/hamburger.svg"
  }
}