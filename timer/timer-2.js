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
  timer2ClearBtn.classList.add("timer-2-clear-uncheck");
  timer2ClearBtn.classList.remove("checked");

  timer2StopBtn.classList.remove("checked");
  timer2StopBtn.classList.add("timer-2-stop-uncheck");

  timer2StartBtn.classList.remove("timer-2-start-uncheck");
  timer2StartBtn.classList.add("checked");

  if (!updateTime) {
    // console.log(`updateTime: ${updateTime}`);
    updateTime = setInterval(updateTimeValue, 1000, time);
  } else {
  }
  if (!updateDisplay) {
    // console.log(`updateDisplay: ${updateDisplay}`);
    updateDisplay = setInterval(updateTimer, 1001);
  }
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
  timer2StopBtn.classList.remove("timer-2-stop-uncheck");
  timer2StopBtn.classList.add("checked");
  timer2StartBtn.classList.remove("checked");
  timer2StartBtn.classList.add("timer-2-start-uncheck");

  clearInterval(updateTime);
  clearInterval(updateDisplay);
  updateTime = undefined;
  updateDisplay = undefined;
  updateTimer();
}

function clearTime() {
  timer2StopBtn.classList.remove("checked");
  timer2StopBtn.classList.add("timer-2-stop-uncheck");

  timer2StartBtn.classList.remove("checked");
  timer2StartBtn.classList.add("timer-2-start-uncheck");

  timer2ClearBtn.classList.remove("timer-2-clear-uncheck");
  timer2ClearBtn.classList.add("checked");

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
