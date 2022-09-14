const key = "DOEEESf7yldIWHelbTOJkQ3KzaxXWrA7";
let map;

function locationMap() {
  L.mapquest.key = key;
  const locationValue = document.getElementById("inputLocation").value;
  document.getElementById("user_input").reset();

  // if (map != null || map != undefined) {
  //   document.getElementById("map").remove();
  //   const child = document.createElement("div");
  //   child.setAttribute("id", "map");
  //   document.getElementById("map_container").appendChild(child);
  // }
  L.mapquest.geocoding().geocode(locationValue, createMap);
}

function createMap(error, response) {
  const location = response.results[0].locations[0];
  const latLng = location.displayLatLng;
  console.log(latLng);
  if (map) {
    map.setView(latLng, 14);
  } else {
    map = L.mapquest.map("map", {
      center: latLng,
      layers: L.mapquest.tileLayer("map"), // tile layer
      zoom: 14,
    });
  }
}

document.getElementById("btn_seach").addEventListener("click", locationMap);

const clear = function () {
  document.getElementById("map").remove();
};
document.getElementById("btn_clear").addEventListener("click", clear);
// const key = "DOEEESf7yldIWHelbTOJkQ3KzaxXWrA7";

// const locationMap = function () {
//   L.mapquest.key = key;
//   const locationValue = document.getElementById("inputLocation").value;
//   document.getElementById("user_input").reset();

//   L.mapquest.geocoding().geocode(locationValue, createMap);

//   const urlMap = `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${locationValue}`;

//   fetch(urlMap)
//     .then((resp) => resp.json())
//     .then((data) => console.log(data));

//   function createMap(error, response) {
//     const location = response.results[0].locations[0];
//     const latLng = location.displayLatLng;
//     const map = L.mapquest.map("map", {
//       center: latLng,
//       layers: L.mapquest.tileLayer("map"),
//       zoom: 14,
//     });
//   }
// };
// document.getElementById("btn_seach").addEventListener("click", locationMap);
