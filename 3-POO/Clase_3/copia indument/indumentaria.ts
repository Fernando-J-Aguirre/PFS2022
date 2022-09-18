import ErrorControlado from "./errorControlado";

export default class Indumentaria {
    private tipo: string; //deportiva, clásica, casual, elegante
    private marca: string;
    private precio: number;
    private talle: string;

    constructor(tipo: string, marca: string, precio: number, talle: string) {
        try {            
            if (tipo == "") throw new ErrorControlado('El tipo no puede estar vacío');
            this.tipo = tipo;
            if (marca == "") throw new ErrorControlado('La marca no puede estar vacía');
            this.marca = marca;
            if (precio < 0) throw new ErrorControlado('El precio no puede ser menor a 0');
            this.precio = precio;
            // let talles: string[] = ['S', 'L', 'M', 'XL']                  //NO ME FUNCIONA ESTA VALIDACION NI TAMPOCO SIN DECLARAR EL ARREGLO DE TALLES, 
            // if (talles.indexOf(talle.toUpperCase()) == -1) {             // IF O WHILE(talle != 'S')&&(talle != 'L')....., SIEMPRE SE ATRAPA EL ERROR
            //     throw new ErrorControlado('El talle no existe, seleccione talle valido: S, L, M o XL');
            // }
            this.talle = talle;
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        try {            
            if (tipo == "") throw new ErrorControlado('El tipo no puede estar vacío');
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
        this.tipo = tipo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        try {            
            if (marca == "") throw new ErrorControlado('La marca no puede estar vacía');
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
            this.marca = marca;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number) {
        try {            
            if (precio < 0) throw new ErrorControlado('El precio no puede ser menor a 0');
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
        this.precio = precio;
    }

    public getTalle(): string {
        return this.talle;
    }

    // DUDA: EN LOS SET, ESTOY REPITIENDO EL CÓDIGO QUE YA ESTÁ EN EL CONSTRUCTOR, ESTO ES CORRECTO?
}