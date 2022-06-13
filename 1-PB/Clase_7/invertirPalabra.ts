import * as rls from 'readline-sync';

let palabra: string = rls.question("Ingrese palabra: ");

console.log(`La palabra: ${palabra} invertida queda: ${invertir(palabra)}`);

function invertir(cadena: string): string {
    let palabraInvertida: string = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        palabraInvertida += cadena[i];
    }
    return palabraInvertida;
}
