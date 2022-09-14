const key = "DOEEESf7yldIWHelbTOJkQ3KzaxXWrA7";

const locationMap = function () {
  L.mapquest.key = key;
  const locationValue = document.getElementById("inputLocation").value;
  document.getElementById("user_input").reset();

  L.mapquest.geocoding().geocode(locationValue, createMap);

  const urlMap = `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${locationValue}`;

  fetch(urlMap)
    .then((resp) => resp.json())
    .then((data) => console.log(data));

  function createMap(error, response) {
    const location = response.results[0].locations[0];
    const latLng = location.displayLatLng;
    const map = L.mapquest.map("map", {
      center: latLng,
      layers: L.mapquest.tileLayer("map"),
      zoom: 14,
    });
  }
};
document.getElementById("btn_seach").addEventListener("click", locationMap);
