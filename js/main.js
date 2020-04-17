var dataMap = L.map('data').setView([30.3753, 69.3451], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3JhZGVscm9zYXJpbyIsImEiOiJjazk0ZzlmNnUwY3BmM2luMXNydjh3c3NiIn0.EwFfqUXIahSIpJ3CZcpTgw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(dataMap);

L.geoJson(pakistanDistricts).addTo(dataMap);