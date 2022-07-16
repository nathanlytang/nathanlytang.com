// Type text
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

// Responsive menu
function hamburgerMenu() {
    var x = document.getElementById("navbar");
    var y = document.getElementById("logo");
    if (x.className == "navbar") {
        x.className += " responsive";
        y.style.display = "none";
        document.getElementById("hamburgerMenuImage").style.visibility = "hidden"
        document.getElementById("exitMenuImage").style.visibility = "visible"
        document.getElementById("hamburgerMenuImage").style.opacity = "0"
        document.getElementById("exitMenuImage").style.opacity = "1"
    } else {
        x.className = "navbar";
        y.style.display = "initial";
        document.getElementById("hamburgerMenuImage").style.visibility = "visible"
        document.getElementById("exitMenuImage").style.visibility = "hidden"
        document.getElementById("hamburgerMenuImage").style.opacity = "1"
        document.getElementById("exitMenuImage").style.opacity = "0"
    }
}

// PDF viewer
document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "a319c2c4b18a46beada55d907ca135d3", divId: "adobe-dc-view" });
    adobeDCView.previewFile({
        content: { location: { url: "../assets/Nathan Tang - Resume.pdf" } },
        metaData: { fileName: "Nathan Tang - Resume.pdf" }
    }, { embedMode: "IN_LINE" });
}, {passive: true});

// Theme switcher
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

// Collapsibles
var col = document.getElementsByClassName("projectCollapseButton");
var i;

for (i = 0; i < col.length; i++) {
    col[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function expandAll(element) {
    var col = document.getElementsByClassName("projectCollapseButton");
    var i;

    if (element.value === "collapsed") {
        element.value = "expanded";
        element.innerHTML = "Collapse All ▲";
        for (i = 0; i < col.length; i++) {
            col[i].classList.add("active");
            var content = col[i].nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        };

    } else if (element.value === "expanded") {
        element.value = "collapsed";
        element.innerHTML = "Expand All ▼";
        for (i = 0; i < col.length; i++) {
            col[i].classList.remove("active");
            var content = col[i].nextElementSibling;
            content.style.maxHeight = null;
        };
    }
}