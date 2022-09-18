"use strict";

let contador = 0;

let campoInput = document.getElementById("campoInput");
let btnSumar = document.getElementById("btnSumar");
let btnRestar = document.getElementById("btnRestar");
let btnReiniciar = document.getElementById("btnReiniciar");
let txt = document.getElementById("txt");

btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnReiniciar.addEventListener("click", reiniciar);

function sumar() {
    let suma = Number(campoInput.value);
    if (suma) {
        sumarRestarVarios(suma);
    } else {
        contador++;
    }
    mostrar();
}

function restar() {
    let resta = Number(campoInput.value);
    if (resta) {
        sumarRestarVarios(-resta);
    } else {
        contador--;
    }
    mostrar();
}

function sumarRestarVarios(num) {
    contador = contador + num;
    mostrar();
}

function reiniciar() {
    contador = 0;
    campoInput.value = "";
    txt.innerHTML = `Ingrese la cantidad de elementos`;
}

function mostrar() {
    txt.innerHTML = `La cantidad es ${contador}`
    campoInput.value = "";
}
