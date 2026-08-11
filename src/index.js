import backgroundImage from "./assets/images/bannered-mare-interior.jpg";
import buildHome from "./scripts/home.js";
import buildMenu from "./scripts/menu.js";
import buildAbout from "./scripts/about.js";

import "./assets/stylesheets/index.css";

(() => {
    const pageBuilders = {
        home: buildHome,
        menu: buildMenu,
        about: buildAbout
    };

    let activeBtn = document.querySelector(".nav-btn.active");

    function setActiveButton(button) {
        activeBtn?.classList.remove("active");
        button.classList.add("active");
        activeBtn = button;
    }

    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
        btn.addEventListener("click", e => {

            setActiveButton(btn);
            
            pageBuilders[btn.dataset.id]();
        });
    });

    buildHome();
    setActiveButton(document.querySelector("#home-btn"));
})();