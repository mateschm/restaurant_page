import "./stylesheet.css";
import {home} from "./home";
import {about} from "./about"

home();

const navButtons = document.querySelectorAll(`nav>button`);

navButtons.forEach((button) => {
    button.addEventListener(`click`, () => {
        switch(button.textContent) {
            case `HOME`:
                home();
                break;
            case `ABOUT`:
                about();
                break;
        }
    });
});