import ArticuloLectura from "./articuloLectura";

export default class Revista extends ArticuloLectura {
    private articulos: string[];

    constructor(ISBN: number, autor: string, editorial: string, titulo: string, cantidadPaginas: number){
        super(ISBN, autor, editorial, titulo, cantidadPaginas);
    }

    public setCantidadPaginas(cantidad: number): boolean {
        let paginas: boolean = true;
        try {
            if (cantidad > 50) {
                paginas = false; 
                throw new Error('Una revista puede tener maximo 50 paginas');
            }        
        } catch (error) {
            console.log(error.message);            
        }
        return paginas;
    }
}