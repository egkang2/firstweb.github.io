function Geo(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const API_KEY = "b4b23386da6d54fd1df67f012c73c62e";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  console.log("You are in", lat, lng);
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const weather = data.weather[0].main;
      const weatherElement = document.getElementById("weather");
      const locElement = document.getElementById("location");
      locElement.innerHTML = `${name}`;
      weatherElement.innerHTML = `weather: ${weather} `;
    });
}
function Error() {
  alert("Can't find your location. Try it again or move to another place.");
}
navigator.geolocation.getCurrentPosition(Geo, Error);
