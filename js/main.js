let element = document.querySelector("div h3");

var seconds = 0;
var minutes = 0;
var hours = 0;

clocking = setInterval(Time, 0.2);

function Time() {
  seconds++;

  element.textContent = `${hours} : ${minutes} : ${seconds}`;

  if (seconds === 59) {
    seconds = -1;
    minutes++;
  }

  if (minutes === 59 && seconds === 58) {
    minutes = 0;
    seconds = -1;
    hours++;
  }
}

function stopping() {
  clearInterval(clocking);
  document.getElementById("hide").style.cssText = "display: none;";
  document.querySelector("#con").style.cssText = "display: block;";
}

function going() {
  clearInterval(clocking);
  clocking = setInterval(Time, 1000);
  document.getElementById("hide").style.cssText = "display: block;";
  document.querySelector("#con").style.cssText = "display: none;";
}
