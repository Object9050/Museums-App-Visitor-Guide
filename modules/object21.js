/**
 * Objekt21 stellt ein physischees / museales Objekt dar, das in Ausstellungen 
 * oder Sammlungen gezeigt werden kann.
 */
class Objekt21 {

    #objektID = "OXXXX";
    #name
    #untertitel 
    #kurzbeschreibung
    #langbeschreibung 
    Bild
    #bereitstellendeInstitution
    #urheber
    #eigentuemer
    
    //Objekte koennen z.B Statuen, Bilder, 3D-Objekte uvm sein.
    #artDesObjekts 
    #audiodeskription

    //Getter
    get objektID () {return this.#objektID}    
    get name () {return this.#name}
    get untertitel () {return this.#untertitel}
    get kurzbeschreibung () {return this.#kurzbeschreibung}
    get langbeschreibung () {return this.#langbeschreibung}
    get bereitstellendeInstitution () {return this.#bereitstellendeInstitution}
    get urheber () {return this.#urheber}
    get eigentuemer () {return this.#eigentuemer}
    get artDesObjekts () {return this.#artDesObjekts}
    get audiodeskription () {return this.#audiodeskription}

    // Hier Setter ergaenzen

   getAehnlicheObjekte(){
        console.log("eine Liste ähnlicher Objekte"); 
   }

    constructor(obj21Data) {
        if(obj21Data == undefined){
            this.#name = "name des Objekts"
        }
        else{
            this.#objektID = obj21Data.objektID
            this.#name = obj21Data.name
            this.#untertitel = obj21Data.untertitel
            this.#langbeschreibung = obj21Data.langbeschreibung
            this.#bereitstellendeInstitution = obj21Data.bereitstellendeInstitution
            this.#urheber = obj21Data.urheber
            this.#eigentuemer = obj21Data.eigentuemer
            this.#artDesObjekts = obj21Data.artDesObjekts
            this.#audiodeskription = obj21Data.audiodeskription
        }

    }
}

function machwas(){
    console.log("machtwas")
}


export {Objekt21, machwas};