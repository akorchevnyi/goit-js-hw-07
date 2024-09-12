const inputElement = document.querySelector("input#name-input");
const spanElement = document.querySelector("span#name-output");

if (!inputElement || !spanElement) {
    console.warn("The elements were not found");
}
else {
    inputElement.addEventListener("input", onInputChange);

    function onInputChange(event) {
        spanElement.textContent = event.target.value.trim() || "Anonymous";
    }
}
