
// script.js

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.appear');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
        }, index * 300);  // Los elementos aparecerán con un retraso
    });
});
