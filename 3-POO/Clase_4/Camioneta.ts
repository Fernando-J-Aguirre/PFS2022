import Color from "../Librerias/color";
import Vehiculo from "./Vehiculo";

export default class Camioneta extends Vehiculo {
    private capacidad: number = 0;

    constructor (dominio: string, titular: string, marca: string, modelo:string, año:number, color: Color, capacidad? : number) {
        super(dominio, titular, marca, modelo, año, color);
        if (capacidad) this.capacidad=capacidad;
    }             

    public getCapacidad(): number { return this.capacidad; }
    public setCapacidad(capacidad: number): void { this.capacidad = capacidad; }
    public mostrar() : string {
        return `Camioneta { Dominio: ${this.dominio} es un ${this.marca}-${this.modelo} modelo ${this.año} color ${this.color}, propiedad de ${this.titular}, posee ${this.capacidad} de capacidad}`;
    }
}