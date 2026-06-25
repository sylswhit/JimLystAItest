let btn = document.querySelector(".pic-container");

let front = new Image();
front.src = "Sylas White_1.jpg";
let back = new Image();
back.src = "collage-of-me.jpg";

// idea shared by peers
// recieved help through online sources in works cited
let showingFirst = true;
btn.appendChild(front);

btn.addEventListener("dblclick", function () {
    btn.classList.add("flipped");
    if (!showingFirst) {
        btn.appendChild(back);
        front.style.display = "none";
        back.style.display = "block";
        showingFirst = true;
    } else {
        front.style.display = "block";
        back.style.display = "none";
        showingFirst = false;
    }
});
