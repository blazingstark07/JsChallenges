import { toggleTimerState, setInput } from "./utility.js";
window.settingHandler = () => {
    setInput(false);
};

window.startHandler = (event) => {
    toggleTimerState(event);
};