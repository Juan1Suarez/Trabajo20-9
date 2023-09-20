class animal {
    protected nombre: string;
    protected edad: number;
    protected raza: string;

    constructor() {

    }
    hacersonido(sonido: string) {
        console.log(this.nombre, "dijo", sonido)
    }
    moverse(movimiento: number) {
        console.log(this.nombre, "se movio", movimiento, "metros")
    }
}

class perro extends animal {

    constructor(nombre: string, edad: number, raza: string) {
        super()
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    tamañodeperro(tamaño: number) {
        let array = ["pequeño", "mediano", "grande"];
        if (tamaño >= 0 && tamaño < array.length) {
            console.log(this.nombre, "es un ", array[tamaño]);
        }
        else { console.log("solo hay 3 tamaños, pequeño, mediano o grande") }
    }
    buscarjuguete(juguete: number) {
        let array = ["pelota", "hueso"];
        if (juguete >= 0 && juguete < array.length) {
            console.log(this.nombre, "es un ", array[juguete]);
        }
        else { console.log(this.nombre, "no fue a buscar ningún juguete :c") }
    }
    saludar() {
        console.log(this.nombre, "te dio la pata")
    }
}


class gato extends animal {

    constructor(nombre: string, edad: number, raza: string) {
        super()
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    colordelgato(pelaje: number) {
        let array = ["negro", "blanco", "rojo", "azul"];
        if (pelaje >= 0 && pelaje < array.length) {
            console.log(this.nombre, "tiene un pelaje ", array[pelaje]);
        }
    }
    jugarconjuguete(juguete: number) {
        let array = ["raton", "rascador", "vaiven", "pez"];
        if (juguete >= 0 && juguete < array.length) {
            console.log(this.nombre, "empezo a jugar con el ", array[juguete]);
        }
    }
    estadurmiendo(duerme: boolean) {
        if (duerme === true) {
            console.log(this.nombre, "esta durmiendo")
        }
        else (console.log(this.nombre, "no esta durmiendo"))
    }
}

class pájaro extends animal {

    constructor(nombre: string, edad: number, raza: string) {
        super()
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    tipodepico(pico: number) {
        let array = ["frugívoro","granívoro","filtrador","rapaz"];
        if (pico >= 0 && pico < array.length) {
            console.log(this.nombre, "tiene un pico de tipo ", array[pico]);
        }
    }
    volar(vuela:boolean){
        if (vuela === true) {
            console.log(this.nombre, "esta volando")
        }
        else (console.log(this.nombre, "no esta volando"))
    }
    estacomiendo(comida:number){
        let array = ["semillas", "bayas", "frutas", "insectos","peces"];
        if (comida >= 0 && comida < array.length) {
            console.log(this.nombre, "esta comiendo ",array[comida]);
        }
    }
}

let perrito = new perro("juan", 6, "Gran danés");
console.log(perrito);
perrito.tamañodeperro(1);
perrito.moverse(6);
perrito.hacersonido("woof woof");
perrito.saludar();
perrito.buscarjuguete(2);

let gatito = new gato("edwin", 2, "Persa");
console.log(gatito);
gatito.moverse(30)
gatito.hacersonido("miau");
gatito.colordelgato(2);
gatito.jugarconjuguete(2);
gatito.estadurmiendo(false);


let pajarito = new pájaro("anastacia", 16, "Chaja");
console.log(pajarito);
pajarito.moverse(600);
pajarito.hacersonido("crooooow");
pajarito.tipodepico(2);
pajarito.volar(false);
pajarito.estacomiendo(2);