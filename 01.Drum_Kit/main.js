const audios = [...document.querySelectorAll("audio")];
const containerLetter = [...document.querySelectorAll("div")];

const currentsAudios = audios.map((element) => {
  return element.dataset.key;
});

document.addEventListener("keydown", (event) => {
  const audioFound = findAudio(event);
  audios[audioFound].currentTime = 0;
  audios[audioFound].play();
  containerLetter[audioFound].classList.add("playing");
});

document.addEventListener("keyup", (event) => {
  const audioFound = findAudio(event);
  containerLetter[audioFound].classList.remove("playing");
});

function findAudio(event) {
  const keyValue = event.key;
  return currentsAudios.findIndex(
    (audioCurrentKey) => audioCurrentKey === keyValue
  );
}
