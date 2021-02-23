var i = 0;
var txt = "Hi there! I'm";
var speed = 50;
const toggle = document.getElementById("toggle");

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

document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "a319c2c4b18a46beada55d907ca135d3", divId: "adobe-dc-view" });
    adobeDCView.previewFile({
        content: { location: { url: "Nathan Tang - Resume.pdf" } },
        metaData: { fileName: "Nathan Tang - Resume.pdf" }
    }, { embedMode: "IN_LINE" });
});

function setTheme(theme, persist) {
    const on = theme;
    const off = theme === 'light' ? 'dark' : 'light'

    const doc = document.documentElement;
    doc.classList.add(on);
    doc.classList.remove(off);

    if (persist) {
        localStorage.setItem('preferred-theme', theme);
    }
}

function updateUI(theme) {
    toggle.checked = theme === 'dark';
}

toggle.addEventListener('click', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    setTheme(theme, true);
    updateUI(theme);
});

const osPreference = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
const preferredTheme = localStorage.getItem('preferred-theme') || osPreference;

setTheme(preferredTheme, false);
updateUI(preferredTheme);

if (preferredTheme === 'light') {
    document.getElementById("toggle").checked = false;
} else {
    document.getElementById("toggle").checked = true;
}