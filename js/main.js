let element = document.querySelector("div h3");
let stop = document.getElementsByClassName("stop");
// let reset = document.getElementsByClassName("reset");

var seconds = 0;
var minutes = 0;
var hours = 0;

clocking = setInterval(Time, 1000);

function Time() {
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
}

function stopping() {
  clearInterval(clocking);
}
