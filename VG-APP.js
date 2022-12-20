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
    let userInput = document.getElementById("searchField").value;
    let searchResult = document.getElementById("searchResult").textContent;
    let o21 = vg.get(userInput);
    
    createElement("p", {"textContent":`Deine Suche nach ${userInput} hat folgendes Ergebnis geliefert:`});
    createElement("h3", {"textContent":o21.name});
    createElement("p",{"textContent": `Langbeschreibung: ${o21.langbeschreibung}`});
}
