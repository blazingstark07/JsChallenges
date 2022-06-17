import { startStopTimer, setting } from "./utility.js";
window.settingHandler = () => {
    setting(false);
};

window.startHandler = (event) => {
    startStopTimer(event);
};