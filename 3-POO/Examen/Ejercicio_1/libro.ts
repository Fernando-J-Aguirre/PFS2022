import ArticuloLectura from "./articuloLectura";

export default class Libro extends ArticuloLectura {

    constructor(ISBN: number, autor: string, editorial: string, titulo: string, cantidadPaginas: number) {
        super(ISBN, autor, editorial, titulo, cantidadPaginas);
    }

    public setCantidadPaginas(cantidad: number): boolean {
        let paginas: boolean = true;
        if (cantidad <= 0) {
            paginas = false;
        }
        return paginas;
    }
}