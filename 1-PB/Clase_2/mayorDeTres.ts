import * as rls from 'readline-sync';

let num1: number= rls.questionFloat('Indique el primer numero: ');
let num2: number= rls.questionFloat('Indique el segundo numero: ');
let num3: number= rls.questionFloat('Indique el tercer numero: ');

if ((num1 == num2) && (num2 == num3)) {
    console.log('No hay numero mayor');
}else{
    if((num1 >= num2) && (num1 > num3)) {
        console.log('El mayor de los tres numeros es: ' + num1);
    }else{
        if((num2 > num1) && (num2 >= num3)) {
            console.log('El mayor de los tres numeros es: ' + num2);        
        }else{
            console.log('El mayor de los tres numeros es ' + num3);
        }
    }
}
