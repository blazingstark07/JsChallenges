export const playAudio = (event) => {
    const getId = event.target.id;
    var audio = new Audio(`./audio/key-${getId}.mp3`);
    audio.play();
};