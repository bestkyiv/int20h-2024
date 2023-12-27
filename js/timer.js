const countDownDate = new Date("February 03, 2024 23:59:59").getTime();
const formatTimeString = (hours, minutes, seconds) => {
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const formatDayString = (days) => {
  if (days.toString().endsWith("1")) {
    return `${days} day`;
  }
  return `${days} days`;
};

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let countdownString = "";

  if (days >= 1) {
    countdownString += formatDayString(days);
  } else {
    countdownString += formatTimeString(hours, minutes, seconds);
  }
  document.getElementById("timer").innerHTML = countdownString;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "00:00:00";
  }
}, 1000);
