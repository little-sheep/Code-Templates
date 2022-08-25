const timer1 = document.getElementById("timer-1");

setTimeout(getCurrentTime, 0);

// method 1
function getCurrentTime() {
  const date = new Date();
  // timer1.innerText = JSON.stringify(date.getDate());
  // timer1.innerHTML = date.toLocaleTimeString();
  timer1.innerHTML = date.toLocaleString();
}

setInterval(getCurrentTime, 1000);

// method 2
// window.addEventListener("load", startTime);

// function startTime() {
//   const date = new Date();
//   timer1.innerHTML = date.toLocaleTimeString();
//   setTimeout(function () {
//     startTime();
//   }, 1000);
// }
