import { getTickDone, addToUl } from "./utility.js";

let shiftPress = false;
addToUl();

window.handleClick = (event) => {
    document.addEventListener("keydown", (event) => {
        shiftPress = event.shiftKey;
    });
    getTickDone(event, shiftPress);
    shiftPress = false;
};