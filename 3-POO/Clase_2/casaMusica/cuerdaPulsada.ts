export default abstract class CuerdaPulsada {
    private instrumento: string;
    private cantidadCuerdas: number; // cantidad de cuerdas
    private tensionCuerdas: string; //baja, media, alta

    constructor(instrumento: string, cantidadCuerdas: number, tensionCuerdas?: string) {
        this.cantidadCuerdas = cantidadCuerdas;
        if (tensionCuerdas == undefined) {
            this.tensionCuerdas = "Media";
        } else {
            this.tensionCuerdas = tensionCuerdas;
        }
        this.instrumento = instrumento;
    }

    public getInstrumento(): string {
        return this.instrumento;
    }  

    public setInstrumento(instrumento: string): void {
        this.instrumento = instrumento;
    }

    public getCantidadCuerdas(): number {
        return this.cantidadCuerdas;
    }

    public setCantidadCuerdas(cantidadCuerdas: number): void {
        this.cantidadCuerdas = cantidadCuerdas;
    }

    public getTensionCuerdas(): string {
        return this.tensionCuerdas;
    }

    public setTensionCuerdas(tensionCuerdas: string): void {
        this.tensionCuerdas = tensionCuerdas;
    }

    abstract afinar(): number;
}