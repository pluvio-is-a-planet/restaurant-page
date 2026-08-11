import image from "../assets/images/hulda.jpg";
import { createCustomElement, createImageElement } from "./helper.js";

function buildHomePage() {
    const content = document.querySelector("#content");
    content.replaceChildren();

    const home = createCustomElement("div", "home", "");

    home.appendChild(
        createCustomElement("p", "intro", "Whiterun's oldest hearth, and its loudest laughter.")
    );

    home.appendChild(
        createImageElement("", image, "Hulda, innkeeper of The Bannered Mare")
    );

    home.appendChild(
        createCustomElement("p", "description", "Tucked beneath the shadow of Dragonsreach, The Bannered Mare has poured drinks for farmers, warriors, and wanderers alike for as long as anyone in Whiterun can remember. Step through the doors and you'll find a fire that never quite goes out, a bard who never quite stops singing, and a mug that never quite stays empty."
        )
    );

    content.appendChild(home);
}

export default buildHomePage;