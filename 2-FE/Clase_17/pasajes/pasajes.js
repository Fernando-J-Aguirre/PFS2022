"use strict";
let btnReservar = document.getElementById('btnReservar');
let tbody = document.getElementById('tbody');
let fila = document.getElementById('fila');
let asiento = document.getElementById('asiento');
let libres = document.getElementById('libres');

let matriz = [];

function iniciar() {
    let fila = [];
    for (let i = 0; i < 20; i++) {
        fila = [];
        for (let j = 0; j < 3; j++) {
            fila.push("D");
        }
        matriz.push(fila);
    }
}
iniciar()

let disponibles = 0;
function mostrar() {
    for (let i = 0; i < matriz.length; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = i + 1;
        tr.appendChild(td);
        for (let j = 0; j < matriz[i].length; j++) {
            disponibles++;
            td = document.createElement('td');
            td.innerHTML = matriz[i][j];
            td.id = `F${i + 1}A${j + 1}`;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    libres.innerHTML = `Cantidad de asientos disponibles: ${disponibles}`;
}
mostrar();

btnReservar.addEventListener('click', () => {
    while (fila.value > 20 || asiento.value > 3) {
        alert('Numero invalido');
        fila.value = "";
        asiento.value = "";
    }
    let ubicacion = document.getElementById(`F${fila.value}A${asiento.value}`);
    if (ubicacion != "" && ubicacion.innerHTML != "R") {
        ubicacion.innerHTML = "R";
        ubicacion.className = "reserva";
        disponibles--;
    } else {
        alert('Invalido - Alerta del else');
    }
    fila.value = "";
    asiento.value = "";
    libres.innerHTML = `Cantidad de asientos disponibles: ${disponibles}`;
})



// console.log(matriz[fila.value][asiento.value]);


