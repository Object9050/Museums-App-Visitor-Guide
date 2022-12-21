/**
 * Objekt21 stellt ein physischees / museales Objekt dar, das in Ausstellungen 
 * oder Sammlungen gezeigt werden kann.
 */
class Objekt21 {

    static Option = {
        EMPTY_OBJEKT21:"Empty Objekt",
        SINGLE_OBJEKT21:"Single Objekt"
     }

    #objektID = "OXXXX";
    #name
    #untertitel 
    #kurzbeschreibung
    #langbeschreibung 
    #bild
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


    constructor(obj21Data, option = Objekt21.Option.EMPTY_OBJEKT21) {
        
        // Ein leeres Objekt wird angelegt
        if(option == Objekt21.Option.EMPTY_OBJEKT21){
            this.#name = "name des Objekts"
        }

        // Auf Basis der abgestimmten Datenstruktur wird ein einzelnes 
        // Objekt erstellt
        else if (option == Objekt21.Option.SINGLE_OBJEKT21) {
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
       
        else{

        }
    }

    /**
     * Auf Basis eine Objekt_21.JSON Datei wird eine MAP von Objekt21-Objekten 
     * erstellt und zurueckgeliefert. Dabei dient die Objekt ID als Key und 
     * das Objekt als Value. 
     * @param {*} url Pfad auf eine O21 Json Datei
     * @returns MAP von Objekt21-Objekten. Dabei dient die Objekt ID als Key und das Objekt als Value. 
     * 
     */
    
    static async CreateO21Map(url){
        let o21 = new Map();
        
        const fetched_data = await fetch(url)
        let o21_json = await fetched_data.json();
        
        for (let index = 0; index < o21_json.length; index++){
            let o = new Objekt21(o21_json[index], Objekt21.Option.SINGLE_OBJEKT21)
            o21.set(o.objektID,o);
            console.log(`Objekt ID: ${o.objektID}, Objektname: ${o.name}`)
        }
        console.log("Anzahl Objekte in Map o21: " + o21.size)
        return o21

    }
}


function machwas(){
    console.log("machtwas")
}


export {Objekt21, machwas};