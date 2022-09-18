"use strict";

// let btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//     if (btn.innerHTML == "Ver más") {
//         btn.innerHTML = "Ver menos";
//     } else {
//         btn.innerHTML = "Ver más";
//     }
//     btn.nextElementSibling.classList.toggle("ocultar");
// })


let btn = document.querySelector(".btn");
let circulo = document.querySelector(".circulo");

btn.addEventListener("click", mostrarOcultar);

function mostrarOcultar() {
    circulo.classList.toggle("mostrar");
    if(circulo.classList.contains("mostrar")) {
        btn.innerHTML = "Ver menos";
    } else {
        btn.innerHTML = "Ver más";
    }
}