import { CIPO_LISTA } from "./adat.js";
import { divesHarom, felsorolasOsszeallit, hanyKoromCipo, legdragabbTermekNeve, lista, osszegzes, tablazat } from "./fuggveny.js";



lista(CIPO_LISTA);

// html dom-ba irjuk ki a felsorolásba
// 1. megfogjuk a html megfelelő elemét
// const CIPOK_ELEM = document.getElementById("cipok");
const CIPOK_ELEM = document.querySelector("#cipok")
console.log(CIPOK_ELEM);
const DIVEK_ELEM = document.querySelector("#dives")
const TABLA = document.querySelector("#tablazat");
const OSSZEGZES = document.querySelector("#osszegzes");

// 2 .összeállitjuk a html kódot
let txt = felsorolasOsszeallit(CIPO_LISTA)
let elsoFeladat = divesHarom(CIPO_LISTA);
let tabla = tablazat(CIPO_LISTA);
let osszegzesKiiras = osszegzes(CIPO_LISTA);
let legdragabbTermek = legdragabbTermekNeve(CIPO_LISTA);
let koromcipoDb = hanyKoromCipo(CIPO_LISTA);

// 3. beleteszzük az eddig megfogott elembe
CIPOK_ELEM.innerHTML="<h3>Szép nap van</h3>";
CIPOK_ELEM.innerHTML += txt;
DIVEK_ELEM.innerHTML += elsoFeladat;
TABLA.innerHTML += tabla;
OSSZEGZES.innerHTML += osszegzesKiiras;
OSSZEGZES.innerHTML += legdragabbTermek;
OSSZEGZES.innerHTML += `<p>ennyi db koromcipo ${koromcipoDb}</p>`