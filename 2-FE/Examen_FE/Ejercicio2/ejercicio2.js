"use strict";

let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let materia = document.getElementById('materia');
let tbody = document.getElementById('tbody');

let btnAgregar = document.getElementById('btnAgregar');
let btnEliminar = document.getElementById('btnEliminar');

btnAgregar.addEventListener('click', () => {
    let fila = document.createElement('tr');  //creo una fila
    let celda = document.createElement('td'); //creo una celda
    celda.innerHTML = nombre.value;           //toma el valor de la celda, en este el nombre
    fila.appendChild(celda);                  //y agrego la celda a la fila

    celda = document.createElement('td');
    celda.innerHTML = fecha.value;           //se crea otra celda en la misma fila pero se toma el valor de la fecha
    fila.appendChild(celda);

    celda = document.createElement('td');
    celda.innerHTML = materia.value;         //siguiente celda de la misma fila con valor de la materia que seleccione
    fila.appendChild(celda);

    if (materia.value == 'Composición') {             //se valida qué materia fue seleccionada, y según el caso, 
        fila.className = 'composicion';               //se le agrega el estilo ya definido en css a la fila completa
    } else if (materia.value == 'Contrapunto') {
        fila.className = 'contrapunto';
    } else if (materia.value == 'Lenguaje') {
        fila.className = 'lenguaje';
    }

    tbody.appendChild(fila);                       //se agrega la fila al tbody de la tabla

    nombre.value = "";
    fecha.value = "";   
    materia.value = ""; 
})

btnEliminar.addEventListener('click', () => {      
    while (tbody.firstChild) {                    //se realiza la comprobación, mientras tbody tenga un hijo,
        tbody.removeChild(tbody.firstChild);      //lo elimina
    }
    
})

