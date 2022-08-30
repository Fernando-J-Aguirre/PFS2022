import ErrorControlado from "./errorControlado";
import Indumentaria from "./indumentaria";

export default class Tienda {
    private nombre: string;
    private prendas: Indumentaria[];

    constructor(nombre: string) {
        try {
            if (nombre == "") throw new ErrorControlado('El nombre es obligatorio');
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);
        }
        this.nombre = nombre;
        this.prendas = [];
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPrendas(): Indumentaria[] {
        return this.prendas;
    }

    //CRUD

    public createPrendas(prenda: Indumentaria): void {
        if (prenda) {
            this.prendas.push(prenda);
        }
    }

    public findPrendas(prenda: Indumentaria): boolean {
        for (let i = 0; i < this.prendas.length; i++) {
            if (this.prendas[i] == prenda) {
                return true;
            }
        }
        return false;
    }

    public updatePrendas(prenda: Indumentaria, posicion: number): void {
        try {
            if (posicion < 0) {
                throw new ErrorControlado('La posicion no puede ser menor a 0');
            } else if (prenda) {
                this.prendas[posicion] = prenda;
            }             
        }
        catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);
        }
    }

    public deletePrendas(posicion: number): void {
        try {            
            if (!this.prendas[posicion]) {
                throw new ErrorControlado(`No existen prendas en la posicion ${posicion}`);
            } else if (posicion < 0) {
                throw new ErrorControlado('La posicion no puede ser menor a 0');
            } else if (this.prendas[posicion]) {
                this.prendas.splice(posicion, 1);
            }
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
    }

    public findPrendasXTipo(tipo: string): Indumentaria[] {
        let prendas: Indumentaria[] = [];
        try {            
            if (tipo == "") throw new ErrorControlado('La busqueda por tipo no puede estar vacía');
            this.prendas.forEach(prenda => {
                if (prenda.getTipo() == tipo) {
                    prendas.push(prenda)
                }
            })
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
        return prendas;
    }       

    public findPrendasXTalle(talle: string): Indumentaria[] {
        let talles: string[] = ['S', 'M', 'L', 'XL'];
        let prendas: Indumentaria[] = [];
        try {            
            if (talles.indexOf(talle.toUpperCase()) == -1) {
                throw new ErrorControlado('El talle no se encuentra, los talles disponibles son: S, M, L, XL');
            }
            
            this.prendas.forEach(prenda => {
                if (prenda.getTalle() == talle.toUpperCase()) {
                    prendas.push(prenda);
                }
            })
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
        return prendas;
    }

    //     public imprimirPrendas(): string {
    //         let texto: string = "";
    //         this.prendas.forEach(prenda => {
    //             texto += `tipo: ${prenda.getTipo()}, marca: ${prenda.getMarca()}, precio: ${prenda.getPrecio()}, talle: ${prenda.getTalle()}'\n'`;
    //         })
    //         return texto;
    //     }
    // }
    public imprimirPrendas(prendas: Indumentaria[]): string {
        let texto: string = "";
        prendas.forEach(prenda => {
            // console.log(prenda);            
            texto += `tipo: ${prenda.getTipo()}, marca: ${prenda.getMarca()}, precio: ${prenda.getPrecio()}, talle: ${prenda.getTalle()}\n`;
        })
        return texto;
    }
}
