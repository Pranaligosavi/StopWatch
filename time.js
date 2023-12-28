const hourText = document.querySelector(".hour");
const minuteText = document.querySelector(".minute");
const secondText = document.querySelector(".second");
const centiSecondText = document.querySelector(".splite-second");

// Buttons

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const clearBtn = document.querySelector(".clear");

let countCentiInt;
let centiSecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let isRunning = false;

const countCentiSecond = () => {
  if (centiSecond >= 99) {
      centiSecond = 0;
      countSecond();
  } else {
      centiSecond++;
      centiSecondText.textContent =
      centiSecond < 10 ? "0" + centiSecond : centiSecond.toString().slice(-2);
  }
};

const countSecond = () => {
  if (second >= 59) {
    second = 0;
    countMinute();
  } else {
    second++;
    secondText.textContent = second < 10 ? "0" + second : second;
  }
};

const countMinute = () => {
  if (minute >= 59) {
    minute = 0;
    countHour();
  } else {
    minute++;
    minuteText.textContent = minute < 10 ? "0" + minute : minute;
  }
};

const countHour = () => {
  if (hour >= 24) {
    hour = 0;
    second = 0;
    minute = 0;
    centiSecond = 0;
    hourText.textContent = "00";
    minuteText.textContent = "00";
    secondText.textContent = "00";
    centiSecondText.textContent = "00";
  } else {
    hour++;
    hourText.textContent = hour < 10 ? "0" + hour : hour;
  }
};

startBtn.addEventListener("click", () => {
  clearInterval(countCentiInt);
  console.log("is clicked");
  countCentiInt = setInterval(countCentiSecond, 10);
  
});

stopBtn.addEventListener("click", () => {
  console.log("clicked");
  clearInterval(countCentiInt);
  
});

clearBtn.addEventListener("click", () => {
 
  clearInterval(countCentiInt);
  hour = 0;
  second = 0;
  minute = 0;
  centiSecond = 0;
  hourText.textContent = "00";
  minuteText.textContent = "00";
  secondText.textContent = "00";
  centiSecondText.textContent = "00";
});
