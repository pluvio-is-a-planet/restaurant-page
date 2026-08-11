import { createCustomElement, createImageElement } from "./helper.js";

import "../assets/stylesheets/about.css";

function buildAboutPage() {
    const content = document.querySelector("#content");
    content.replaceChildren();

    const about = createCustomElement("div", "about", "");
    about.appendChild(createCustomElement("h2", "about-heading", "Our Story"));

    about.appendChild(createCustomElement("p", "about-paragraph", "Founded generations ago along the old trade road into Whiterun, The Bannered Mare has passed through the hands of only a handful of keepers, each one adding their own mark to its worn floarboords and smoke-stained beams. What began as a modest stopover for merchants, grew over the decades into the heart of the city of Whiterun."));
    about.appendChild(createCustomElement("p", "about-paragraph", "Today the inn is run by Hulda, a sharp-tongued but warm-hearted proprietor who knows every regular by name, and every troublemaker by reputation. The upstairs rooms have sheltered weary caravan guards, traveling minstrels, and the occasional noble passing through. The ground floor has hosted marriage proposals, sworn oaths, and more than a few friendly brawls."));
    about.appendChild(createCustomElement("p", "about-paragraph", "Usually you'll find a bard playing by the hearth, filling the room with their music long into the night. On busy nights it spills out past the doors and into the market square, tangled up with woodsmoke and the smell of something roasting. Regulars swear the fire's never gone fully cold, though none of them can say how long it's actually been burning"));
    about.appendChild(createCustomElement("p", "about-paragraph", "Whether you're passing through for a single night or looking to make Whiterun your home, The Bannered Mare welcomes you the same way it welcomes everyone: with a full mug and an open seat by the fire."));

    content.appendChild(about);
}

export default buildAboutPage;