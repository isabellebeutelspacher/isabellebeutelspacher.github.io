// alert("Hallo Welt!");

const div = document.getElementById("map");
const breite= div.getAttribute("data-lat");
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
    [breite,laenge], 
    13
);

//openstreetmap einbauen miz z=Zoom, x=Länge und y=Breite, s=server
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(karte);

//Positionsmarker hinzufügen
let pin = L.marker(
    [breite,laenge]
).addTo(karte);

//Popup zum Pin hängen
pin.bindPopup(titel).openPopup();


const kartenLayer = {
    osm : L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        subdomains: ["a", "b", "c"],
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),
    geolandbasemap : L.tileLayer("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution : 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),
    bmapoverlay : L.tileLayer("https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution : 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),
    bmapgrau : L.tileLayer("https://{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution : 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),
    bmaphidpi : L.tileLayer("https://{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution : 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),
    bmaporthofoto30cm : L.tileLayer("https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution : 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),
    bmapgelaende : L.tileLayer("https://{s}.wien.gv.at/basemap/bmapgelaende/grau/google3857/{z}/{y}/{x}.jpeg", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution : 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),
    bmapoberflaeche : L.tileLayer("https://{s}.wien.gv.at/basemap/bmapoberflaeche/grau/google3857/{z}/{y}/{x}.jpeg", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution : 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),
    stamen_toner : L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png", {
        subdomains: ["a", "b", "c"],
        attribution : 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    stamen_terrain : L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg", {
        subdomains: ["a", "b", "c"],
        attribution : 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    stamen_watercolor : L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg", {
        subdomains: ["a", "b", "c"],
        attribution : 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
    }),
};

//openstreetmap einbauen mit z=Zoom, x=Länge und y=Breite, s=server (verschiedene Server ansteuern)


//kartenLayer.osm.addTo(karte);
kartenLayer.geolandbasemap.addTo(karte);

//Auswahlmenü hinzufügen
L.control.layers({
    "Geoland Basemap" : kartenLayer.geolandbasemap,
    "Geoland Basemap Brau" : kartenLayer.bmapgrau,
    "OpenStreetMap" : kartenLayer.osm,
    "Geoland Basemap Gelände" : kartenLayer.bmapgelaende,
    "Geoland Basemap Oberfläche" :kartenLayer.bmapoberflaeche,
    "Geoland Basemap Ortophoto" :kartenLayer.bmaporthofoto30cm,
    "Geoland Basemap High DPI" : kartenLayer.bmaphidpi,
    "Geoland Basemap Overlay" : kartenLayer.bmapoverlay,
    "Stamen Toner" : kartenLayer.stamen_toner,
    "Stamen Terrain" : kartenLayer.stamen_terrain,
    "Stamen Watercolor" : kartenLayer.stamen_watercolor
}).addTo(karte);


karte.addControl(new L.Control.Fullscreen());
//Kartenausschnitt in Link vermerkt, script in index.html einfügen
var hash = new L.Hash(karte);
//Koordinaten auf der Karte per Mausklick anzeigen lassen
var coords = new L.Control.Coordinates();
coords.addTo(karte);
karte.on('click', function(e) {
	coords.setCoordinates(e);
});