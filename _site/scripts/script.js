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
}, 1000);