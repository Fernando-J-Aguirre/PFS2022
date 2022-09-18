import Duracion from "./duracion";

export default class Pista implements Duracion {
    private identificador: number;
    private titulo: string;
    private duracion: number;
    private autor: string;

    constructor(identificador: number, titulo: string, duracion: number, autor: string) {
        this.identificador = identificador;
        this.titulo = titulo;
        this.duracion = duracion;
        this.autor = autor;
    }

    public getIdentificador(): number {
        return this.identificador;
    }

    public setIdentificador(identificador: number): void {
        this.identificador = identificador;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getDuracion(): number {
        return this.duracion;
    }

    public setDuracion(duracion: number): void {
        this.duracion = duracion;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public imprimir(): string {
        return `Titulo: ${this.titulo} - Duracion: ${this.duracion} - Autor: ${this.autor}`;
    }

}