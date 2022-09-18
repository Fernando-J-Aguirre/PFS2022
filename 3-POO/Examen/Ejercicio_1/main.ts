import ArticuloLectura from "./articuloLectura";
import Biblioteca from "./biblioteca";
import Libro from "./libro";
import Revista from "./revista";

let biblioteca: Biblioteca = new Biblioteca("Rivadavia", "San Martín 516");

let libro1: ArticuloLectura = new Libro(123, "Gabriel García Marquez", "Editorial Sudamericana", "Cien años de soledad", 471);
let libro2: ArticuloLectura = new Libro(456, "Leon Tolstoi", "Alianza", "Guerra Y Paz", 1500);

let revista1: ArticuloLectura = new Revista(789, "Universidad Nacional del Sur", "Editorial UNS", "Estudios economicos", 37);
let revista2: ArticuloLectura = new Revista(112, "Hernandez", "Editorial Tierras", "Estrategias de desarrollo", 45);


biblioteca.create(libro1);
// biblioteca.create(libro2);
console.log(biblioteca.insertar(libro1));
biblioteca.create(revista1)

// biblioteca.insertar(libro2);

console.log(biblioteca.insertar(libro2));

console.log(biblioteca.imprimir());

console.log(biblioteca.buscar(123));

console.log(libro1.setCantidadPaginas(255));
console.log(revista1.setCantidadPaginas(51));




// biblioteca.eliminar(456);

// biblioteca.insertar(revista1);
// biblioteca.insertar(revista2);

// biblioteca.modificarPaginas(112, 44);