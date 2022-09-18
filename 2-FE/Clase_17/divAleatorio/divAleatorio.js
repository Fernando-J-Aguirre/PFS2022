let btn = document.getElementById("btn");


// function colorAleatorio () {
//     let caracteres = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += caracteres(Math.floor(Math.random() * 16));
//     }
//     return color;
// }



// btn.addEventListener("click", () => {
//     let color = '#';
//     color += Math.random().toString(16).slice(2,8);
//     console.log(color)
// }) 

document.getElementById('btChange').addEventListener('click', () => {
    let top = Math.floor(Math.random() * screen.height) + "px";
    let left = Math.floor(Math.random() * screen.width) + "px";
    let height = Math.floor(Math.random() * (screen.height)) + "px";
    let width = Math.floor(Math.random() * (screen.width)) + "px";
    let color = new Array(3);
    for (let i = 0; i < 3; i++) {
        color[i] = Math.floor(Math.random() * 17);
        if (color[i] > 9) {
            let letras = ['A', 'B', 'C', 'D', 'E', 'F'];
            color[i] = letras[color[i]-10];
        }
    }
    console.log(color);
    color = color.join('')
    color = '#' + color

    document.getElementById('nuestroDiv').style = `height: ${height}; width: ${width}; top: ${top}; left: ${left}; background-color: ${color}`;
})