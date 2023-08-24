let is24hrClock = true;

function updateTime() {
  const now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  let ampm = hours >= 12 ? "PM" : "AM";

  if (!is24hrClock) {
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
  } else {
    ampm = "";
  }

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("am_pm").textContent = ampm;
}

function show24HourFormat() {
  is24hrClock = true;
  updateTime();
  document.getElementById("24").classList.add("active");
  document.getElementById("12").classList.remove("active");
}
function show12HourFormat() {
  is24hrClock = false;
  updateTime();
  document.getElementById("12").classList.add("active");
  document.getElementById("24").classList.remove("active");
}

setInterval(updateTime, 1000);

show12HourFormat();
