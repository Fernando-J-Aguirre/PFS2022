import * as rls from 'readline-sync';

let palabra: string = rls.question("Ingresar palabra a convertir: ");


function convertirClave(texto: string): string {
    let clave: string = "";
    let vocal: string = "aeiou";
    let caracter: string = ".,;:!";
    let matematico: string = "0123456789+-*/";
    for (let i = 0; i < texto.length; i++) {
        if (matematico.indexOf(texto[i]) >= 0) {
            clave += texto[i];
        } else if (vocal.indexOf(texto[i]) >= 0) {
            clave += caracter[vocal.indexOf(texto[i])];
        } else if (texto[i] == texto[i].toUpperCase()) {
            clave += texto[i].toLowerCase();
        } else {
            clave += texto[i].toUpperCase();
        }
    }
    return clave;
}

let claveConvertida: string = convertirClave(palabra);
console.log("Su palabra convertida en clave queda: ", claveConvertida);
