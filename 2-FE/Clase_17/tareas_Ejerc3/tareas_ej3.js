'use strict';

let input = document.querySelector(".input");
let btnAdd = document.querySelector(".btnAdd");
let btnDel = document.querySelector(".btnDel")
let orderList = document.querySelector(".orderList");

btnAdd.addEventListener("click", () => {
    let nuevaTarea;
    if(input.value != "") {
        nuevaTarea = document.createElement("li");
        nuevaTarea.innerHTML = input.value;
        orderList.appendChild(nuevaTarea);
    }
    input.value = '';
})


btnDel.addEventListener("click", () => {
    let ultimaTarea = orderList.lastElementChild.remove();
    input.value = '';
})







