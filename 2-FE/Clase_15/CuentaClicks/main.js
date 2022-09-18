"use strict";

let btnContador;
console.log("Paso 1 - Declaré variable btnContador y la igualé al document get Element by Id");
btnContador = document.getElementById("btnContador");
let cuentaClicks = 0;
console.log(" Paso 2 - Acabo de declarar variable 2= cuentaClicks");
btnContador.addEventListener("click", contar);

function contar() {
    console.log(`Paso 3: valor previo de contador ${cuentaClicks}`);
    cuentaClicks++;
    console.log(`Paso 4: valor posterior de contador ${cuentaClicks}`);
    console.log(`Clicks realizados: ${cuentaClicks}`);
}


// let boton; 
// boton = document.getElementById("btnSaludar");

// boton.addEventListener("click", hacerSaludo);

// function hacerSaludo() {
//     console.log('Saludo by ID');
//     alert('Alerta by ID')
// }





// function saludar() {
//     console.log('Holaa!');
//     alert('Mensaje alert)');
//     console.log('Segundo Hola');
//     alert('Segundo alert');
// }