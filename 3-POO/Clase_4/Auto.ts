import Color from "../Librerias/color";
import Vehiculo from "./Vehiculo";

export default class Auto extends Vehiculo {
   
    constructor(dominio: string, titular: string, marca: string, modelo:string, año:number, color: Color) {
        super(dominio, titular, marca, modelo, año, color);
    }
    public mostrar() : string {
        return `Auto { Dominio: ${this.dominio} es un ${this.marca}-${this.modelo} modelo ${this.año} color ${this.color}, propiedad de ${this.titular} }`;
    }           
}