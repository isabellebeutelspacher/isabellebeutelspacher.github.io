// alert("Hallo Welt!");

const div = document.getElementById("map");
const breite = div.getAttribute("data-lat");
const laenge = div.getAttribute("data-lng");
const titel = div.getAttribute("data-title");

// console.log("Breite=",breite,"Länge=",laenge,"Titel=",titel);
// alert (lat);
// alert (lng);
// alert (title);

// Karte initialisieren
let karte = L.map("map");
// console.log(Karte);

// auf Ausschnitt zoomen, Zoomlevel 13
 karte.setView(
    [breite, laenge],
    13
);

//openstreetmap einbauen miz z=Zoom, x=Länge und y=Breite, s=server
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(karte);

//Positionsmarker hinzufügen
let pin = L.marker(
    [breite, laenge]
).addTo(karte);

//Popup zum Pin hängen
pin.bindPopup(titel).openPopup();


const kartenLayer = {
    stamen_toner: L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png", {
        subdomains: ["a", "b", "c"],
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    stamen_terrain: L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg", {
        subdomains: ["a", "b", "c"],
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    stamen_watercolor: L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg", {
        subdomains: ["a", "b", "c"],
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
    })
};

//openstreetmap einbauen mit z=Zoom, x=Länge und y=Breite, s=server (verschiedene Server ansteuern)


//kartenLayer.osm.addTo(karte);
//kartenLayer.geolandbasemap.addTo(karte);

//Auswahlmenü hinzufügen
L.control.layers({
    "Stamen Toner": kartenLayer.stamen_toner,
    "Stamen Terrain": kartenLayer.stamen_terrain,
    "Stamen Watercolor": kartenLayer.stamen_watercolor
}).addTo(karte);


karte.addControl(new L.Control.Fullscreen());
//Kartenausschnitt in Link vermerkt, script in index.html einfügen
//var hash = new L.Hash(karte);
//Koordinaten auf der Karte per Mausklick anzeigen lassen
var coords = new L.Control.Coordinates();
coords.addTo(karte);
karte.on('click', function (e) {
    coords.setCoordinates(e);
});