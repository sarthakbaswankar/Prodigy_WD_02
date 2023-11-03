const display = document.querySelector('.display');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

let isRunning = false;
let timer;
let startTime = 0;

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startButton.disabled = true;
        pauseButton.disabled = false;
        const now = Date.now();
        startTime += now;
        timer = setInterval(updateDisplay, 10);
    }
}

function pauseTimer() {
    isRunning = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    clearInterval(timer);
    display.textContent = '00 : 00 : 00 : 00';
    startTime = 0;
}

function updateDisplay() {
    const elapsedTime = Date.now() - startTime;
    display.textContent = formatElapsedTime(elapsedTime);
}

function formatElapsedTime(time) {
    const totalMilliseconds = time;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const milliseconds = totalMilliseconds % 1000;
    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;
    const hours = totalHours;

    return `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)} : ${formatTime(milliseconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
