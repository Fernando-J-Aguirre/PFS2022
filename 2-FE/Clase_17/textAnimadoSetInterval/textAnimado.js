"use strict";

let intervalo;

document.getElementById('btn').addEventListener("click", () => {
   intervalo = setInterval(iniciarAnimacion, 200)
});

let text = document.getElementById('text').innerText;

// function iniciarAnimacion() {
//     let intervalo = setInterval(() => {
//         text = text[text.length - 1] + text.substring(0, text.length - 1);
//         document.getElementById('text').innerText = text;
//     }, 200);
// }

function iniciarAnimacion() {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    document.getElementById('text').innerText = text;
}

document.getElementById('btnParar').addEventListener('click', () => {
    clearInterval(intervalo);
})

