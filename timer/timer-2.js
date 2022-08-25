const timer2 = document.getElementById("timer-2");

const timer2StartBtn = document.getElementById("timer-2-start");
const timer2StopBtn = document.getElementById("timer-2-stop");
const timer2ClearBtn = document.getElementById("timer-2-clear");

let time = { hour: 0, minute: 0, second: 0 };
let updateTime, updateDisplay;
let hourFormat = "",
  minuteFormat = "",
  secondFormat = "";

updateTimer();

timer2StartBtn.addEventListener("click", startTime);
timer2StopBtn.addEventListener("click", stopTime);
timer2ClearBtn.addEventListener("click", clearTime);

// console.log(typeof time.hour);

function startTime() {
  updateTime = setInterval(updateTimeValue, 1000, time);
  updateDisplay = setInterval(updateTimer, 0);
}

function updateTimeValue(obj) {
  if (obj.second == 59) {
    if (obj.minute == 59) {
      obj.hour++;
      obj.minute = 0;
    } else {
      obj.minute++;
    }
    obj.second = 0;
  } else {
    obj.second++;
  }
}

function stopTime() {
  clearInterval(updateTime);
  clearInterval(updateDisplay);
  updateTimer();
}

function clearTime() {
  stopTime();
  time.hour = 0;
  time.minute = 0;
  time.second = 0;
  updateTimer();
}

// update timer
function updateTimer() {
  hourFormat = format(time.hour);
  minuteFormat = format(time.minute);
  secondFormat = format(time.second);
  timer2.innerHTML = `${hourFormat}${time.hour} : ${minuteFormat}${time.minute} : ${secondFormat}${time.second}`;
}

// notice: pass by value vs pass by reference
function format(value) {
  if (value < 10) {
    return "0";
  } else {
    return "";
  }
}
