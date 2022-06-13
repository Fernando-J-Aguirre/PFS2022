import * as rls from 'readline-sync';

let palabra: string = rls.question("Ingrese palabra: ");

function invertirPalabra(texto: string): string {
    let cadena: string = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        cadena += texto[i];
    }
    return cadena;
}

let palabraInvertida: string = invertirPalabra(palabra);

if (palabraInvertida == palabra) {
    console.log(`La palabra ${palabra} es palindroma`);
} else {
    console.log(`La palabra ${palabra} no es palindroma, invertida queda: ${palabraInvertida}`);
}
