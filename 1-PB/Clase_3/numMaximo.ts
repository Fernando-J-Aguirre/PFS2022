import * as rls from 'readline-sync';

let numIngresado: number;
let valorMax: number;

//se toma el primer número como valor maximo
numIngresado = rls.questionInt('Ingrese un numero, para finalizar introduzca el numero 0: ');
valorMax = numIngresado;

while (numIngresado != 0) {
    numIngresado = rls.questionInt('Ingrese un numero, para finalizar introduzca el numero 0: ');
    if ((numIngresado > valorMax) && (numIngresado != 0)) {
        valorMax = numIngresado;
    }
}
console.log('El numero maximo ingresado es: ' + valorMax);
/*
Para hallar el mínimo habría que cambiarle el nombre a la variable;
let valorMin: number;
Y el if dentro del while
    if ((numIngresado < valorMin) && (numIngresado != 0)) {
*/