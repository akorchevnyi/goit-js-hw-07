const element = document.querySelector("ul#categories");
if (!element) {
    console.warn("I didn't find such a node");
    throw new Error("I didn't find such a node");
}
else if (!element.children.length) {
    console.warn("There are no categories");
    throw new Error("There are no categories");
}

const categories = Array.from(element.children);

console.log("Number of categories: ", categories.length);

categories.forEach(category => {
    const header = category.querySelector("h2");
    const headerText = header ? header.textContent : "Unknown";
    console.log("Category: ", headerText);

    const list = category.querySelector("ul");
    const itemCount = list ? list.children.length : "unknown";
    console.log("Elements: ", itemCount);
});
