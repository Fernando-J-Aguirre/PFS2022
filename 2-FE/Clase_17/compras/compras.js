let ultDiv = document.getElementById("ultDiv");
let btnAgregar = document.getElementsByClassName("btnAgregar");
let btnSuma = document.getElementById("suma");
let total = document.getElementById("total");
let reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", reinicializar);


let valores = [1000, 1500, 2000];
let nuevoArray = [];
let cantidad = 0;
let cont1 = 0;
let cont2 = 0;
let cont3 = 0;

let nuevoElemento1 = document.createElement("p");
let nuevoElemento2 = document.createElement("p");
let nuevoElemento3 = document.createElement("p");
nuevoElemento1.innerHTML = '';
nuevoElemento2.innerHTML = '';
nuevoElemento3.innerHTML = '';
ultDiv.appendChild(nuevoElemento1);
ultDiv.appendChild(nuevoElemento2);
ultDiv.appendChild(nuevoElemento3);
for (let i = 0; i < btnAgregar.length; i++) {
    btnAgregar[i].addEventListener("click", () => {
        nuevoArray.push(valores[i]);
        cantidad++;
        if (valores[i] === 1000) {
            cont1++;
            console.log("cont1", cont1);
            nuevoElemento1.innerHTML = `Artículo ${i + 1} - Unidades: ${cont1}`;
        } else if (valores[i] === 1500) {
            cont2++;
            console.log("cont2", cont2);
            nuevoElemento2.innerHTML = `Artículo ${i + 1} - Unidades: ${cont2}`;
        } else if (valores[i] === 2000) {
            cont3++;
            console.log("cont3", cont3);
            nuevoElemento3.innerHTML = `Artículo ${i + 1} - Unidades: ${cont3}`;
        }
        total.innerHTML = '';
    })
}












// for (let i = 0; i < btnAgregar.length; i++) {
//     btnAgregar[i].addEventListener("click", () => {
//         nuevoArray.push(valores[i]);    
//         cantidad++;
//         // let nuevoElemento = document.createElement("p");
//         // nuevoElemento.innerHTML = `Artículo ${i + 1} - Valor de este producto: $<span>${valores[i]}</span>`;
//         // ultDiv.appendChild(nuevoElemento);
//         // total.innerHTML = '';
//         // mostrar();
//     })
// }
// console.log(nuevoArray);





btnSuma.addEventListener("click", () => {
    let suma = 0;
    for (let i = 0; i < nuevoArray.length; i++) {
        suma += nuevoArray[i];
    }
    total.innerHTML = `El total a pagar es de: $<span>${suma}</span><br>Cantidad de productos: ${cantidad}</br>`;
})

function reinicializar() {
    cantidad = 0;
    nuevoArray = [0];
    while (ultDiv.firstChild) {
        ultDiv.removeChild(ultDiv.firstChild);
    }
    total.innerHTML = `Agregue productos`;
}



// function mostrar() {
//     for (let i = 0; i < btnAgregar.length; i++) {
//         let nuevoElemento = document.createElement("p");
//         nuevoElemento.innerHTML = `Artículo ${i + 1} - Cantidad de este producto: ${cantidad}`;
//         ultDiv.appendChild(nuevoElemento);
//     }
// }