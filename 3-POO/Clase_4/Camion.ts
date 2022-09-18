import Color from "../Librerias/color";
import Vehiculo from "./Vehiculo";

export default class Camion extends Vehiculo {
    private capacidad: number = 0;
    private cantidadEjes: number = 2;
    
    constructor (dominio: string, titular: string, marca: string, modelo:string, año:number, color: Color, capacidad? : number, ejes? : number) {
        super(dominio, titular, marca, modelo, año, color);
        if (capacidad) this.capacidad=capacidad;
        if (ejes) this.cantidadEjes=ejes;
    }           
    
    public getCapacidad(): number { return this.capacidad; }
    public setCapacidad(capacidad: number): void { this.capacidad = capacidad; }
    public getCantidadEjes(): number { return this.cantidadEjes; }
    public setCantidadEjes(cantidadEjes: number): void { this.cantidadEjes = cantidadEjes; }
    public mostrar() : string {
        return `Camion { Dominio: ${this.dominio} es un ${this.marca}-${this.modelo} modelo ${this.año} color ${this.color}, propiedad de ${this.titular}, posee ${this.capacidad} de capacidad y ${this.cantidadEjes} ejes }`;
    }
}