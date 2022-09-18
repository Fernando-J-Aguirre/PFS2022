export default abstract class ArticuloLectura {
    private ISBN: number;
    private autor: string;
    private editorial: string;
    private titulo: string;
    protected cantidadPaginas: number;

    constructor(ISBN: number, autor: string, editorial: string, titulo: string, cantidadPaginas: number) {
        this.ISBN = ISBN;
        this.autor = autor;
        this.editorial = editorial;
        this.titulo = titulo;
        this.cantidadPaginas = cantidadPaginas;
    }

    public getISBN(): number { return this.ISBN; }
    public setISBN(ISBN: number): void { this.ISBN = ISBN; }
    public getAutor(): string { return this.autor; }
    public setAutor(autor: string): void { this.autor = autor; }
    public getEditorial(): string { return this.editorial; }
    public setEditorial(editorial: string): void { this.editorial = editorial; }
    public getTitulo(): string { return this.titulo; }
    public setTitulo(titulo: string): void { this.titulo = titulo; }
    public getCantidadPaginas(): number { return this.cantidadPaginas; } 

    abstract setCantidadPaginas(cantidad: number): boolean;
}