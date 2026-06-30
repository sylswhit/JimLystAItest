let btn = document.querySelector(".pic-container");
let theme = document.querySelector(".nav-theme");
let body = document.documentElement;
let img = document.querySelector("img");
let car = document.querySelector(".me-in-car");
let nudge = document.querySelector(".scroll-nudge");
let send = document.querySelector(".add-input");



// flipping idea shared by peers
// recieved help through online sources in works cited
let invert = false;

if (btn) {
    let front = new Image();
    front.src = "test-assets/Sylas_White_1.jpg";
    front.className = "frontside";
    let back = new Image();
    back.src = "test-assets/collage-of-me.jpg";
    back.className = "frontside";
    back.style.display = "none";

    let showingFirst = true;
    btn.appendChild(front);
    btn.appendChild(back);

    btn.addEventListener("dblclick", function () {
        btn.classList.toggle("flipped");
        if (showingFirst) {
            front.style.display = "none";
            back.style.display = "block";
        } else {
            front.style.display = "block";
            back.style.display = "none";
        }
        showingFirst = !showingFirst;
    });
}

// invert theme!
if (theme) {
    theme.addEventListener("click", function () {
        if (invert === false) {
            body.style.filter = "invert(1)";
            body.style.background = "rgba(255, 255, 255, 0.8)";
            // make pictures normal
            document.querySelectorAll("img").forEach(el => {
                el.style.filter = "invert(1) grayscale(100%)";
            });
            invert = true;
            nudge.style.position = "fixed";
        } else {
            body.style.filter = "invert(0)";
            body.style.background = "black";
            // hopefully make picuteres normal again
            document.querySelectorAll("img").forEach(el => {
                el.style.filter = "invert(0) grayscale(100%)";
            });
            invert = false;
            nudge.style.position = "fixed";
        }
    });
}

// clear the inputs after adding
function addSongInfo() {
    document.querySelector(".title").value = "";
    document.querySelector(".image").value = "";
    document.querySelector(".artist").value = "";
}

// Scroll-nudge arrow (accessibility)
const scrollNudge = document.getElementById('scroll-nudge');
if (scrollNudge) {
    scrollNudge.addEventListener('click', () => {
        window.scrollBy({ top: 300, behavior: 'smooth' });
    });
}

if (send) {
    send.addEventListener("click", function () {
        addSongInfo();
    });
}
