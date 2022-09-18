let equipo: number[] = new Array(11);

function aleatorio(minimo: number, maximo: number): number {
    return Math.floor((Math.random() * (maximo - minimo) + minimo))
}

function cargarEdades(v: number[]) {
    for (let i = 0; i < v.length; i++) {
        v[i] = aleatorio(3, 8);
    }
}

cargarEdades(equipo);

function calcularPromedio(v: number[]): number {
    let suma: number = 0;
    for (let i = 0; i < v.length; i++) {
        suma += v[i];
    }
    return Math.floor((suma / 11) * 100) / 100;
}

let promedioEquipo: number = calcularPromedio(equipo);


console.log(`Las edades del equipo son: ${equipo}\nEl promedio de las mismas es: ${promedioEquipo}`); 
 //con Alt + 92 se crea esto: \ (el \n sirve para saltar linea)