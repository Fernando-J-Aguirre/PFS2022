// Diseñar un algoritmo que muestre por pantalla la tabla de
// multiplicación del número ingresado por el usuario
// • Para definir hasta qué número desea que muestre la tabla de
// multiplicación, el usuario también deberá ingresar un valor

// Ingrese el número: 9
// Ingrese hasta qué número: 4
// 9 x 1 = 9
// 9 x 2 = 18
// 9 x 3 = 27
// 9 x 4 = 36

import * as rls from 'readline-sync';

let num: number = rls.questionInt("Ingrese numero a multiplicar: ");
let hastaNum: number = rls.questionInt("Ingrese hasta que numero desea multiplicar: ");

let multiplicar: number = 0;
for (let i = 1; i <= hastaNum; i++) {
    multiplicar = num * i;
    console.log(`${num} x ${i} = ${multiplicar}`);
}

