function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startB = document.getElementById('startB');
const stopB = document.getElementById('stopB');

let timerID = null;

const startColor = () => {
  startB.disabled = true;
  stopB.disabled = false;
  timerID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

startB.addEventListener('click', startColor);

const stopColor = () => {
  clearInterval(timerID);
  stopB.disabled = true;
  startB.disabled = false;
};

stopB.addEventListener('click', stopColor);
