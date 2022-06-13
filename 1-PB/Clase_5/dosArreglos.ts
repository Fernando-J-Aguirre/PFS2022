import * as rls from 'readline-sync';

let nombres: string[] = new Array(2);
let numeros: number[] = new Array(3);

let i: number;
for (i = 0; i < 3; i++) {
    numeros[i] = rls.questionInt("Ingrese el numero que desea en la posicion "+ i + ": ");
}
for (i = 0; i < 2; i++) {
    nombres[i] = rls.question("Ingrese el nombre que desea en la posicion " + i + ": ");
}
for (let i = 0; i < 3; i++) {
    console.log(`El numero ingresado en la posicion ${i} es: ${numeros[i]}`);   
}
for (let i = 0; i < 2; i++) {
    console.log(`El nombre ingresado en la posicion ${i} es: ${nombres[i]}`);
}
