import Color from '../Librerias/color'

export default abstract class Vehiculo {
    protected dominio: string;
    protected titular: string;
    protected marca: string;
    protected modelo: string;
    protected año: number;
    protected color: Color;

    constructor(dominio: string, titular: string, marca: string, modelo: string, año: number, color: Color) {
        this.dominio=dominio;
        this.titular=titular;
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
        this.color=color;          
    }

    public getDominio(): string { return this.dominio; }
    public setDominio(dominio: string): void { this.dominio = dominio; }

    public getTitular(): string { return this.titular; }
    public setTitular(titular: string): void { this.titular = titular; }

    public getMarca(): string { return this.marca; }
    public setMarca(marca: string): void { this.marca = marca; }

    public getModelo(): string { return this.modelo; }
    public setModelo(modelo: string): void { this.modelo = modelo; }

    public getAñO(): number { return this.año; }
    public setAñO(año: number): void { this.año = año; }

    public getColor(): Color { return this.color; }
    public setColor(color: Color): void { this.color = color; }

    abstract mostrar(): string;
}