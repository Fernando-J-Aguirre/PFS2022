import ErrorControlado from "./errorControlado";

export default class Indumentaria {
    private tipo: string; //deportiva, clásica, casual, elegante
    private marca: string;
    private precio: number;
    private talle: string;

    constructor(tipo: string, marca: string, precio: number, talle: string) {
        try {
            if (tipo.trim() == "") throw new ErrorControlado('El tipo no puede estar vacio');
            this.tipo = tipo.trim();
            if (marca.trim() == "") throw new ErrorControlado('La marca no puede estar vacia');
            this.marca = marca.trim();
            if (isNaN(precio)) throw new ErrorControlado('El precio debe ser un numero');
            if (precio < 0) throw new ErrorControlado('El precio no puede ser menor a 0');
            this.precio = precio;
            let talles: string[] = ['S', 'L', 'M', 'XL'];
            if (talles.indexOf(talle.toUpperCase().trim()) == -1) {
                throw new ErrorControlado('El talle no existe, seleccione talle valido: S, L, M o XL');
            }
            this.talle = talle.toUpperCase().trim();
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);
        }
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        try {
            if (tipo == "") throw new ErrorControlado('El tipo no puede estar vacio');
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
            if (marca == "") throw new ErrorControlado('La marca no puede estar vacia');
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
            if (isNaN(precio)) throw new ErrorControlado('El precio debe ser un numero');
            if (precio < 0) throw new ErrorControlado('El precio no se puede cambiar a 0');
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);
        }
        this.precio = precio;
    }

    public getTalle(): string {
        return this.talle;
    }

    public setTalle(talle: string): void {
        try {
            let talles: string[] = ['S', 'L', 'M', 'XL'];
            if (talles.indexOf(talle.toUpperCase().trim()) == -1) {
                throw new ErrorControlado('El talle no existe, seleccione talle valido: S, L, M o XL');
            }
            this.talle = talle.toUpperCase().trim();
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);
        }

    }

}