const timeDisplay = document.querySelector('#timeDisplay');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');
const lapBtn = document.querySelector('#lapBtn');
const lapsList = document.querySelector('#lapsList');

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let msec = 0;
let lapCount = 1;

startBtn.addEventListener('click', () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});

pauseBtn.addEventListener('click', () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});

resetBtn.addEventListener('click', () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  msec = 0;
  lapCount = 1;
  timeDisplay.textContent = '00:00:00:000';
  lapsList.innerHTML = ''; // Clear the laps list.
});

lapBtn.addEventListener('click', () => {
  if (!paused) {
    const lapTime = timeDisplay.textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapsList.appendChild(lapItem);
    lapCount++;
  }
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  msec = Math.round(elapsedTime % 1000);
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}:${msec}`;
}

function pad(unit) {
  return ('0' + unit).length > 2 ? unit : '0' + unit;
}
