import * as rls from 'readline-sync';

let precioProducto: number= rls.questionFloat('Indique el precio del producto: $');
let cantidadProductos: number= rls.questionFloat('Indique la cantidad de productos: ');
let valorTotal: number= precioProducto * cantidadProductos;
let aplicarDescuento: number= valorTotal - (valorTotal * 0.1);

if (valorTotal > 1000) {
    console.log('Se le aplica descuento de 10%, el precio queda en: $'+aplicarDescuento);
}else{
    console.log('No se aplica descuento, el precio es de: $'+ valorTotal);
}
