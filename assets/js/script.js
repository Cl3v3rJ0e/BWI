var countdownNumberEl = document.getElementsByClassName('countdown-number');
var countdown = 45;

countdownNumberEl.textContent = countdown;

setInterval(function() {
  countdown = --countdown <= 0 ? 45 : countdown;
