var dataMap = L.map('data').setView([25.8943, 68.5247], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3JhZGVscm9zYXJpbyIsImEiOiJjazk0ZzlmNnUwY3BmM2luMXNydjh3c3NiIn0.EwFfqUXIahSIpJ3CZcpTgw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(dataMap);

L.geoJson(pakistanDistricts).addTo(dataMap);

function getColor(d) {
    return d > 3000 ? '#DA0404' :
           d > 500  ? '#FFE600' :
                      '#EAEAEA';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.infected),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(pakistanDistricts, {style: style}).addTo(dataMap);


document.getElementById("tab-button1").addEventListener("click", function () {openTab("tab-button1","option1")});
document.getElementById("tab-button2").addEventListener("click", function () {openTab("tab-button2","option2")});
document.getElementById("tab-button3").addEventListener("click", function () {openTab("tab-button3","option3")});


function openTab(id1, id2) {

    console.log ("HELLO");

    var i, tabContents, tabs;
  
    tabContents = document.getElementsByClassName("content");
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].className = tabContents[i].className.replace(" active", "");
    }
  
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }

    document.getElementById(id1).className  += " active";
    document.getElementById(id2).className  += " active";
  }