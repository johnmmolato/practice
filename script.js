var key = "pk.pk.2f18ebbf211350dd5e3f51dfe848b5d0"; //Insert your LocationIQ access token here

var coordinates = document.getElementById("coordinates");

olms(
  "map",
  "https://tiles.locationiq.com/v3/streets/vector.json?key=" + key
).then(function (map) {
  //Set the view for this map
  map.setView(
    new ol.View({
      center: ol.proj.fromLonLat([-122.42, 37.779]),
      zoom: 12,
    })
  );

  //to create a marker
  var marker1 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-122.444733, 37.767443])),
  });

  //to enhance style and add icon to the map
  marker1.setStyle(
    new ol.style.Style({
      image: new ol.style.Icon({
        scale: 0.5, //scale to adjust the proportion of the icon
        src: "marker.png", //link of the icon
      }),
    })
  );

  //Let’s include the markers and create a vector source with it
  var vectorSource = new ol.source.Vector({
    features: [marker1],
  });

  //Let’s create a vector layer, with a source created above
  var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
  });

  map.addLayer(vectorLayer);

  var translate1 = new ol.interaction.Translate({
    features: new ol.Collection([marker1]),
  });

  map.addInteraction(translate1);

  // After the mouse click the following function is executed which updates the displayed lat and long
  map.on("click", function (e) {
    var coordinate = e.coordinate;
    var lngLat = ol.proj.toLonLat(coordinate);
    marker1.setGeometry(new ol.geom.Point(ol.proj.fromLonLat(lngLat)));
    coordinates.style.display = "block";
    coordinates.innerHTML =
      "Latitude: " + lngLat[1] + "<br />Longitude: " + lngLat[0];
  });
});
