function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
}

function createBoxes(amount) {
    const boxes = [];
    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        boxes.push(`<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`);
    }
    boxesElement.innerHTML = boxes.join("\n");
}

const inputField = document.querySelector(".controls-input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesElement = document.querySelector("#boxes");

if (!inputField || !createBtn || !destroyBtn || !boxesElement) {
    throw new Error("One or more required elements are missing from the DOM");
}

createBtn.addEventListener("click", () => {
    const value = Number(inputField.value);

    if (isNaN(value) || !(value > 0 && value <= 100)) {
        console.warn("Unappropriated value");
        return;
    }

    createBoxes(value);
});

destroyBtn.addEventListener("click", () => {
    boxesElement.innerHTML = null;
});
