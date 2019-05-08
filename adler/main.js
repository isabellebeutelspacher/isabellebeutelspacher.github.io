// alert("Hallo Welt!");

const div = document.getElementById("map");
const breite1 = div.getAttribute("data-lat1");
const laenge1 = div.getAttribute("data-lng1");
const titel1 = div.getAttribute("data-title1");
const breite2 = div.getAttribute("data-lat2");
const laenge2 = div.getAttribute("data-lng2");
const titel2 = div.getAttribute("data-title2");

// console.log("Breite=",breite,"Länge=",laenge,"Titel=",titel);
// alert (lat);
// alert (lng);
// alert (title);

// Karte initialisieren
let karte = L.map("map");
// console.log(Karte);//

// auf Ausschnitt zoomen, Zoomlevel 13
/*karte.setView(
    [breite1, laenge1],
    12
);*/

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
//kartenLayer.geolandbasemap.addTo(karte);

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

//Positionsmarker hinzufügen
let pin1 = L.marker(
    [breite1, laenge1]
).addTo(karte);
let pin2 = L.marker(
    [breite2, laenge2]
).addTo(karte);

//Popup zum Pin hängen
pin1.bindPopup(titel1).openPopup();
pin2.bindPopup(titel2).openPopup();


/*const blick1 = {
    kunde: "Wilder Kaiser",
    standort: "Gruttenhütte",
    seehoehe: 1640,
    lat: 47.55564,
    lng: 12.31861,
};
let pin3 = L.marker(
    [blick1.lat, blick1.lng]
).addTo(karte);
pin3.bindPopup(
    `<h1>Standort: ${blick1.standort}</h1>
    <p>Höhe: ${blick1.seehoehe} m</p>
    <em>Kunde: ${blick1.kunde}</em>`
);

const blick2 = {
    kunde: "Bergbahn Scheffau",
    standort: "Brandstadl",
    seehoehe: 1640,
    lat: 47.4912,
    lng: 12.248,
};

const blick3 = {
    kunde: "Lechtal Tourismus",
    standort: "Sonnalm Jöchelspitze",
    seehoehe: 1786,
    lat: 47.28103,
    lng: 10.37508,
};

const adlerblicke = [
    {
        kunde: "Wilder Kaiser",
        standort: "Gruttenhütte",
        seehoehe: 1640,
        lat: 47.55564,
        lng: 12.31861,
    },
    {
        kunde: "Bergbahn Scheffau",
        standort: "Brandstadl",
        seehoehe: 1640,
        lat: 47.4912,
        lng: 12.248,
    },
    {
        kunde: "Lechtal Tourismus",
        standort: "Sonnalm Jöchelspitze",
        seehoehe: 1786,
        lat: 47.28103,
        lng: 10.37508,
    }
];*/

let blickeGruppe = L.featureGroup().addTo(karte);

for (let blick of ADLERBLICKE) {
    let blickpin = L.marker(
        [blick.lat, blick.lng]
    ).addTo(blickeGruppe);
    blickpin.bindPopup(
        `<h1>Standort: ${blick.standort}</h1>
        <p>Höhe: ${blick.seehoehe} m</p>
        <em>Kunde: ${blick.kunde}</em>`
    )
}
let ausschnitt = blickeGruppe.getBounds();
console.log(pin1);
ausschnitt.extend(pin1.getLatLng());
ausschnitt.extend(pin2.getLatLng());

// console.log(blickeGruppe.getBounds()); //zeig nur in Konsole an
karte.fitBounds(ausschnitt); //Auf alle Marker zommen

//Vollbildmodus, link und script in index.html einfügen
karte.addControl(new L.Control.Fullscreen());
//Kartenausschnitt in Link vermerkt, script in index.html einfügen
var hash = new L.Hash(karte);
//Koordinaten auf der Karte per Mausklick anzeigen lassen
var coords = new L.Control.Coordinates();
coords.addTo(karte);
karte.on('click', function(e) {
	coords.setCoordinates(e);
});