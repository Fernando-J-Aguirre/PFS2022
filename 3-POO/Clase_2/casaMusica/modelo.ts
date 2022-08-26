export default class Modelo {
    private tipo: string; //acústica/o, eléctrica/o (depende del instrumento)
    private marca: string;
    private diestro: boolean; //lateralidad - guitarra para diestro o zurdo

    constructor(tipo: string, marca: string) {
        this.tipo = tipo;
        this.marca = marca;
    }

    public getTipo(): string { 
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }
 
    public getMarca(): string {
        return this.marca;
    } 

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public isDiestro(): boolean {
        return this.diestro;
    }

    public setDiestro(diestro: boolean): void {
        this.diestro = diestro;
    }
}