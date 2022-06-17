import { getTickDone, renderList } from "./utility.js";

let isShiftPressed = false;
renderList();

window.handleClick = (event) => {
    document.addEventListener("keydown", (event) => {
        isShiftPressed = event.shiftKey;
    });
    getTickDone(event, isShiftPressed);
    isShiftPressed = false;
};