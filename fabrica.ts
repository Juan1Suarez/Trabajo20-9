abstract class vehiculo {
    public marca: string;
    protected modelo: string;
    protected asientos: number;
    protected carga: number;

    constructor(marca: string, modelo: string, asientos: number, carga: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
        this.carga = carga;
    }
    tostring() {
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nCantidad de asientos  ${this.asientos} \nCapacidad de carga  ${this.carga} `
    }

    abstract crearvehiculo(): vehiculo;
}


class auto extends vehiculo {
    crearvehiculo(): vehiculo {
        return new auto(this.marca, this.modelo, this.asientos, this.carga);
    }
}


class camioneta extends vehiculo {
    crearvehiculo(): vehiculo {
        return new camioneta(this.marca, this.modelo, this.asientos, this.carga);
    }
}


class motocicleta extends vehiculo {
    crearvehiculo(): vehiculo {
        return new motocicleta(this.marca, this.modelo, this.asientos, this.carga);
    }
}


function vehiculoFactory(tipo: string, marca: string, modelo: string, asientos: number, carga: number): vehiculo {
    if (tipo === "auto") {
        return new auto(marca, modelo, asientos, carga);
    } else if (tipo === "camioneta") {
        return new camioneta(marca, modelo, asientos, carga);
    } else if (tipo === "motocicleta") {
        return new motocicleta(marca, modelo, asientos, carga);
    }
    throw new Error("Vehiculo no valido")
}

const vehiculo1 = vehiculoFactory("auto", "Fiat", "espacio TR", 3, 4);
console.log(vehiculo1?.tostring());
console.log("-------------------------------------------------------------------")
const vehiculo2 = vehiculoFactory("camioneta", "Ford", "F100", 1, 2);
console.log(vehiculo2?.tostring());
console.log("-------------------------------------------------------------------")
const vehiculo3 = vehiculoFactory("motocicleta", "Honda", "Titan", 1, 2);
console.log(vehiculo3?.tostring());
console.log("-------------------------------------------------------------------")
const vehiculo4 = vehiculoFactory("tractor", "Jhon deere", "5060E", 1, 1);
console.log(vehiculo4?.tostring());
