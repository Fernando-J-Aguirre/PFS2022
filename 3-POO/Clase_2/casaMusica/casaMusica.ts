import CuerdaPulsada from "./cuerdaPulsada";
import Instrumento from "./instrumento";

export default class CasaMusica {
    private nombre: string;
    // private instrumentos: Instrumento[];
    private instrumentos: CuerdaPulsada[];
    
    constructor(nombre: string) {
        this.nombre = nombre;
        this.instrumentos = [];
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void { 
        this.nombre = nombre;
    }

    //CRUDF  Create-Read-Update-Delete-Find - ABMLC
    public createInstrumentos(instrumento: CuerdaPulsada) : void {
        if (instrumento) 
            this.instrumentos.push(instrumento);        
    }

    public findInstrumentos(instrumento: CuerdaPulsada) : boolean { 
        for (let i = 0; i < this.instrumentos.length; i++) { 
            if (this.instrumentos[i] == instrumento)    
                return true; 
        }
        return false; 
    }

    public updateInstrumentos(instrumento: CuerdaPulsada, posicion: number) : void {
        if (instrumento)                            
            this.instrumentos[posicion] = instrumento; 
    }

    public deleteInstrumentos(posicion: number) : void {
        if (this.instrumentos[posicion])
            this.instrumentos.splice(posicion,1);
    }

    public readInstrumentos() : CuerdaPulsada[] {
        let instrumentos: CuerdaPulsada[] = [];
        this.instrumentos.forEach(instrumento => {
            instrumentos.push(instrumento)
        });
        return instrumentos;
    }


    public readInstrumentosTxt() : string {
        let textoInstrumentos : string = '';
        this.instrumentos.forEach(instrumento => {
            textoInstrumentos += instrumento.imprimir() + '\n'
        });
        return textoInstrumentos;
    }    

    public findInstrumentosXTipo(tipo: string) : CuerdaPulsada[] {
        let instrumentos: CuerdaPulsada[] = [];
        this.instrumentos.forEach(instrumento => {
            if (instrumento.getTipo() == tipo)
                instrumentos.push(instrumento)
        });
        return instrumentos;
    }
}