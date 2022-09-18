import ListaReproduccion from "./administracionCanciones";
import Pista from "./pistaAudio";

let pista1: Pista = new Pista(1, "Yo canibal", 180, "El Indio");
let pista2: Pista = new Pista(2, "Puerto Mont", 230, "Los Iracundos");
let pista3: Pista = new Pista(3, "Let it be", 210, "The Beatles");

let lista1 = new ListaReproduccion("Musica variada");

lista1.createPistas(pista1); 
lista1.createPistas(pista2); 
lista1.createPistas(pista3); 

console.log(lista1.getNombre());
console.log(lista1.imprimirLista());
console.log(lista1.getDuracion());

let pista4: Pista = new Pista(4, "So What", 370, "Miles Davis");
lista1.addPista(pista4);
lista1.setNombre("Varios");

console.log(lista1.getCantidad());
console.log(lista1.getNombre());
console.log(lista1.imprimirLista());
console.log(lista1.getDuracion());


let pista5: Pista = new Pista(2, "The scientist", 190, "Coldplay");
lista1.updatedPista(pista5, 1);
console.log(lista1.imprimirLista());
console.log(lista1.getDuracion());
console.log(lista1.getCantidad());
console.log(lista1.imprimirPistas());