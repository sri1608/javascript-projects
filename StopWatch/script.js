const timer = document.querySelector(".timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let msec = 0;
let sec = 0;
let min = 0;
let timerId;

function updateTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }

  let msecValue = msec < 10 ? `0${msec}` : msec;
  let secValue = sec < 10 ? `0${sec}` : sec;
  let minValue = min < 10 ? `0${min}` : min;

  timer.innerHTML = `${minValue} : ${secValue} : ${msecValue}`;
}

startBtn.addEventListener("click", function () {

  timerId = setInterval(updateTimer, 10);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
});
resetBtn.addEventListener("click", function () {
  clearInterval(timerId);
  msec = 0;
  sec = 0;
  min = 0;
  timer.innerHTML = `00 : 00 : 00`;
});
