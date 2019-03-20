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
