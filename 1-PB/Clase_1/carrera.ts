import * as rl from 'readline-sync';

let vuelta1: number = rl.questionInt('Tiempo de vuelta 1: ');
let vuelta2: number = rl.questionInt('Tiempo de vuelta 2: ');
let vuelta3: number = rl.questionInt('Tiempo de vuelta 3: ');
let vuelta4: number = rl.questionInt('Tiempo de vuelta 4: ');
let sumaVueltas: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let promedioVueltas: number = sumaVueltas / 4;
console.log('Tiempo total:',sumaVueltas);
console.log('Promedio de vuelta:',promedioVueltas);