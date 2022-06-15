import { getElementId, addToUl } from "./utility.js";

var shiftPress = false;
addToUl();

window.handleClick = (event) => {
    document.addEventListener("keydown", (event) => {
        shiftPress = event.shiftKey;
    });
    getElementId(event, shiftPress);
    shiftPress = false;
};