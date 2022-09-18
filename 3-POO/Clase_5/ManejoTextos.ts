import * as fs from 'fs';

export default class ManejoTextos {
    private nombreArchivo: string;
    private separadorFilas: string;
    private separadorColumnas: string;
    private datos: string[][] = [];

    constructor(archivo: string, separaFil: string, separaCol: string) {
        this.nombreArchivo = archivo;
        this.separadorFilas = separaFil;
        this.separadorColumnas = separaCol;
    }
    public leerArchivo() {
        let fila: string
        let texto: string = fs.readFileSync(this.nombreArchivo, 'utf8');
        //separamos las palabras en un arreglo usando el espacio como delimitador
        if (texto) {
            let filas: string[] = texto.split(this.separadorFilas);
            let fila: string
            for (let i = 0; i < filas.length; i++) {
                fila = filas[i];
                this.datos.push(fila.split(this.separadorColumnas));
            }
            // filas.forEach(fila => {
            //     this.datos.push(fila.split(this.separadorColumnas));                
            // })            
        }
    }
    public grabarArchivo() {
        let texto: string = '';
        for (let i = 0; i < this.datos.length; i++) {
            for (let j = 0; j < this.datos[i].length; j++) {
                texto += this.datos[i][j] + this.separadorColumnas;
            }
            // this.datos[i].forEach(columna => {
            //    texto += columna + this.separadorColumnas;                
            // })            
            texto += this.separadorFilas;
        }
        fs.writeFileSync(this.nombreArchivo, texto.trim());
    }

    public getCantidadFilas(): number {
        return this.datos.length;
    }

    public getFila(posicion: number): string[] {
        return this.datos[posicion];
    }

    public limpiarDatos(): void { 
        this.datos = [];        
    }

    public setFila(info: string[][]) : void {
        this.datos = info;
    }
}