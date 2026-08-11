import { createCustomElement, createImageElement } from "./helper.js";

import "../assets/stylesheets/menu.css";

import menuData from "../menuData.json";

import blackBriarReserve from "../assets/images/menu/black-briar-reserve.png";
import bread from "../assets/images/menu/bread.png";
import grilledLeeks from "../assets/images/menu/grilled-leeks.png";
import honningbrewMead from "../assets/images/menu/honningbrew-mead.png";
import horkerStew from "../assets/images/menu/horker-stew.png";
import nordsAle from "../assets/images/menu/nords-ale.png";
import salmonSteak from "../assets/images/menu/salmon-steak.png";
import spicedWine from "../assets/images/menu/spiced-wine.png";
import sweetroll from "../assets/images/menu/sweetroll.png";
import venisonStew from "../assets/images/menu/venison-stew.png";

const imageMap = { blackBriarReserve, bread, grilledLeeks, honningbrewMead, horkerStew, nordsAle, salmonSteak, spicedWine, sweetroll, venisonStew };

function createMenuObject(src, alt, desc, price) {
    return { src, alt, desc, price };
}

function createMenuItem(itemType, itemObject) {
    const container = createCustomElement("div", `menu-item-container ${itemType}-container`, "");
    const title = createCustomElement("h4", `menu-item-name ${itemType}-name`, itemObject.name);
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

    menu.appendChild(
        createCustomElement("h2", "menu-heading", "Offerings")
    );

    const drinks = menuData.drinks.map(item => ({...item, src: imageMap[item.id]}));
    const food = menuData.food.map(item => ({...item, src: imageMap[item.id]}));

    const drinkList = createCustomElement("div", "menu-list drinks-list", "");
    const foodList = createCustomElement("div", "menu-list food-list", "");

    drinkList.appendChild(
        createCustomElement("h3", "menu-list-title drinks-list-title", "To Drink")
    );

    foodList.appendChild(
        createCustomElement("h3", "menu-list-title food-list-title", "To Eat")
    );

    drinks.forEach(item => {
        drinkList.appendChild(
            createMenuItem("drink", item)
        );
    });

    food.forEach(item => {
        foodList.appendChild(
            createMenuItem("food", item)
        );
    });

    menu.append(drinkList, foodList);
    content.appendChild(menu);
}

export default createMenuPage;