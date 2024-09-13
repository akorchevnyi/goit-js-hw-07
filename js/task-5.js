function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const bodyElement = document.querySelector("body");
    const btn = document.querySelector(".change-color");
    const spanElement = document.querySelector(".color");

    if (!btn || !bodyElement) {
        console.warn("Failed to find the elements");
    }
    else {
        btn.addEventListener("click", () => {
            const newColor = getRandomHexColor();
            bodyElement.style.backgroundColor = newColor;
            spanElement.textContent = newColor;
        });
    }
});
