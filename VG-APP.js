import { Objekt21, machwas } from './modules/object21.js';

// Damit wir weniger oft console.log schreiben müssen. Thx @Stephan :-)
const C = console.log.bind(console);

//Beispiel für den import einer Funktion
machwas()

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


///////////// Event Listener /////////////
//  For finder button to call on searchObject()
let btnFinder = document.getElementById("btn-finder");
btnFinder.addEventListener("click", searchObject);
//  For navbar element "Objekte" to call on showObjects()
let btnObjekte = document.getElementById("btn-obj");
btnObjekte.addEventListener("click", showObjects);
// For navbar element "Informationen" to call on showInfo()
let btnInfo = document.getElementById("btn-info");
btnInfo.addEventListener("click", showInfo);
//  For Footer elements contact, impressum, agb
let bntContact = document.getElementById("contact");
bntContact.addEventListener("click", showContact);
let bntImpressum = document.getElementById("impressum");
bntImpressum.addEventListener("click", showImpressum);
let bntAGB = document.getElementById("agb");
bntAGB.addEventListener("click", showAGB);



///////////////// Main Functions ////////////////
// Search Function to find a single object by ID
function searchObject(){

    prepareHtml("VG-App", "grid");

    // Query the user input
    let o21_id = checkUserInput("searchField");
    let o21 = VG21.get(o21_id);
    
    // createElement("result", "p", {"innerHTML":"Liste der gesuchten Objekte:"});

    if (o21 != undefined){
        createElement("result", "div", {"id":`${o21.objektID}`});
        let div = document.getElementById(`${o21.objektID}`);
        div.classList.add("flexElement");
        createElement(`${o21.objektID}`, "img", {"src":o21.bild});
        createElement(`${o21.objektID}`, "h3", {"textContent":o21.name});
        createElement(`${o21.objektID}`, "p", {"textContent": `Langbeschreibung: ${o21.langbeschreibung}`});
    }
    else{
        createElement("result", "h3", {"textContent":"Kein Ergebnis"});
    }

}
    
// Show all Objects
function showObjects(){

    prepareHtml("VG-App", "grid");

    for (const[o21ID, o21] of VG21) {
        createElement("result", "div", {"id":`${o21.objektID}`});
        let div = document.getElementById(`${o21.objektID}`);
        div.classList.add("flexElement");
        createElement(`${o21.objektID}`, "img", {"src":o21.bild});
        createElement(`${o21.objektID}`, "h3", {"textContent":o21.name});
        createElement(`${o21.objektID}`, "p", {"textContent": `Langbeschreibung: ${o21.langbeschreibung}`});
        }
}

//////////// Helper Functions /////////////
// Helper Function for searchObject()
function checkUserInput(html_SearchField_ID){
    // Cleaning up user input. No space, only upper case
    let userInput = document.getElementById(html_SearchField_ID).value;
    let o21_id = userInput.trim();
    o21_id = o21_id.toUpperCase();

    // Check: ID length max. 5 characters
    const DEFAULT_ID_LENGTH = 5;
    if(o21_id.length == DEFAULT_ID_LENGTH) {
        C ("All good!")
    }
    else {
        prepareHtml("VG-App", "grid2");
        createElement("result", "p", 
        {"textContent":"Bitte eine ID mit einer Länge von 5 Zeichen eingeben"});
        C ("ID has to be 5 characters long");
    }
    return o21_id
}

// Allgemeine createElement-Funktion. Nimmt eine HTML ID, den Elementtyp und ein Objekt mit Attributwerten entgegenen.
// Ein Element mit entsprechendem Typ wird erstellt. Danach wird durch die Attribute des Objekts iteriert 
// und diese werden dem Element hinzugefügt. Am Ende wird das fertige Element der gewünschten HTML-ID hinzugefügt.
// Hilfreiche Quellen: https://stackoverflow.com/questions/43168284/javascript-createelement-function
// https://www.w3schools.com/jsref/met_document_createelement.asp
function createElement(HTML_ElementID, type, attributes){
    let element = document.createElement(type);

    for (var key in attributes){
        element[key] = attributes[key];
    }
    document.getElementById(HTML_ElementID).appendChild(element);
}

// Prepares the HTML code for the search results functions and Footer items
// Dynamically creates the necessary html element article with ID "result".
// Before, this was hard coded into html but that would trigger
// CSS code to show an empty grid box on default. Not pretty.
function prepareHtml(HTML_ElementID, className) {
    // Check for existing HTML ID "restult" and remove if present. This was
    // necessary to create a fresh content box for non-search result elements
    let existingElement = document.getElementById("result");
    if (existingElement != undefined){
        existingElement.remove();
    }
    else {
        //Nix tun
    }
    // Create search result element in HTML
    createElement(HTML_ElementID, "article", {"id":"result"});
    let article = document.getElementById("result");
    article.classList.add(className);

    // Set search results to empty strings before each search.
    let searchResult = document.getElementById("result");
    searchResult.innerText = "";
}

////////////////////// Smaller info providers (Footer and info btn) ////////////////
//// Footer items (1)
function showContact(){
    
    prepareHtml("VG-App", "grid2")

    createElement("result", "h3", {"textContent":"Kontakt: info@md21.net"})
}
// (2)
function showImpressum(){
    
    prepareHtml("VG-App", "grid2")

    createElement("result", "h3", {"textContent":"Impressum"})
}
// (3)
function showAGB(){
    
    prepareHtml("VG-App", "grid2")

    createElement("result", "h3", {"textContent":"AGB"})
}
// Information item in navbar
function showInfo(){

    prepareHtml("VG-App", "grid2")

    createElement("result", "p", {"textContent":"Öffnungszeiten: 24/7"});
    createElement("result", "p", {"textContent":"Preise: Kostenlos"});
    createElement("result", "p", {"textContent":"Adresse: Rue de Bologna, 19283 Queertown"})
}