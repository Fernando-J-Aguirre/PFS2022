import * as FS from 'fs';
import ManejoTextos from '../manejoTextos/ManejoTextos';
import Color from '../Librerias/color';
import Auto from './Auto';
import Camion from './Camion';
import Camioneta from './Camioneta';
import Vehiculo from './Vehiculo';

//estructura para las palabras
export default class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    public constructor() {
        this.vehiculos=[];     
    }
    
    public addVehiculo(vehiculo:Vehiculo) : void {
        this.vehiculos.push(vehiculo);
    }
    public findVehiculo(dominio: string): number { //Read (retorna posicion)
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].getDominio() == dominio) {
                return i;
            }
        }
        return -1;
    }
    public updVehiculo(dominio: string, vehiculoNuevo: Vehiculo): void { //Update
        let posicion = this.findVehiculo(dominio);
        if (posicion != -1) {
            this.vehiculos[posicion] = vehiculoNuevo;
        }
    }
    public delVehiculo(dominio: string): void {    //Delete
        let posicion=this.findVehiculo(dominio);
        if (posicion != -1) {
            this.vehiculos.splice(posicion,1);
        }
    }
    public cargarVehiculos(): void {
        let datosVehiculos: ManejoTextos = new ManejoTextos('vehiculos.txt','\n',';');
        datosVehiculos.leerArchivo();
        // console.log(datosVehiculos);            
        for (let i = 0; i < datosVehiculos.getCantidadFilas(); i++) {
            let vehiculo : string[] = datosVehiculos.getFila(i);
            let color : Color = new Color(parseInt(vehiculo[6]),parseInt(vehiculo[7]),parseInt(vehiculo[8]))
            switch (vehiculo[0]) {
                case 'Auto': 
                    this.vehiculos.push(new Auto(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),color));
                    break;
                case 'Camioneta': 
                    this.vehiculos.push(new Camioneta(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),color,parseInt(vehiculo[9])));
                    break;
                case 'Camion': 
                    this.vehiculos.push(new Camion(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),color,parseInt(vehiculo[9]),parseInt(vehiculo[10])));
                    break;
            }
        }
    }
    public mostrarVehiculos(posicion?: number): void {
        if (posicion===undefined) {
            console.log('Registro Automotor');
            for (let i = 0; i < this.vehiculos.length; i++) {
                console.log(this.vehiculos[i].mostrar());            
            };
        } else {
            console.log(this.vehiculos[posicion].mostrar());            
        }
    }
    public guardarVehiculos() : void {
        let datosVehiculos: ManejoTextos = new ManejoTextos('vehiculos.txt','\n',';');
        datosVehiculos.limpiarDatos();
        let fila: string[] = [];
        this.vehiculos.forEach(vehiculo => {
            fila = [];
            fila.push(typeof(vehiculo));
            fila.push(vehiculo.getDominio());
            fila.push(vehiculo.getTitular());
            fila.push(vehiculo.getMarca());
            fila.push(vehiculo.getModelo());
            fila.push(vehiculo.getAñO().toString());
            fila.push(vehiculo.getColor().getRed().toString());
            fila.push(vehiculo.getColor().getGreen().toString());
            fila.push(vehiculo.getColor().getBlue().toString());           
            // switch (typeof(vehiculo)) {
            //     case 'Auto':
            //     break;
            //     case 'Camioneta':                    
            //         fila.push(vehiculo.getCapacidad().toString());
            //         break;
            //     case 'Camion': 
            //         fila.push(vehiculo.getCapacidad().toString());
            //         fila.push(vehiculo.getCantidadEjes().toString());
            //         break;
            // }
            datosVehiculos.setFila(fila); 
        });
        datosVehiculos.grabarArchivo()
    }
}