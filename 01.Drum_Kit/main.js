const audioOne = [...document.querySelectorAll("audio")];
const containerLetter = [...document.querySelectorAll("div")];

const currentsAudios = audioOne.map((element) => {
  return element.dataset.key;
});

document.addEventListener(
  "keypress",
  (event) => {
    console.log(event);
    const keyValue = event.key;

    const findAudio = currentsAudios.findIndex((audioCurrentKey) => {
      return audioCurrentKey === keyValue;
    });

    audioOne[findAudio].currentTime = 0;
    audioOne[findAudio].play();
    containerLetter[findAudio].classList.add("playing");
  },
  false
);

document.addEventListener(
  "keyup",
  () => {
    const keyValue = event.key;

    const findAudio = currentsAudios.findIndex((audioCurrentKey) => {
      return audioCurrentKey === keyValue;
    });

    containerLetter[findAudio].classList.remove("playing");
  },
  false
);
