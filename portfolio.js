let btn = document.querySelector(".pic-container");
let theme = document.querySelector(".nav-theme");
let body = document.querySelector("body");
let img = document.querySelector("img");
let car = document.querySelector(".me-in-car");

let front = new Image();
front.src = "test-assets\Sylas_White_1.jpg";
let back = new Image();
back.src = "test-assets\collage-of-me.jpg";
back.className = "frontside";
back.style.display = "none";

// flipping idea shared by peers
// recieved help through online sources in works cited
let showingFirst = true;
let invert = false;
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

// invert theme!
theme.addEventListener("click", function () {
    if (invert === false) {
        body.style.filter = "invert(1)";
        body.style.background = "rgba(255, 255, 255, 0.8)";
        // make pictures normal
        document.querySelectorAll("img").forEach(el => {
            el.style.filter = "invert(1)";
        });
        invert = true;
    } else {
        body.style.filter = "invert(0)";
        body.style.background = "black";
        // make picuteres normal again
        document.querySelectorAll("img").forEach(el => {
            el.style.filter = "invert(0)";
        });
        invert = false;
    }
});



// Scroll-nudge arrow (accessibility)
const scrollNudge = document.getElementById('scroll-nudge');
scrollNudge.addEventListener('click', () => {
    window.scrollBy({ top: 300, behavior: 'smooth' });
});