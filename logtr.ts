interface monedaAdapter {
    cambioDolar(amount: number): number;
}

class pesoAdapter implements monedaAdapter {
    cambioDolar(pesos: number): number {
        return pesos * 0.0029 //conversión a 349
    }
}

class euroAdapter implements monedaAdapter {
    cambioDolar(euros: number): number {
        return euros * 1.07
    }
}

class cuenta {
    protected id: number;
    protected nombre: string;
    protected transacciones: transaccion[];

    constructor(nombre: string, id: number) {
        this.nombre = nombre;
          this.id = id;
        this.transacciones = [];
    }

    agregarTransaccion(transaccion: transaccion) {
        this.transacciones.push(transaccion);
    }

    obtenerSaldo(): number {
        let saldo = 0;
        for (let i = 0; i < this.transacciones.length; i++) {
            const transaccion = this.transacciones[i];
            if (transaccion.getMoneda() === "pesos") {
                saldo += pesosAdapter.cambioDolar(transaccion.getCantidad());
                console.log ("cambio de balance de ", transaccion, "convertido en dolares", pesosAdapter.cambioDolar(transaccion.getCantidad()))
            } else if (transaccion.getMoneda() === "euros") {
                saldo += eurosAdapter.cambioDolar(transaccion.getCantidad());
                console.log ("cambio de balance de ",transaccion, "convertido en dolares", eurosAdapter.cambioDolar(transaccion.getCantidad()))
            } else if (transaccion.getMoneda()==="dolares"){
                saldo+=transaccion.getCantidad()
                console.log ("cambio de balance de ", transaccion)
            }
        }
        return saldo;
    }
}

class transaccion {
    protected cantidad:number;
    protected moneda:string
    constructor( cantidad: number,  moneda: string) {
        this.cantidad=cantidad;
        this.moneda=moneda;
    }   
    getCantidad(): number {
        return this.cantidad;
    }

    getMoneda(): string {
        return this.moneda;
    }
}


let cuenta1 = new cuenta("Juan Suarez", 203203);
let cuenta2 = new cuenta("Edwin Mostajo", 352325)


let pesosAdapter = new pesoAdapter();
let eurosAdapter = new euroAdapter();


let transaccion1c1 = new transaccion(777777, "pesos");
let transaccion2c1 = new transaccion(22, "euros");
let transaccion3c1 = new transaccion(-58, "dolares");

console.log (cuenta1);
cuenta1.agregarTransaccion(transaccion1c1);
cuenta1.agregarTransaccion(transaccion2c1);
cuenta1.agregarTransaccion(transaccion3c1);
console.log("Con un balance actual de ",cuenta1.obtenerSaldo(),"dolares" );

console.log("------------------------------------------------------------")


let transaccion1c2 = new transaccion(-700, "pesos");
let transaccion2c2 = new transaccion(6, "euros");
let transaccion3c2 = new transaccion(-15, "dolares");

console.log(cuenta2);
cuenta2.agregarTransaccion(transaccion1c2);
cuenta2.agregarTransaccion(transaccion2c2);
cuenta2.agregarTransaccion(transaccion3c2);
console.log("Con un balance actual de ",cuenta2.obtenerSaldo(),"dolares" );