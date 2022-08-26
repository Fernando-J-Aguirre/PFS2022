import CasaMusica from "./casaMusica";
import CuerdaPulsada from "./cuerdaPulsada";
import Instrumento from "./instrumento";
import Modelo from "./modelo";


let arpa: CuerdaPulsada = new CuerdaPulsada('Arpa', 47);

let modeloGuitarra: Modelo = new Modelo('Criolla', 'Antigua Casa Nuñez');
let guitarra: CuerdaPulsada = new Instrumento(modeloGuitarra, 'Caoba', 'Guitarra', 7, 'Alta'); //Estaría mal poner que sea de tipo Instrumento en vez de CuerdaPulsada?

let modeloBajo: Modelo = new Modelo('Eléctrico', 'Fender');
let bajo: CuerdaPulsada = new Instrumento(modeloBajo, 'Negro', 'Bajo', 4, 'Baja');

let miCasaDeMusica: CasaMusica = new CasaMusica('Instrumentos Musicales');

miCasaDeMusica.createInstrumentos(arpa); 
miCasaDeMusica.createInstrumentos(guitarra);   
miCasaDeMusica.createInstrumentos(bajo);

console.log(miCasaDeMusica);
