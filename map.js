// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [49.26036, -123.24961],
    zoom: 14
});

const iconChilling = L.icon({
    iconUrl: 'static/images/icons/icon-chilling.png'
});
const iconExploring = L.icon({
    iconUrl: 'static/images/icons/icon-exploring.png'
});
const iconExercising = L.icon({
    iconUrl: 'static/images/icons/icon-exercising.png'
});
const iconSocializing = L.icon({
    iconUrl: 'static/images/icons/icon-socializing.png'
});
const iconStudying = L.icon({
    iconUrl: 'static/images/icons/icon-studying.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94]
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([49.26036, -123.24961], {icon: iconStudying}).addTo(map);
marker.bindPopup("Study Session <br> Come join us!");
var marker = L.marker([49.27036, -123.24961]).addTo(map);
marker.bindPopup("Fireside Chat <br> Come speak with us!");
// var marker = L.marker([49.28036, -123.24961]).addTo(map);
// var marker = L.marker([49.26036, -123.25961]).addTo(map);
// var marker = L.marker([49.27036, -123.25961]).addTo(map);
// var marker = L.marker([49.28036, -123.25961]).addTo(map);
// var marker = L.marker([49.26036, -123.26961]).addTo(map);
// var marker = L.marker([49.27036, -123.26961]).addTo(map);
// var marker = L.marker([49.28036, -123.26961]).addTo(map);