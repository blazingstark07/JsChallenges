export const playAudio = (event) => {
  const getId = event.target.id;
  if (getId) {
    const audio = new Audio(`./audio/key-${getId}.mp3`);
    audio.play();
  }
};
