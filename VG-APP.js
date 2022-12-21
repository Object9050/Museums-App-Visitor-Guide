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
function createElement(HTML_Element, type, attributes){
    let element = document.createElement(type);
    for (var key in attributes){
        element[key] = attributes[key];
    }
    document.getElementById(HTML_Element).appendChild(element);
}

///////////// Event Listener /////////////
//  For finder button to call on searchObject()
let btnFinder = document.getElementById("btn-finder");
btnFinder.addEventListener("click", searchObject);
//  For navbar element "Objekte" to call on showObjects()
let btnObjekte = document.getElementById("btn-obj");
btnObjekte.addEventListener("click", showObjects);


// Search Function to find a single object by ID
function searchObject(){
    // Set search results to empty string
    let searchResult = document.getElementById("result");
    searchResult.innerText = "";
    // Query the user input
    let userInput = document.getElementById("searchField").value;
    let o21 = VG21.get(userInput);
    
    if (o21 != undefined){
        createElement("result", "p", {"textContent":`Suchergebnis für ${userInput}:`});
        createElement("result", "h3", {"textContent":o21.name});
        createElement("result", "p", {"textContent": `Langbeschreibung: ${o21.langbeschreibung}`});
    }
    else{
        createElement("result", "h3", {"textContent":"Kein Ergebnis"});
    }

}
    
// Show all Objects
function showObjects(){
    // Set search results to empty string
    let searchResult = document.getElementById("result");
    searchResult.innerText = "";

    createElement("result", "p", {"innerHTML":"Liste aller Objekte:"});

    for (const[o21ID, o21] of VG21) {
        createElement("result", "div", {"id":`${o21.objektID}`});
        let div = document.getElementById(`${o21.objektID}`);
        div.classList.add("flexElement");
        createElement(`${o21.objektID}`, "h3", {"textContent":o21.name});
        createElement(`${o21.objektID}`, "p", {"textContent": `Langbeschreibung: ${o21.langbeschreibung}`});
        }
}
    