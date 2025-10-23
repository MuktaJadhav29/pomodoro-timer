
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

let minutes = 25;       
let seconds = 0;        
let timerId = null;     
let isRunning = false;  

function updateTimer() {
    
    seconds--; 
    
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if (minutes < 0) {
        alert("Time's up! Take a break.");
        resetTimer(); 
        return; 
    }

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    timerDisplay.innerText = `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    if (isRunning === false) { 
        isRunning = true; 
        timerId = setInterval(updateTimer, 1000); 
    }
}

function pauseTimer() {
    if (isRunning === true) {
        isRunning = false; 
        clearInterval(timerId); 
    }
}

function resetTimer() {
    pauseTimer(); 
    minutes = 25;
    seconds = 0;

    timerDisplay.innerText = "25:00";
}
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);