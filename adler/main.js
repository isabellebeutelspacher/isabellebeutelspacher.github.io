// alert("Hallo Welt!");

const div = document.getElementById("map");
const breite1= div.getAttribute("data-lat1");
const laenge1 = div.getAttribute("data-lng1");
const titel1 = div.getAttribute("data-title1");
const div = document.getElementById("map");
const breite2= div.getAttribute("data-lat2");
const laenge2 = div.getAttribute("data-lng2");
const titel2 = div.getAttribute("data-title2");

// console.log("Breite=",breite,"Länge=",laenge,"Titel=",titel);
// alert (lat);
// alert (lng);
// alert (title);

// Karte initialisieren
let karte = L.map("map");
// console.log(Karte);

// auf Ausschnitt zoomen, Zoomlevel 13
karte.setView(
    [breite1,laenge1], 
    13
);

//openstreetmap einbauen miz z=Zoom, x=Länge und y=Breite, s=server
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(karte);

//Positionsmarker hinzufügen
let pin1 = L.marker(
    [breite1,laenge1]
).addTo(karte);
let pin2 = L.marker(
    [breite2,laenge2]
).addTo(karte);

//Popup zum Pin hängen
pin2.bindPopup(titel2).openPopup();