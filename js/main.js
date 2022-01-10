let element = document.querySelector("div h3");

let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(function () {
  element.textContent = `${hours} : ${minutes} : ${seconds}`;

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    ++minutes;
  }

  if (minutes === 59 && seconds === 59) {
    minutes = 0;
    seconds = 0;
    ++hours;
  }
}, 1000);
