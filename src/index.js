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

    function capitalizeFirst(string) {
        return String(string).charAt(0).toUpperCase() + String(string).slice(1);
    }

    let activeBtn = document.querySelector(".nav-btn.active");

    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
        btn.addEventListener("click", e => {

            activeBtn?.classList.remove("active");
            btn.classList.add("active");
            activeBtn = btn;
            
            pageBuilders[btn.dataset.id]();
        });
    });

    buildHome();
})();