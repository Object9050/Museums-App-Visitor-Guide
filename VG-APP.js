import { Objekt21, machwas } from './modules/object21.js';
//import { logger21 } from './modules/logger.js';
//import('./modules/Object21.js');

// Damit wir weniger oft console.log schreiben müssen. Thx @Stephan :-)
const C = console.log.bind(console);

//Beispiel für den import einer Funktion
machwas()

// let o21 = new Objekt21();
// console.log (o21.objektID)
// logger21.log("meine Lognachricht")

//Der Visitor Guide beseteht derzeit aus einem einzelnen Map-Objekt
let VG21 = new Map()

/**
 * Vorgehen
 */
// 1. Daten müssen in den Visitor Guide geladen werden
// 2. Daten müssen (vor-) verarbeitet werden
// 3. Website muss erstellt
// 4. Daten auf der Website darstellen



/**
 * Start:   Daten aus JSON Datei einlesen und Liste von Objekten 
 *          (in Form einer Map) anlegen
 */
const o21Map = await Objekt21.CreateO21Map("./data/object21-data.json")
C ("Anzahl: " + o21Map.size);

// Derzeit koennen wir die o21 Map dem Visitor Guide direkt zuweisen.
// Sobald aber auch Sammlungen und Ausstellungen existieren geht das in der Form nicht mehr
VG21 = o21Map


// Allgemeine createElement-Funktion. Nimmt den Elementtyp und ein Objekt mit Attributwerten entgegenen.
// Ein Element mit entsprechendem Typ wird erstellt. Danach wird durch die Attribute des Objekts iteriert 
// und diese werden dem Element hinzugefügt. Am Ende wird das fertige Element dem HTML Main-Tag hinzugefügt.
// Hilfreiche Quellen: https://stackoverflow.com/questions/43168284/javascript-createelement-function
// https://www.w3schools.com/jsref/met_document_createelement.asp
function createElement(type, attributes){
    let element = document.createElement(type);
    for (var key in attributes){
        element[key] = attributes[key];
    }
    document.getElementById("searchResult").appendChild(element);
}

// Event Listener for finder button to call on search()
let startSearch = document.getElementById("btn-finder");
startSearch.addEventListener("click", search);

// Search Function
function search(){
    // Query the user input
    let userInput = document.getElementById("searchField").value;
        /**
     * TODO Eingabe prüfen
     * 1. Länge soll max 5 sein
     * 2. Erster Buchstabe muss A (=> Ausstellung), O (=> Objekt) oder S(=> Sammlung) sein
     *  */ 

    let searchResult = document.getElementById("searchResult");
    let o21 = VG21.get(userInput);
    
    if (searchResult.textContent == ""){
    createElement("p", {"textContent":`Deine Suche nach ${userInput} hat folgendes Ergebnis geliefert:`});
    createElement("h3", {"textContent":o21.name});
    createElement("p",{"textContent": `Langbeschreibung: ${o21.langbeschreibung}`});
    }
    else{
        searchResult.innerHTML = "";
    }
}
