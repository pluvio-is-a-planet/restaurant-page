import { createCustomElement, createImageElement } from "./helper.js";

import blackBriarReserve from "../assets/images/black-briar-reserve.png";
import bread from "../assets/images/bread.png";
import grilledLeaks from "../assets/images/grilled-leeks.png";
import honningbrewMead from "../assets/images/honningbrew-mead.png";
import horkerStew from "../assets/images/horker-stew.png";
import nordsAle from "../assets/images/nords-ale.png";
import salmonSteak from "../assets/images/salmon-steak.png";
import spicedWine from "../assets/images/spiced-wine.png";
import sweetroll from "../assets/images/sweetroll.png";
import venisonStew from "../assets/images/venison-stew.png";

function createMenuObject({src, alt, desc, price}) {
    return { src, alt, desc, price };
}

function createMenuPage() {
}

export default createMenuPage;