// Countdown to May 24, 2026 (local time)
const target = new Date("2026-05-24T00:00:00");

function pad(n) {
  return String(n).padStart(2, "0");
}

function tick() {
  const now = new Date();
  let diff = target - now;
  if (diff < 0) diff = 0;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const elDays = document.getElementById("cdDays");
  const elHours = document.getElementById("cdHours");
  const elMins = document.getElementById("cdMins");
  const elSecs = document.getElementById("cdSecs");

  if (elDays) elDays.textContent = days;
  if (elHours) elHours.textContent = pad(hours);
  if (elMins) elMins.textContent = pad(mins);
  if (elSecs) elSecs.textContent = pad(secs);
}

tick();
setInterval(tick, 1000);
