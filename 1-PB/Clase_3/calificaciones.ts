import * as rls from 'readline-sync';

let alumno: string;
let practica: number;
let ejercicios: number;
let teorica: number;
let resultado: number;

alumno = rls.question('Ingrese su nombre: ');

while (alumno !== '') {
    console.log('Por favor, ingrese notas entre 0 y 10');
    practica = rls.question('Ingrese su notas de practica: ');
    ejercicios = rls.question('Ingrese nota de ejercicios: ');
    teorica = rls.question('Ingrese nota de parte teorica: ');
    if (((practica < 0) || (practica > 10)) || ((ejercicios < 0) || (ejercicios > 10)) || ((teorica < 0) || (teorica > 10))) {
        console.log('Error, un numero ingresado no es valido.');
        break;
    }
    resultado = practica * 0.1 + ejercicios * 0.5 + teorica * 0.4;
    console.log('El resultado de sus notas es: ' + resultado);
    alumno = rls.question('Ingrese su nombre: ');
}