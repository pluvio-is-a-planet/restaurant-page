import { createCustomElement, createImageElement } from "./helper.js";

function buildAboutPage() {
    const content = document.querySelector("#content");
    content.replaceChildren();

    const about = createCustomElement("div", "about", "");

    content.appendChild(about);
}

export default buildAboutPage;