interface transaccion{
    ingresodefondos(ingreso: number);
    retirodefondos(retiro: number);
    }


    class transEuro {
        constructor() {
    
        }
        euroadolar(euro:number) {
    let eu =euro * 1.07
    return eu
    
        }
    }
    
    class transPeso {
        constructor() {

        }
        pesoadolar(peso:number) {
    let pe =peso * 0.0029
    return pe
        }
    }






class cuenta implements transaccion {
    protected nombre: string;
    protected id: number;
    protected balance: number;

    constructor(nombre: string, id: number) {
        this.nombre = nombre;
        this.id = id;
        this.balance = 0;
    }
    ingresodefondos(ingreso: number) {
        if (ingreso > 0) {
            this.balance += ingreso;
        } else {
            console.log("Transacción invalida, ingrese una cantidad positiva diferente a 0")
        }

    }
    retirodefondos(retiro: number) {
        if (retiro > 0 && this.balance >= retiro) {
            this.balance -= retiro;
        } else { console.log("Cantidad invalida") }
    }
}



let cuenta1 = new cuenta("Eustaquio", 2459855)


cuenta1.ingresodefondos(600);
cuenta1.retirodefondos(500);
console.log(cuenta1);

let prueba=new transEuro()
prueba.euroadolar(1)

let prueba2= new transPeso()
prueba2.pesoadolar(349)