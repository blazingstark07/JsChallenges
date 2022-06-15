import { getElementId } from "./utility.js";

var shiftPress = false;

window.handleClick = (event) => {
    document.addEventListener("keydown", (event) => {
        shiftPress = event.shiftKey;
    });
    getElementId(event, shiftPress);
    shiftPress = false;
};