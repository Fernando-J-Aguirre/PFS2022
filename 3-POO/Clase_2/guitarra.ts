class Guitarra {
    private color: string;
    private cuerdas: number; // cantidad de cuerdas
    private modelo: Modelo; // clase Modelo
    private marca: Marca; // clase Marca

    constructor(modelo: Modelo, marca: Marca, color: string, cuerdas?: number) {
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        if ((cuerdas >= 6) && (cuerdas <= 12)) {
            this.cuerdas = cuerdas;
        } else if (cuerdas == undefined) {
            this.cuerdas = 6;
        }
    }
    
    public getColor(): string {
        return this.color;
    }

    public isDiestro(diestro) : boolean {
       return this.modelo.isDiestro(diestro);
    }
}

class Modelo {
    private tipo: string;
    private diestro: boolean; //lateralidad - guitarra para diestro o zurdo

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    public isDiestro(diestro: boolean): boolean {
        this.diestro = diestro;
        return diestro = true;
    }
   
}

class Marca {
    private marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }
} 

let modelo1: Modelo = new Modelo("Criolla");
let marca1: Marca = new Marca("Antigua Casa Nuñez");
let guitarra1: Guitarra = new Guitarra(modelo1, marca1, "Caoba", 7);
guitarra1.isDiestro(true);

console.log(guitarra1);

let modelo2: Modelo = new Modelo("Acústica");
let marca2: Marca = new Marca("Taylor");
let guitarra2: Guitarra = new Guitarra(modelo2, marca2, "Natural"); //omito el 4to parámetro opcional: cuerdas
guitarra2.isDiestro(false);

console.log(guitarra2);