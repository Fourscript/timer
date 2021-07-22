
const timerSelected = {
    // minutes to milliseconds
    1: 60000,   // 1 minute == 60seconds * 1000 = 60,000
    5: 300000,
    10: 600000,
    15: 900000,
    20: 1200000,
};

let start;
let userChoice;
let time = 0;
let emit = 0;
let t;
let timer_is_on = true;

function disableButtons() {
    document.querySelector("#start").disabled = true;

    // document.querySelector("#one").checked = false;
    // document.querySelector("#five").checked = false;
    // document.querySelector("#ten").checked = true;
    // document.querySelector("#twenty").checked = false;
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

//     let time = currentTime - start;
//     // 10ms

//     // THEY CHOSE 5 MINUTES
//     let timeRemaining = timerSelected[userChoice] - time;
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
//     setTimeout(initiate, Math.max(0, 1000 - time));

// }

function startTimer() {
    document.querySelector("#start").disabled = true;
    document.querySelector("#pause").hidden = false;
    document.querySelector("#stop").hidden = false;
    document.querySelector("#add30").hidden = false;

    // figure out a way to simplify using the whole class
    document.querySelector("#one").disabled = true;
    document.querySelector("#five").disabled = true;
    document.querySelector("#ten").disabled = true;
    document.querySelector("#twenty").disabled = true;


    start = Date.now() + 1;
    // 5000ms + 1000ms
    // start = 6000ms

     t = setInterval(functionality, 1);
}
 function pauseTimer(){
   
   if(timer_is_on){ 
       timer_is_on = false;
       emit = time;
       clearInterval(t);
   }else{
       timer_is_on = true;
    start = Date.now() + 1;
    t = setInterval(functionality, 1);
   }

 }

function functionality() {
    
    let currentTime = Date.now();
    // 6000 ms

    time = (currentTime - start) + emit;
    // miniscule value
    // essentially === 6000 - 6000 = 0

    let timeRemaining = timerSelected[userChoice] - time;
    // 59,999 / 1000 = 59 seconds


    // what happens is:
    //      we select 1 minute
    //      we click start
    //      the timer goes from showing 1:00, to actually calculating
    //      the calculation ALSO shows 1:00

    // 1 minute
    // 59 seconds
    // 58

    let timeShown = timeRemaining / 1000;
    let timeShownMinutes = Math.floor(timeShown / 60);
    let timeShownSeconds = Math.floor(timeShown % 60); 

    document.querySelector("#timer").innerHTML =
        `${timeShownMinutes} : ${timeShownSeconds} minutes`;

}
