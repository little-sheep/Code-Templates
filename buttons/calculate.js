const calculateBtn = document.getElementById("calculate-btn");
const calculateNum = document.getElementById("calculate-number");
const thumbsupBtn = document.getElementById("thumbsup-btn");
const thumbsupNum = document.getElementById("thumbsup-number");

// localStorage.clear();

/*
 * Calculate Button
 */
initialCalculate();
changeCalculateColor();
calculateNum.innerText = localStorage.calculateSum;

calculateBtn.addEventListener("click", calculate);

function initialCalculate() {
  if (localStorage.calculateSum > 0) {
    console.log(`initialized`);
  } else {
    localStorage.calculateSum = 0;
    console.log(
      `initial. ${typeof localStorage.calculateSum} ${
        localStorage.calculateSum
      }`
    );
  }
}

function calculate() {
  localStorage.calculateSum++;
  changeCalculateColor();
  calculateNum.innerText = localStorage.calculateSum;
  // thumbsupNum.innerText = localStorage.calculateSum;
}

/*
 * Thumbsup Button
 */

changeThumbsColor();
// localStorage.setItem("thumbsupSum", "0");

thumbsupNum.innerText = localStorage.thumbsupSum;
// thumbsupNum.innerText = localStorage.calculateSum;

thumbsupBtn.addEventListener("click", changeSomething);

function changeSomething() {
  if (localStorage.thumbsupSum > 0) {
    if (localStorage.calculateSum > 0) {
      localStorage.calculateSum--;
    }
    localStorage.thumbsupSum = 0;
    // console.log(`uncheck`);
  } else {
    localStorage.calculateSum++;
    localStorage.thumbsupSum = 1;
    // console.log(`checked`);
  }
  changeThumbsColor();
  // thumbsupNum.innerText = localStorage.calculateSum;
  thumbsupNum.innerText = localStorage.thumbsupSum;
  calculateNum.innerText = localStorage.calculateSum;
}

// Change Color

// function changeCalculateColor() {
//   if (localStorage.calculateSum > 0) {
//     calculateBtn.classList.remove("calculate-0");
//     calculateBtn.classList.add("calculate-1");
//   } else {
//     localStorage.thumbsupSum = 0;
//     calculateBtn.classList.remove("calculate-1");
//     calculateBtn.classList.add("calculate-0");
//   }
// }

// better
function changeCalculateColor() {
  if (localStorage.calculateSum > 0) {
    if (calculateBtn.classList.contains("calculate-0")) {
      calculateBtn.classList.remove("calculate-0");
      // console.log(`${calculateBtn.classList}`);
    }
    if (!calculateBtn.classList.contains("calculate-1")) {
      calculateBtn.classList.add("calculate-1");
      // console.log(`${calculateBtn.classList}`);
    }
    // console.log("> 0");
  } else {
    localStorage.thumbsupSum = 0;
    // console.log("= 0");
  }
}

function changeThumbsColor() {
  if (localStorage.thumbsupSum > 0) {
    // thumbsupBtn.style.color = "#535c49";
    thumbsupBtn.classList.remove("thumbsup-0");
    thumbsupBtn.classList.add("thumbsup-1");
  } else {
    // thumbsupBtn.style.color = "#a5b892";
    thumbsupBtn.classList.remove("thumbsup-1");
    thumbsupBtn.classList.add("thumbsup-0");
  }
}
