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