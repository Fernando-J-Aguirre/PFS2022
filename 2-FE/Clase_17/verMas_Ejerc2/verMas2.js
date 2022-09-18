"use strict";

let btn = document.querySelectorAll(".btn");
let circulo = document.querySelectorAll(".circulo");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        circulo[i].classList.toggle("mostrar");
        if (circulo[i].classList.contains("mostrar")) {
            btn[i].innerHTML = "Ver menos";
        } else {
            btn[i].innerHTML = "Ver más";
        }
    });
}

