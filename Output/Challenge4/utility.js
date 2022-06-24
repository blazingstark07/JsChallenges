const getRandomJiggle = () => {
    return Math.floor(Math.random() * 53);
};

const utilityKeys = ["CAPSLOCK", "TAB", "SHIFT", "ENTER"];

const startRandomJiggle = () => {
    const randomKey = getRandomJiggle();
    const randomJiggleKey = document.querySelectorAll(".key")[randomKey];

    randomJiggleKey.className === "key" ?
        (randomJiggleKey.className = "key jiggle") :
        (randomJiggleKey.className = "key utility jiggle");
};

const changeJiggle = (event) => {
    const jigglingKey = document.getElementsByClassName("jiggle")[0];
    const pressedKey = event.key.toUpperCase();
    const jigglingKeyName = jigglingKey.getAttribute("data-key");

    if (jigglingKeyName === pressedKey) {
        startRandomJiggle();
        utilityKeys.includes(jigglingKeyName) ?
            (jigglingKey.className = "key utility") :
            (jigglingKey.className = "key");
    }
};

document.addEventListener("keydown", changeJiggle);

export const startJiggle = () => {
    startRandomJiggle();
};