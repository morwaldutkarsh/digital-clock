let mode = "clock"; 
let countdownInterval;
let clockInterval;
// update clock is use for normal clock ...
function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}

function startClock() {
  updateClock();
  clockInterval = setInterval(updateClock, 1000);
}

function stopClock() {
  clearInterval(clockInterval);
}

function startCountdown() {
  const time = document.getElementById("input").value;
  if (!time) return;

  let [hours, minutes, seconds] = time.split(":").map(Number);
  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("clock").innerText = "Times up buddy..!";
      return;
    }

    totalSeconds--;
    let hrs = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
    let mins = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
    let secs = (totalSeconds % 60).toString().padStart(2, "0");

    document.getElementById("clock").innerText = `${hrs}:${mins}:${secs}`;
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}

// to change the texts an working....
function change() {
  const controls = document.getElementById("countdownControls");

  if (mode === "clock") {
    stopClock();
    document.getElementById("clock_title").innerText = "COUNTDOWN TIMER";
    document.getElementById("button").innerText = "DIGITAL CLOCK";
    mode = "countdown";
    controls.style.display = "flex"; 
    document.getElementById("clock").innerText = "00:00:00";
  } else {
    stopCountdown();
    document.getElementById("clock_title").innerText = "DIGITAL CLOCK";
    document.getElementById("button").innerText = "COUNTDOWN TIMER";
    mode = "clock";
    controls.style.display = "none";
    startClock();
  }
}


function countdown() {
  if (mode === "countdown") {
    stopCountdown();
    startCountdown();
  }
}
startClock();
