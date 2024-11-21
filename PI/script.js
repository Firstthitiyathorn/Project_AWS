// script.js
document.addEventListener("DOMContentLoaded", () => {
    const weightDisplay = document.getElementById("weight");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");

    let weight = 61;

    increaseBtn.addEventListener("click", () => {
        weight++;
        weightDisplay.textContent = weight;
    });

    decreaseBtn.addEventListener("click", () => {
        if (weight > 0) { // Prevent weight from going below 0
            weight--;
        }
        weightDisplay.textContent = weight;
    });
});
