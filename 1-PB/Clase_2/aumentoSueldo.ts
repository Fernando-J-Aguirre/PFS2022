import * as rls from 'readline-sync';

let sueldoActual: number= rls.questionFloat('Indique su sueldo actual: $');

if(sueldoActual <= 15000) {
    console.log('Se le aplicó un aumento del 20%: $' + (sueldoActual + (sueldoActual * 0.2)));
}else{
    if((sueldoActual >= 15001) && (sueldoActual <= 20000)) {
        console.log('Se le aplicó un aumento del 10%: $' + (sueldoActual + (sueldoActual * 0.1)));
    }else{
        if((sueldoActual >= 20001) && (sueldoActual <= 25000)) {
            console.log('Se le aplicó un aumento del 5%: $' + (sueldoActual + (sueldoActual * 0.05)));            
        }else{
            console.log('No le corresponde aumento');
            
        }
    }
}