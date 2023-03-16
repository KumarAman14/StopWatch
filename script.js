var sec = 00;
var min = 00;
var appendmin = document.getElementById("min");
var appendsec = document.getElementById("sec");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval; // to store timer values

// this function will run when click on start

function startTimer() {
  min++;

  if (min < 9) {
    appendmin.innerHTML = "0" + min;
  }
  if (min > 9) {
    appendmin.innerHTML = min;
  }
  if (min > 99) {
    sec++;
    appendsec.innerHTML = "0" + sec;
    min = 0;
    appendmin.innerHTML = "0" + 0;
  }
  if (sec > 9) {
    appendsec.innerHTML = sec;
  }
}

buttonStart.onclick = function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  min = "00";
  sec = "00";
  appendsec.innerHTML = sec;
  appendmin.innerHTML = min;
};