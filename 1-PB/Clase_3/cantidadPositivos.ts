import * as rls from 'readline-sync';

let valorUsuario: number = rls.questionInt("Introduce un numero, para finalizar introduzca cero: ");
let positivos: number = 0;
let cantidad: number = 0;
let porcentaje: number = 0;

while (valorUsuario != 0) {
    if (valorUsuario > 0) {
        positivos++;
    }
    cantidad++;
    valorUsuario = rls.questionInt("Introduce un numero, para finalizar introduzca cero: ");
}
if (cantidad > 0) {
    porcentaje = (positivos * 100) / cantidad;
}

console.log(`Cantidad positivos es ${positivos} con un porcentaje de ${porcentaje}%`);
