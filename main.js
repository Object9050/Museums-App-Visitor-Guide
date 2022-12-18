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
        logger21.log(o.objektID)
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

fetch("./data/objekt21-data.json").then(responseFunc).then(dataFunc);
   



// 1. Daten müssen in den Visitor Guide
vg.set("O23KE", new Objekt21())
console.log ( "MAP" + vg.get("O23KE").name)

// 2. Daten müssen (vor-) verarbeitet werden
// 3. Website muss erstellt
// 4. Daten auf der Website darstellen

//logger21.log("check");