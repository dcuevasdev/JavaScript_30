const hour = document.querySelector(".hour-hand");
const minute = document.querySelector(".min-hand");
const second = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondToDegrees = (seconds / 60) * 360 + 90;
  second.style.transform = `rotate(${secondToDegrees}deg)`;
  second.style.background = "red";

  const minutes = now.getMinutes();
  const minutesToDegrees = (minutes / 60) * 360 + 90;
  minute.style.transform = `rotate(${minutesToDegrees}deg)`;
  minute.style.background = "Yellow";

  const hours = now.getHours();
  const hoursToDegrees = (hours / 12) * 360 + 90;
  hour.style.transform = `rotate(${hoursToDegrees}deg)`;
}

setInterval(setDate, 1000);
