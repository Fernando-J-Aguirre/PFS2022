import ErrorControlado from "./errorControlado";
import Tienda from "./tienda";
import Indumentaria from "./indumentaria";

import * as rls from 'readline-sync';


let miTienda: Tienda = new Tienda(rls.question('Ingrese nombre de la Tienda: '));
let opcion: string = rls.question('Ingrese una opcion: C - R - U - D . Presione F para finalizar: ').toUpperCase();
while (opcion != 'F') {
    switch (opcion) {
        case 'C': {
            let datosPrenda: string = rls.question('Ingrese: tipo, marca, precio, talle - en ese orden: ');
            let prenda: string[] = datosPrenda.split(',');
            miTienda.createPrendas(new Indumentaria(prenda[0], prenda[1], parseInt(prenda[2]), prenda[3]));
            break;
        }
        case 'R': {
            let opcion2: string = rls.question('Presione "T" si quiere buscar por Tipo; "M" si busca por talle (medidas): ').toUpperCase();
            switch (opcion2) {
                case 'T': {
                    let prendaT: string = rls.question('Ingrese tipo de prenda a buscar: ');
                    let isPrendaT: Indumentaria[] = miTienda.findPrendasXTipo(prendaT);
                    if (isPrendaT) {                           //SIEMPRE ENTRA POR EL IF, POR MAS QUE SEA FALSO SIEMPRE SE IMPRIME LA SENTENCIA DE ESTE
                        console.log(`Se encontró la prenda de tipo ${prendaT} con estas características: ${miTienda.imprimirPrendas(isPrendaT)}`); //NO ME IMPRIME LA PRENDA ENVIADA COMO PARAMETRO
                    } else {
                        console.log(`No se encontró la prenda de tipo: ${prendaT}`);
                    }
                    break;
                }
                case 'M': {
                    let prendaM: string = rls.question('Ingrese talle de prenda a buscar: ');
                    let isPrendaM: Indumentaria[] = miTienda.findPrendasXTalle(prendaM);
                    if (isPrendaM) {
                        console.log(`Se encontró lo siguiente para el talle ${prendaM}: ${miTienda.imprimirPrendas(isPrendaM)}`);
                    } else {
                        console.log(`No se encontró ninguna prenda para el talle: ${prendaM}`);
                    }
                    break;
                }
            }
            break;
        }
        case 'U': {
            let datosPrenda: string = rls.question('Ingrese: tipo, marca, precio, talle - de la prenda a modificar: ');
            let posPrenda: number = rls.question('Ingrese posición de la prenda a actualizar: ');
            let prenda: string[] = datosPrenda.split(',');
            miTienda.updatePrendas(new Indumentaria(prenda[0], prenda[1], parseInt(prenda[2]), prenda[3]), posPrenda);
            break;
        }
        case 'D': {
            let posPrenda: number = rls.question('Ingrese posicion de la prenda a eliminar: ');
            miTienda.deletePrendas(posPrenda);
            console.log(`La prenda en la posicion ${posPrenda} fue eliminada`);
            break;
        }
    }
    console.log(miTienda);
    opcion = rls.question('Ingrese una opcion: C - R - U - D . Presione F para finalizar: ').toUpperCase();
}



// let remera: Indumentaria = new Indumentaria('Deportiva', 'Nike', 1000, 'xl');
// miTienda.createPrendas(remera);
// console.log(miTienda);
// console.log();

// console.log(remera.getMarca());
// console.log(remera.getPrecio());
// console.log(remera.getTipo());
// console.log(remera.getTalle());

// console.log(miTienda.findPrendasXTalle('e'));



