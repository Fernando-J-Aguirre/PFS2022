"use strict";

let dados = document.getElementById("btnDados");
let txt = document.getElementById("txt");

dados.addEventListener("click", () => {
    let contador = 0;
    for (let i = 0; i < 1000; i++) {
        let dado1 = Math.floor((Math.random() * 6) + 1);
        let dado2 = Math.floor((Math.random() * 6) + 1);
        if (dado1 + dado2 == 7) {
            contador++;
        }
    }
    mostrarResultado(contador);
})

function mostrarResultado(num) {
    txt.innerHTML = `Cantidad de veces que salió 7: ${num}`;
}

// dados.addEventListener("click", tirarDados);

// function tirarDados() {
//     let contador = 0;
//     for (let i = 0; i < 1000; i++) {
//         let dado1 = Math.floor((Math.random() * 6) + 1);
//         let dado2 = Math.floor((Math.random() * 6) + 1);
//         if (dado1 + dado2 == 7) {
//             contador++;
//         }
//     }
//     mostrarResultado(contador);
// }

// function mostrarResultado(num) {
//     txt.innerHTML = `Cantidad de veces que salió 7: ${num}`;
// }
