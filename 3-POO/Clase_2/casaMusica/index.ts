import CasaMusica from "./casaMusica";
import Instrumento from "./instrumento";

import * as rls from 'readline-sync';

let casaM : CasaMusica = new CasaMusica('Max Music');

let opcion: string = rls.question('Ingrese una opción, "F" para finalizar: ').toUpperCase();
while (opcion != "f") {
    switch (opcion) {
        case 'C': {
            let datosInstrumento = rls.question('Ingrese los datos del instrumento a agregar: ');
            let modelo1 = rls.question('Ingrese los datos del modelo: ');
            let instrumento: string[] = datosInstrumento.split(',');
            casaM.createInstrumentos(new Instrumento(modelo1, instrumento[1], instrumento[2], parseInt(instrumento[3]), instrumento[4]));
            break;
        }


    } 

}
console.log(casaM);
console.log(casaM.readInstrumentos);

