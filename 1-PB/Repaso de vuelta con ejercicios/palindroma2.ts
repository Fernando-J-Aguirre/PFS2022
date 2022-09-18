import * as rls from 'readline-sync';

let palabra: string = rls.question('Ingrese palabra para corroborar si es palindroma: ');

function invertirCadena(cadena: string): string {
    let invertida: string = "";
    for(let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i];       
    }
    return invertida;
}
let palabraInvertida: string = invertirCadena(palabra);

if (palabra == palabraInvertida) {
    console.log(`La palabra ${palabra} es palindroma y queda de la siguiente manera: ${palabraInvertida}`);    
} else {
    console.log(`La palabra ${palabra}, no es palindroma y queda de la siguiente manera: ${palabraInvertida}`);    
}


