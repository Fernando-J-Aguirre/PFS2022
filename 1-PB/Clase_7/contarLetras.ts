import * as rls from 'readline-sync';

let frase: string = rls.question("Ingrese una frase: ");
let cuentaLetras: number[] = new Array(26);
let letras: string = "abcdefghijklmnopqrstuvwxyz";

function contarLetras(texto: string, cantidades: number[], letras: string) {
    for (let i = 0; i < cantidades.length; i++) { // se inicializa el arreglo en 0
        cantidades[i] = 0;
    }
    texto = texto.toLowerCase();  //convierte todo a minúscula para que cuente todas las letras
    for (let i = 0; i < texto.length; i++) {  
        if (letras.indexOf(texto[i]) >= 0) { //recorre el abecedario en la posición [i]
            cantidades[letras.indexOf(texto[i])]++; 
        }
    }
}

contarLetras(frase, cuentaLetras, letras); 
console.log(cuentaLetras); 

function listarCuenta(cantidades: number[], letras: string): string {
    let cuantasVecesCadaLetra: string = "";
    for (let i = 0; i < cantidades.length; i++) {
        if (cantidades[i] > 0) {
            cuantasVecesCadaLetra += cantidades[i].toString() + " " + letras[i] + " - "; // recorre el arreglo para mostrar cuáles y cuantas son las letras de la frase guardándolo en una nueva cadena 
        }
    }
    return cuantasVecesCadaLetra;
}

console.log((`La frase: "${frase}" tiene: ${listarCuenta(cuentaLetras, letras)}`));



















