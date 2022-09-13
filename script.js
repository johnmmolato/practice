const locationMap = function () {
  L.mapquest.key = "DOEEESf7yldIWHelbTOJkQ3KzaxXWrA7";

  const locationValue = document.getElementById("inputLocation").value;
  document.getElementById("user_input").reset();

  L.mapquest.geocoding().geocode(locationValue, createMap);

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
document.getElementById("btn_seach").addEventListener(
  "click",
  locationMap

  //document.getElementById("user_input").reset();
  // const key = "DOEEESf7yldIWHelbTOJkQ3KzaxXWrA7";
  // const locationValue = document.getElementById("inputLocation").value;

  // //mapquest object to use for longtitude and latitude
  // const urlMap = `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${locationValue}`;

  // fetch(urlMap)
  //   .then((resp) => resp.json())
  //   .then((data) => console.log(data));

  // document
  //   .getElementById("btn_seach")
  //   .addEventListener("click", searchLocation);
  // const searchLocation = L.mapquest
  //   .geocoding()
  //   .geocode("Boston, MA", createMap);
);

// const mapBoxKey = pk.eyJ1IjoibWFyaW5lczgzMDIiLCJhIjoiY2w4MGRyZzF0MDAwazN3czVzOHZtNG92bSJ9.wp0JFr7-mf9vQE6sHkntFQ

// const mapLocation = L.map('map').setView([51.505, -0.09], 13);
// https://api.mapbox.com/{endpoint}?access_token={your_access_token}

// mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
// const map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });
