// Initialize Lenis

const lenis = new Lenis({
    autoRaf: true,
});
  
// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
console.log(e);
});



// Time on Home Page

const updateTimes = function () {

    const output = document.querySelector("output")
    const now = luxon.DateTime.now().setZone("Europe/Amsterdam")

    output.innerHTML = now.toFormat("HH:mm:ss ZZZZ")
}

updateTimes()

setInterval(function () {
    updateTimes()
}, 1000)




// Mouse Move
let cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        cursor.classList.add("grow");
    });

    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
    });
});