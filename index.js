
const timerSelected = {
    // minutes to milliseconds
    1: 60000,
    5: 300000,
    10: 600000,
    20: 1200000,
};

let start;
let userChoice;

function disableButtons() {
    document.querySelector("#start").disabled = true;

    document.querySelector("#one").checked = false;
    document.querySelector("#five").checked = false;
    document.querySelector("#ten").checked = true;
    document.querySelector("#twenty").checked = false;
}


function setTimer(options) {
    document.querySelector("#start").disabled = false;
    document.querySelector("#timer").innerHTML = options + ":00 minutes";
    userChoice = options;
}

// function startTimer() {
//     start = Date.now() + 1000;
//     setTimeout(initiate, 1000);
// }

// function initiate() {
    
//     let currentTime = Date.now();
//     // 510ms

//     let dateDifference = currentTime - start;
//     // 10ms

//     // THEY CHOSE 5 MINUTES
//     let timeRemaining = timerSelected[userChoice] - dateDifference;
//     // 30,000 - 10 == 29,990ms

//     // show the time going down
//     // disable the buttons
//     // show pause and stop

//     // 300000 / 1000ms = 300 seconds
//     let timeShown = timeRemaining / 1000; // 280 seconds
//     let timeShownMinutes = Math.floor(timeShown / 60); // 280 / 60 seconds = 4
//     let timeShownSeconds = Math.floor(timeShown % 60); // 280 % 60 seconds = 40 seconds
//     document.querySelector("#timer").innerHTML =
//         timeShownMinutes + ":" + timeShownSeconds + " minutes";
//     setTimeout(initiate, Math.max(0, 1000 - dateDifference));

// }

function startTimer() {
    document.querySelector("#start").hidden = true;
    document.querySelector("#pause").hidden = false;
    document.querySelector("#stop").hidden = false;

    // figure out a way to simplify using the whole class
    document.querySelector("#one").disabled = true;
    document.querySelector("#five").disabled = true;
    document.querySelector("#ten").disabled = true;
    document.querySelector("#twenty").disabled = true;

    start = Date.now() + 1000;
    setInterval(functionality, 1000);
}

function functionality() {
    
    let currentTime = Date.now();
    // 510ms

    let dateDifference = currentTime - start;
    // 10ms

    // THEY CHOSE 5 MINUTES
    let timeRemaining = timerSelected[userChoice] - dateDifference;
    // 30,000 - 10 == 29,990ms

    // show the time going down
    // disable the buttons
    // show pause and stop

    // 300000 / 1000ms = 300 seconds
    let timeShown = timeRemaining / 1000; // 280 seconds
    let timeShownMinutes = Math.floor(timeShown / 60); // 280 / 60 seconds = 4
    let timeShownSeconds = Math.floor(timeShown % 60); // 280 % 60 seconds = 40 seconds
    document.querySelector("#timer").innerHTML =
        timeShownMinutes + ":" + timeShownSeconds + " minutes";

}
