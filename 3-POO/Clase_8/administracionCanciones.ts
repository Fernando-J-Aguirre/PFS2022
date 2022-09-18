import Duracion from "./duracion"
import Pista from "./pistaAudio";

export default class ListaReproduccion implements Duracion {
    private nombre: string;
    private pistas: Pista[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.pistas = [];
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public createPistas(pista: Pista): void {
        if (pista) {
            this.pistas.push(pista);
        }
    }

    public getCantidad(): number {
        let cantidad: number = 0;
        this.pistas.forEach(pista => {
            if (pista) {
                cantidad++;
            }
        })
        return cantidad;
    }

    public getDuracion(): number {
        let duracion: number = 0;
        this.pistas.forEach(pista => {
            duracion += pista.getDuracion();
        })
        return duracion;
    }

    public imprimirLista(): string {
        return `La lista ${this.getNombre()} contiene ${this.getCantidad()} pistas con una duracion total de: ${this.getDuracion()} segundos`;
    }

    public imprimirPistas(): string {
        let texto: string = '';
        this.pistas.forEach(pista => {
            texto += `Pista numero ${pista.getIdentificador()} - ${pista.imprimir()}\n`
        })
        return texto;
    }

    public addPista(pista: Pista): void {
        this.pistas.push(pista)
    }

    public updatedPista(pista: Pista, posicion: number): void {
        try {
            if ((pista) && (posicion >= 0)) {
                this.pistas[posicion] = pista;
            } else {
                throw new Error('Valor/es ingresado/s incorrecto')
            }
        } catch (error) {
            console.log(error.message);            
        }
    }
}
