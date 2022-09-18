import CuerdaPulsada from "./cuerdaPulsada";
import Modelo from "./modelo";

export default class Instrumento extends CuerdaPulsada {
    private modelo: Modelo;
    private color: string;
    private afinada: number;

    constructor(modelo: Modelo, color: string, instrumento: string, cantidadCuerdas: number, tensionCuerdas?: string){
        super(instrumento, cantidadCuerdas, tensionCuerdas);
        this.modelo = modelo;
        this.color = color;
    }

    afinar(): number {
      return this.afinada = 440;        
    }
 
    public getColor(): string {
        return this.color;
    } 

    public setColor(color: string): void {
        this.color = color;
    }

    public getTipo(): string {
        return this.modelo.getTipo();
    } 

    public setTipo(tipo: string): void {
        this.modelo.setTipo(tipo);
    }

    public getMarca(): string {
        return this.modelo.getMarca();
    }

    public setMarca(marca: string): void {
        this.modelo.setMarca(marca);
    }

    public isDiestro(): boolean {
        return this.modelo.isDiestro();
    }

    public setDiestro(diestro: boolean): void {
        this.modelo.setDiestro(diestro);
    }

    public imprimir(): string {
        return `Guitarra { color: ${this.getColor()}, tipo: ${this.getTipo()}, marca: ${this.getMarca()}}`;
    }

}