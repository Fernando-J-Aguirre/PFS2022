import CasaMusica from "./casaMusica";
import CuerdaPulsada from "./cuerdaPulsada";
import Instrumento from "./instrumento";
import Modelo from "./modelo";

let modeloArpa: Modelo = new Modelo('Acústica', 'Yamaha')
let arpa: Instrumento = new Instrumento(modeloArpa, 'Natural', 'Arpa', 47);

let modeloGuitarra: Modelo = new Modelo('Criolla', 'Antigua Casa Nuñez');
let guitarra: Instrumento = new Instrumento(modeloGuitarra, 'Caoba', 'Guitarra', 7, 'Alta');

let modeloBajo: Modelo = new Modelo('Eléctrico', 'Fender');
let bajo: Instrumento = new Instrumento(modeloBajo, 'Negro', 'Bajo', 4, 'Baja');

let miCasaDeMusica: CasaMusica = new CasaMusica('Instrumentos Musicales');

miCasaDeMusica.createInstrumentos(arpa);
guitarra.afinar();
miCasaDeMusica.createInstrumentos(guitarra);
miCasaDeMusica.createInstrumentos(bajo);

 
console.log(miCasaDeMusica);

if (miCasaDeMusica.findInstrumentosXTipo('Criolla')) {
    console.log('Hay una guitarra Criolla');
} else {
    console.log('No hay guitarra Criolla');
}
