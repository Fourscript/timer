let timer;

function runTimer() {
  if(timer !== -1) {
    if (timer < 10) {
      document.querySelector("#timer").innerHTML = "00:0" + timer--;
    }
    else {
      document.querySelector("#timer").innerHTML = "00:" + timer--;
    }
  }
  else {
    stopTimer();
  }
};

function startTimer () {
  timer = 11;
  let timeReset = setInterval(runTimer, 100);
};

function stopTimer() {
  document.querySelector("#timer").innerText = "00:00";
  clearInterval(timeReset);
};

window.onload = stopTimer;

var start = Date.now();
console.log(start);
setInterval(function() {
  var delta = Date.now() - start; // milliseconds elapsed since start
  console.log(delta);
  output(Math.floor(delta / 1000)); // in seconds
  // alternatively just show wall clock time:
  output(new Date().toUTCString());
}, 1000); // update about every second

console.log(start);