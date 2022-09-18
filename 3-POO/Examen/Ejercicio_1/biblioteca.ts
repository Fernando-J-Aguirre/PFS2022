import ArticuloLectura from "./articuloLectura";

export default class Biblioteca {
    private nombre: string;
    private domicilio: string;
    private elementos: ArticuloLectura[];

    constructor(nombre: string, domicilio: string) {
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.elementos = [];
    }

    public getNombre(): string { return this.nombre; }
    public setNombre(nombre: string): void { this.nombre = nombre; }
    public getDomicilio(): string { return this.domicilio; }
    public setDomicilio(domicilio: string): void { this.domicilio = domicilio; }

    public create(elemento: ArticuloLectura): void {
        this.elementos.push(elemento);
    }

    //inserta elemento al arreglo en caso que no esté en la lista 
    public insertar(elemento: ArticuloLectura): boolean {
        let agregado: boolean = false;
        this.elementos.forEach(articulo => {
            if (elemento != articulo) {
                this.elementos.push(elemento);
                agregado = true;
            }
        })
        return agregado;
    }

    // se busca elemento por su identificador
    public buscar(identificador: number): ArticuloLectura[] {
        let articulos: ArticuloLectura[] = [];
        try {
            for (let i = 0; i < this.elementos.length; i++) {
                if (identificador == this.elementos[i].getISBN()) {
                    articulos.push(this.elementos[i]);
                } else {
                    throw new Error('No existe ningun articulo con ese identificador')
                }
            }
        } catch (error) {
            console.log(error.message);
        }
        return articulos;
    }

    //se modifica la cantidad de paginas solo en el caso que exista un elemento con ese ISBN y que la cantidad de paginas sea diferente a la actual
    public modificarPaginas(identificador: number, cantidad: number): boolean {
        let modificado: boolean = false;
        this.elementos.forEach(articulo => {
            if ((articulo.getISBN() == identificador) && (articulo.getCantidadPaginas() != cantidad)) {
                modificado = true;
            }
        })
        return modificado;
    }

    //se elimina el elemento si se encuentra el ISBN
    public eliminar(identificador: number): boolean {
        let eliminado: boolean = false;
        for (let i = 0; i < this.elementos.length; i++) {
            if (identificador == this.elementos[i].getISBN()) {
                this.elementos.splice(i, 1);
                eliminado = true;
            }
        }
        return eliminado;
    }

    //se busca por autor
    public buscarPorAutor(autor: string): ArticuloLectura[] {
        let articulos: ArticuloLectura[] = [];
        this.elementos.forEach(elemento => {
            if (autor == elemento.getAutor()) {
                articulos.push(elemento);
            }
        })
        return articulos;
    }

    //imprime cada uno de los elementos del arreglo
    public imprimir(): string {
        let texto: string = '';
        this.elementos.forEach(elemento => {
            texto += `Articulo: ${elemento.getISBN()}\nTitulo: "${elemento.getTitulo()}" del autor ${elemento.getAutor()}\n`
        })
        return texto;
    }
}