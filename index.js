function disableButtons() {
    document.querySelector("#start").disabled = true;
    document.querySelector("#pause").disabled = true;
    document.querySelector("#stop").disabled = true;
};

let newValue = 0;
let userChoice;

function setTimer(options) {
    document.querySelector("#start").disabled = false;
    document.querySelector("#timer").innerHTML = (options < 10 ? "0" + options : options) + ":00";
    userChoice = options;
    newValue = timerSelected[userChoice];
};

let start;
let interval;

function startTimer() {
    document.querySelector("#one").disabled = true;
    document.querySelector("#five").disabled = true;
    document.querySelector("#ten").disabled = true;
    document.querySelector("#fifteen").disabled = true;
    document.querySelector("#twenty").disabled = true;

    document.querySelector("#start").disabled = true;
    document.querySelector("#pause").disabled = false;
    document.querySelector("#stop").disabled = false;

    start = Date.now() + 1000;
    interval = setInterval(decrement, 1000);
};

let timeElapsed = 0;
let dateDifference = 0;

function stopTimer () {
    timeElapsed = 0;
    clearInterval(interval);
    
    document.querySelector("#one").disabled = false;
    document.querySelector("#five").disabled = false;
    document.querySelector("#ten").disabled = false;
    document.querySelector("#fifteen").disabled = false;
    document.querySelector("#twenty").disabled = false;

    document.querySelector("#timer").innerHTML = "00:00";

    document.querySelector("#pause").disabled = true;
    document.querySelector("#stop").disabled = true;
};

let run = true;

const timerSelected = {
    1: 60000,
    5: 300000,
    10: 600000,
    15: 900000,
    20: 1200000,
};

function pauseTimer () {
    if (run) {
        timeElapsed += dateDifference;
        run = false;
        document.querySelector("#pause").innerHTML = "Resume";
    }
    else {
        newValue = timerSelected[userChoice] - timeElapsed;
        run = true;
        document.querySelector("#pause").innerHTML = "Pause";

        document.querySelector("#timer").innerHTML =
        (timeShownMinutes < 10 ? "0" + timeShownMinutes : timeShownMinutes) + 
        ":" + (timeShownSeconds < 10 ? "0" + timeShownSeconds : timeShownSeconds);

        start = Date.now();
    }
};

function decrement() {
    if (run) {
        dateDifference = Math.max(0, Date.now() - start);

        let timeRemaining = (newValue - dateDifference) / 1000;
        let timeShownMinutes = Math.floor(timeRemaining / 60);
        let timeShownSeconds = Math.floor(timeRemaining % 60); 

        document.querySelector("#timer").innerHTML =
            (timeShownMinutes < 10 ? "0" + timeShownMinutes : timeShownMinutes) + 
            ":" + (timeShownSeconds < 10 ? "0" + timeShownSeconds : timeShownSeconds);

        if(timeShownMinutes + timeShownSeconds == 0) {
            stopTimer();
        }
    }
};