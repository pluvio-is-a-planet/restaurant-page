import { createCustomElement, createImageElement } from "./helper.js";

import "../assets/stylesheets/menu.css";

import menuData from "../menuData.json";

import blackBriarReserve from "../assets/images/black-briar-reserve.png";
import bread from "../assets/images/bread.png";
import grilledLeeks from "../assets/images/grilled-leeks.png";
import honningbrewMead from "../assets/images/honningbrew-mead.png";
import horkerStew from "../assets/images/horker-stew.png";
import nordsAle from "../assets/images/nords-ale.png";
import salmonSteak from "../assets/images/salmon-steak.png";
import spicedWine from "../assets/images/spiced-wine.png";
import sweetroll from "../assets/images/sweetroll.png";
import venisonStew from "../assets/images/venison-stew.png";

const imageMap = { blackBriarReserve, bread, grilledLeeks, honningbrewMead, horkerStew, nordsAle, salmonSteak, spicedWine, sweetroll, venisonStew };

function createMenuObject(src, alt, desc, price) {
    return { src, alt, desc, price };
}

function createMenuItem(itemType, itemObject) {
    const container = createCustomElement("div", `menu-item-container ${itemType}-container`, "");
    const title = createCustomElement("h3", `menu-item-name ${itemType}-name`, itemObject.name);
    const image = createImageElement(`menu-item-image ${itemType}-image`, itemObject.src, itemObject.alt);
    const description = createCustomElement("p", `menu-item-desc ${itemType}-desc`, itemObject.desc);
    const price = createCustomElement("p", `menu-item-price ${itemType}-price`, `${itemObject.price} Septims`);

    container.append(title, image, description, price);
    return container;
}

function createMenuPage() {
    const content = document.querySelector("#content");
    content.replaceChildren();

    const menu = createCustomElement("div", "menu", "");

    const drinks = menuData.drinks.map(item => ({...item, src: imageMap[item.id]}));
    const food = menuData.food.map(item => ({...item, src: imageMap[item.id]}));

    const drinkList = createCustomElement("div", "menu-list drinks-list", "");
    const foodList = createCustomElement("div", "menu-list food-list", "");

    drinks.forEach(item => {
        const container = createMenuItem("drink", item);
        drinkList.appendChild(container);
    });

    food.forEach(item => {
        const container = createMenuItem("food", item);
        foodList.appendChild(container);
    });

    menu.append(drinkList, foodList);
    content.appendChild(menu);
}

export default createMenuPage;