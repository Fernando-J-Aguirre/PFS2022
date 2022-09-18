import  RegistroAutomotor  from "./Registro";
import Auto from "./Auto";
import Camion from "./Camion";
import Camioneta from "./Camioneta";
import Color from "../Librerias/color";

import * as RLS from 'readline-sync';

//Inicializacion
let registro : RegistroAutomotor = new RegistroAutomotor();
registro.cargarVehiculos();
registro.mostrarVehiculos();
//Principal
//menu de opciones CRUD        
let opcion: string = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            let datosVehiculo = RLS.question('Ingrese los datos del vehiculo a agregar: ');
            let vehiculo: string[] = datosVehiculo.split(';');
            let color : Color = new Color(parseInt(vehiculo[6]),parseInt(vehiculo[7]),parseInt(vehiculo[8]))
            switch (vehiculo[0]) {
                case 'Auto': 
                    registro.addVehiculo(new Auto(vehiculo[0],vehiculo[1],vehiculo[2],vehiculo[3],parseInt(vehiculo[4]),color));
                    break;
                case 'Camioneta': 
                    registro.addVehiculo(new Camioneta(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),color,parseInt(vehiculo[9])));
                    break;
                case 'Camion': 
                    registro.addVehiculo(new Camion(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),color,parseInt(vehiculo[9]),parseInt(vehiculo[10])));
                    break;
            }
        }
        case 'R': {
            let dominio: string = RLS.question('Ingrese el dominio a buscar: ');
            let posAuto: number = registro.findVehiculo(dominio);
            if (posAuto!=-1) {
                console.log(`Encontre el dominio ${dominio} para ${registro.mostrarVehiculos(posAuto)} en la posicion ${posAuto}.`);
            } else {
                console.log(`No encontre el dominio ${dominio}`);                
            }
            break;            
        }
        case 'U': {
            let dominio: string = RLS.question('Ingrese el dominio a modificar: ');
            let datosVehiculo = RLS.question('Ingrese los datos del vehiculo a agregar: ');
            let vehiculo: string[] = datosVehiculo.split(';');
            let color : Color = new Color(parseInt(vehiculo[6]),parseInt(vehiculo[7]),parseInt(vehiculo[8]))
            switch (vehiculo[0]) {
                case 'Auto': 
                    registro.updVehiculo(dominio,new Auto(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),color));
                    break;
                case 'Camioneta': 
                    registro.updVehiculo(dominio,new Camioneta(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),color,parseInt(vehiculo[9])));
                    break;
                case 'Camion': 
                    registro.updVehiculo(dominio,new Camion(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),color,parseInt(vehiculo[9]),parseInt(vehiculo[10])));
                    break;
            }
            break;
        }
        case 'D': {
            let dominio: string = RLS.question('Ingrese el dominio a eliminar: ');
            registro.delVehiculo(dominio);
            break;                        
        }
    }
    registro.mostrarVehiculos();
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}

