document.getElementById("search-btn").addEventListener("click", (evt) => {
  evt.preventDefault();
  L.mapquest.key = "DOEEESf7yldIWHelbTOJkQ3KzaxXWrA7";

  L.mapquest.geocoding().geocode("Boston, MA", createMap);

  function createMap(error, response) {
    var location = response.results[0].locations[0];
    var latLng = location.displayLatLng;
    // 'map' refers to a <div> element with the ID map
    L.mapquest.map("map", {
      center: latLng,
      // L.mapquest.tileLayer('map') is the MapQuest map tile layer
      layers: L.mapquest.tileLayer("map"),
      zoom: 12,
    });
  }
});
