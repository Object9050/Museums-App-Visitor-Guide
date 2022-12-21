import { Objekt21, machwas } from './modules/object21.js';
//import { logger21 } from './modules/logger.js';
//import('./modules/Object21.js');

//Beispiel für den import einer Funktion
machwas()

// let o21 = new Objekt21();
// console.log (o21.objektID)
// logger21.log("meine Lognachricht")

//Der Visitor Guide beseteht derzeit aus einem einzelnen Map-Objekt
let vg = new Map()

/**
 * Start: Daten aus JSON Datei einlesen
 */

// Variante 1: Mit Arrow Schreibweise, kuerzer
// fetch("./data/objekt21-data.json")
//     .then((response) => response.json())
//     .then((data) => console.log("FETCH Daten mit Arrowschreibweise: " + data.name));


// Variante 2, Ohne Arrow Schreibweise, ausfuehrlicher
let responseFunc = function (response) {
    return response.json()
}

let dataFunc = function (data){
    // console.log("FETCH Daten mit Callback Funktionen: " + data.name)
    // logger21.log(data.objektID)
    // logger21.log(data.name)
    // logger21.log(data.langbeschreibung)
    // logger21.log(data.urheber)


    for (let index = 0; index < data.length; index++){
        let o = new Objekt21(data[index])
        vg.set(o.objektID,o);
        console.log(o.objektID);
    }
    console.log(vg)
    console.log(vg.size)




    // let o21 = new Objekt21(data[0])
    // logger21.log(o21.objektID)

    // o21 = new Objekt21(data[1])
    // logger21.log(o21.objektID)

    // console.log("data: " + typeof(data))
    // console.log("o21: " + typeof(o21))
    
    
    // o21.getAehnlicheObjekte();
    

}

fetch("./data/object21-data.json").then(responseFunc).then(dataFunc);
   



// 1. Daten müssen in den Visitor Guide
// Beispiel
// vg.set("O23KE", new Objekt21())
// console.log ( "MAP" + vg.get("O23KE").name)

// 2. Daten müssen (vor-) verarbeitet werden
// 3. Website muss erstellt
// 4. Daten auf der Website darstellen

//logger21.log("check");

// Allgemeine createElement-Funktion. Nimmt den Elementtyp und ein Objekt mit Attributwerten entgegenen.
// Ein Element mit entsprechendem Typ wird erstellt. Danach wird durch die Attribute des Objekts iteriert 
// und diese werden dem Element hinzugefügt. Am Ende wird das fertige Element dem HTML Main-Tag hinzugefügt.
// Hilfreiche Quellen: https://stackoverflow.com/questions/43168284/javascript-createelement-function
// https://www.w3schools.com/jsref/met_document_createelement.asp
function createElement(HTML_ID, type, attributes){
    let element = document.createElement(type);
    for (var key in attributes){
        element[key] = attributes[key];
    }
    document.getElementById(HTML_ID).appendChild(element);
}

///////////// Event Listener /////////////
//  For finder button to call on searchObject()
let btnFinder = document.getElementById("btn-finder");
btnFinder.addEventListener("click", searchObject);
//  For navbar element "Objekte" to call on showObjects()
let btnObjekte = document.getElementById("btn-obj");
btnObjekte.addEventListener("click", showObjects);

<<<<<<< Updated upstream
// Search Function
function search(){
    let userInput = document.getElementById("searchField").value;
    let searchResult = document.getElementById("searchResult").textContent;
    let o21 = vg.get(userInput);
    
    createElement("p", {"textContent":`Deine Suche nach ${userInput} hat folgendes Ergebnis geliefert:`});
    createElement("h3", {"textContent":o21.name});
    createElement("p",{"textContent": `Langbeschreibung: ${o21.langbeschreibung}`});
=======
// Search Function to find a single object by ID
function searchObject(){
    // Set search results to empty string
    let searchResult = document.getElementById("result");
    searchResult.innerText = "";
    // Query the user input
    let userInput = document.getElementById("searchField").value;
        /**
     * TODO Eingabe prüfen
     * 1. Länge soll max 5 sein
     * 2. Erster Buchstabe muss A (=> Ausstellung), O (=> Objekt) oder S(=> Sammlung) sein
     *  */ 


    let o21 = VG21.get(userInput);
    
    if (o21 != undefined){
        createElement("result", "p", {"textContent":`Suchergebnis für ${userInput}:`});
        createElement("result", "h3", {"textContent":o21.name});
        createElement("result", "p", {"textContent": `Langbeschreibung: ${o21.langbeschreibung}`});
    }
    else{
        createElement("result", "h3", {"textContent":"Kein Ergebnis"});
    }
>>>>>>> Stashed changes
}

// Search Function to find a single object by ID
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

