const inputValue = document.querySelectorAll("input");
let totalTime = 0;
let startSetInterval = false;
const getTotalTime = () => {
    const mins = +inputValue[0].value;
    const secs = +inputValue[1].value;
    totalTime = mins * 60 + secs;
};

const validateTime = () => {
    const mins = inputValue[0].value;
    const secs = inputValue[1].value;
    if (
        isNaN(mins) ||
        isNaN(secs) ||
        (Number(mins) == mins && mins % 1 !== 0) ||
        (Number(secs) == secs && secs % 1 !== 0)
    ) {
        window.alert("Please enter only integers!!!");
        return false;
    } else {
        if (+mins < 0 || +secs < 0 || +mins > 60 || +secs > 60) {
            window.alert("Please enter valid range");
            return false;
        }
        return true;
    }
};
const editInputState = (val) => {
    for (let i = 0; i < inputValue.length; i++) {
        inputValue[i].disabled = val;
    }
};

export const setting = (val) => {
    editInputState(val);
};

const decideSettingState = (state) => {
    document.getElementsByClassName("settings")[0].disabled = state;
};
const startTimerEvents = (msg, state, event) => {
    event.target.textContent = msg;
    decideSettingState(state);
};
const changeColor = (color) => {
    document.getElementById("circleNode").style.stroke = color;
};
const timeup = () => {
    changeColor("#900a0a");
    clearInterval(startSetInterval);
    document.getElementsByClassName("start")[0].textContent = "start";
    decideSettingState(false);
    window.alert("Time's Up!!!");
};

const updateTimer = () => {
    startSetInterval = setInterval(() => {
        if (totalTime < 1) {
            timeup();
        } else {
            totalTime -= 1;
            inputValue[0].value = parseInt(totalTime / 60).toFixed(0);
            inputValue[1].value = totalTime % 60;
        }
    }, 1000);
};

export const startStopTimer = (event) => {
    const innerContent = event.target.textContent;
    if (innerContent === "start" && validateTime()) {
        startTimerEvents("stop", true, event);
        getTotalTime();
        updateTimer();
        changeColor("#09a65a");
    } else {
        startTimerEvents("start", false, event);
        clearInterval(startSetInterval);
    }
    editInputState(true);
};