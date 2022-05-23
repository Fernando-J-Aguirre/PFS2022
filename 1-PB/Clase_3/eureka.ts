import * as rls from 'readline-sync';

let contador: number = 1;

let claveIngresada: string = rls.question('Ingrese su clave: ', { hideEchoBack: true });

while ((claveIngresada != 'eureka') && (contador < 3)) {
    console.log('Su clave es incorrecta');
    claveIngresada = rls.question('Ingrese su clave: ', { hideEchoBack: true });
    contador++;
}
if (claveIngresada != 'eureka') {
    console.log('Clave incorrecta, se agotaron todas las posibilidades');
}
