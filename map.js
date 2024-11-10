// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [49.26036, -123.24961],
    zoom: 14
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([49.26036, -123.24961]).addTo(map);
// marker.bindPopup
var marker = L.marker([49.27036, -123.24961]).addTo(map);
// var marker = L.marker([49.28036, -123.24961]).addTo(map);
// var marker = L.marker([49.26036, -123.25961]).addTo(map);
// var marker = L.marker([49.27036, -123.25961]).addTo(map);
// var marker = L.marker([49.28036, -123.25961]).addTo(map);
// var marker = L.marker([49.26036, -123.26961]).addTo(map);
// var marker = L.marker([49.27036, -123.26961]).addTo(map);
// var marker = L.marker([49.28036, -123.26961]).addTo(map);