function createCustomElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

function createImageElement(className, src, alt) {
    const image = document.createElement("img");
    image.className = className;
    image.src = src;
    image.alt = alt;
    return image;
}

export { createCustomElement, createImageElement };