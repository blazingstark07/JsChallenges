const inputValue = document.querySelectorAll("input");
let startSetInterval = false;

const getTotalTime = () => {
    const mins = +inputValue[0].value;
    const secs = +inputValue[1].value;

    return mins * 60 + secs;
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

const updateTimer = (localTotalTime) => {
    startSetInterval = setInterval(() => {
        if (localTotalTime < 1) {
            timeup();
        } else {
            localTotalTime -= 1;
            inputValue[0].value = parseInt(localTotalTime / 60).toFixed(0);
            inputValue[1].value = localTotalTime % 60;
        }
    }, 1000);
};

export const startStopTimer = (event) => {
    const innerContent = event.target.textContent;
    if (innerContent === "start" && validateTime()) {
        startTimerEvents("stop", true, event);
        let totalTIme = getTotalTime();
        updateTimer(totalTIme);
        changeColor("#09a65a");
    } else {
        startTimerEvents("start", false, event);
        clearInterval(startSetInterval);
    }
    editInputState(true);
};