
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

function disableButtons() {
    document.querySelector("#start").disabled = true;

    // document.querySelector("#one").checked = false;
    // document.querySelector("#five").checked = false;
    // document.querySelector("#ten").checked = true;
    // document.querySelector("#twenty").checked = false;
}

let newValue = 0;
function setTimer(options) {
    document.querySelector("#start").disabled = false;
    document.querySelector("#timer").innerHTML = (options < 10 ? "0" + options : options) + ":00 minutes";
    userChoice = options;
    newValue = timerSelected[userChoice]
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

let interval;
let run = true

function startTimer() {
    document.querySelector("#start").disabled = true;
    document.querySelector("#pause").hidden = false;
    document.querySelector("#stop").hidden = false;
    document.querySelector("#add30").hidden = false;

    // figure out a way to simplify using the whole class
    document.querySelector("#one").disabled = true;
    document.querySelector("#five").disabled = true;
    document.querySelector("#ten").disabled = true;
    document.querySelector("#fifteen").disabled = true;
    document.querySelector("#twenty").disabled = true;


    start = Date.now() + 1000;
    // 5000ms + 1000ms
    // start = 6000ms

    
        interval = setInterval(functionality, 1000);
    
}
let timeElapsed = 0;
let dateDifference;

function stopTimer () {
    clearInterval(interval);
    timeElapsed =0;

    document.querySelector("#timer").innerHTML = "00:00 minutes";
    
    document.querySelector("#one").disabled = false;
    document.querySelector("#five").disabled = false;
    document.querySelector("#ten").disabled = false;
    document.querySelector("#fifteen").disabled = false;
    document.querySelector("#twenty").disabled = false;

    
    document.querySelector("#pause").hidden = true;
    document.querySelector("#stop").hidden = true;
    document.querySelector("#add30").hidden = true;


}
// newValue = timerSelected - timeElapsed 
// create a new Start 
// timeRemaining = newValue - dateDifference




function pauseTimer () {
    if(run) {
        run = false;
        document.querySelector("#pause").innerHTML = "Resume";
        //July/20/21 5000 ms
        // timeElapsed = 20 sec
        timeElapsed += dateDifference;
        console.log(timeElapsed + " MS")
    }
    // Activate Resume button
    else {
        run = true;
        document.querySelector("#pause").innerHTML = "Pause";
        start = Date.now() + 1000;
        newValue = timerSelected[userChoice] - timeElapsed
        
    }
    
}


function functionality() {
    if (run) {
    let currentTime = Date.now();
    // 6000 ms

    dateDifference = currentTime - start;
    // miniscule value
    // essentially === 6000 - 6000 = 0

    let timeRemaining = newValue - dateDifference;
    // 59,999 / 1000 = 59 seconds


    // what happens is:
    //      we select 1 minute
    //      we click start
    //      the timer goes from showing 1:00, to actually calculating
    //      the calculation ALSO shows 1:00

    // 1 minute
    // 59 seconds
    // 58
    /*
        Start is getting the milliseconds since 1970 - 6000 ms + 1000 ms
        wait 1 second 
        Current time is 1 second later than 6000 ms (7000 ms)
        dateDifference gets near 0 
        timeRemaining is the total milliseconds of the user choice (5 * 60,000 = 300,000 ms)
            minus the dateDifference (0 ms)
        going down from 300,000 to 0

        Keep track of time since clicking start
        Clicking Resume creates a new start
        Start is getting the milliseconds since 1970 - 20,000 ms + 1000 ms
        wait 1 second 
        Current time is 1 second later than 20,000 ms (21,000 ms)
        dateDifference gets near 0 
        timeRemaining is user choice minus timeElapsed


    */ 

    let timeShown = ( timeRemaining) / 1000;
    let timeShownMinutes = Math.floor(timeShown / 60);
    let timeShownSeconds = Math.floor(timeShown % 60); 
  
    //console.log(timeElapsed)
    document.querySelector("#timer").innerHTML =
        (timeShownMinutes < 10 ? "0" + timeShownMinutes : timeShownMinutes) + 
        ":" + (timeShownSeconds < 10 ? "0" + timeShownSeconds : timeShownSeconds) + " minutes";

        if(timeShownMinutes + timeShownSeconds == 0) {
            stopTimer();
        }
    }



}


/**
 * Change the single digits to double 
 * stop and pause functionality
 * stop at zero
 * change stop and pause to disabled
 * 
 * 
 * get a new start timer
 * change time difference equation to subtract time elapsed
 * create variable called time elapsed and add a second to it
 */