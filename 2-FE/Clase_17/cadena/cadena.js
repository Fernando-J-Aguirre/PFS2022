let container = document.getElementById("container");
let btnCadena = document.getElementById("btnCadena");

let cadena = [];

btnCadena.addEventListener("click", () => {
    for (let i = 1; i < 101; i++) {
        cadena.push("" + i);
    }
    mostrar()
})
console.log(cadena);

function mostrar() {
    let nuevoP = document.createElement("p");
    nuevoP.innerHTML = `Cadena: ${cadena}`;
    container.appendChild(nuevoP);
}
