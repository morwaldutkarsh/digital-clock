function updateClock() {
  const now = new Date();

  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString();
  let seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}

// Run immediately and then every second
updateClock();
setInterval(updateClock, 1000);
