// Function to toggle the hamburger menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Add event listener to window resize to close menu if window is resized above certain breakpoint
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwa51doSEDdqjcPtnz7-opsQBVLjOgwKJfR-4seycQs1WrCgbFG6EcCZraccm2V1tTiGw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000);
           form.reset()

        })
        .catch(error => console.error('Error!', error.message))
})



