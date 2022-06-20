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
    )
        return false;
    else {
        if (+mins < 0 || +secs < 0 || +mins > 60 || +secs > 60) {
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

export const setInput = (val) => {
    editInputState(val);
};

const setSettingState = (state) => {
    document.getElementsByClassName("settings")[0].disabled = state;
};
const toggleTimerEvents = (msg, state, event) => {
    event.target.textContent = msg;
    setSettingState(state);
};
const changeColor = (color) => {
    document.getElementById("circleNode").style.stroke = color;
};

const timeup = () => {
    changeColor("#900a0a");
    clearInterval(startSetInterval);
    document.getElementsByClassName("start")[0].textContent = "start";
    setSettingState(false);
    setTimeout(() => {
        window.alert("Time's Up!!!");
    }, 0);
};

const updateTimer = (localTotalTime) => {
    startSetInterval = setInterval(() => {
        if (localTotalTime < 1) {
            timeup();
        } else {
            localTotalTime -= 1;
            let minValue = parseInt(localTotalTime / 60).toFixed(0);
            let secValue = localTotalTime % 60;
            minValue < 10 ?
                (inputValue[0].value = `0${minValue}`) :
                (inputValue[0].value = minValue);
            secValue < 10 ?
                (inputValue[1].value = `0${secValue}`) :
                (inputValue[1].value = secValue);
        }
    }, 1000);
};

export const toggleTimerState = (event) => {
    const innerContent = event.target.textContent;
    if (validateTime()) {
        if (innerContent === "start") {
            toggleTimerEvents("stop", true, event);
            let totalTime = getTotalTime();
            updateTimer(totalTime);
            changeColor("#09a65a");
        } else {
            toggleTimerEvents("start", false, event);
            clearInterval(startSetInterval);
        }
    } else {
        window.alert("Invalid Input");
    }
    editInputState(true);
};