function timeUpdate() {
  const time = document.querySelector(".worldclock");
  const currentDate = new Date();
  const localTime = currentDate.toLocaleString();
  time.innerHTML = localTime;
}
timeUpdate();
setInterval(timeUpdate, 1000);
