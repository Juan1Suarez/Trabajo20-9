var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.hacersonido = function (sonido) {
        console.log(this.nombre, "dijo", sonido);
    };
    animal.prototype.moverse = function (movimiento) {
        console.log(this.nombre, "se movio", movimiento, "metros");
    };
    return animal;
}());
var perro = /** @class */ (function (_super) {
    __extends(perro, _super);
    function perro(nombre, edad, raza) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.raza = raza;
        return _this;
    }
    perro.prototype.tamañodeperro = function (tamaño) {
        var array = ["pequeño", "mediano", "grande"];
        if (tamaño >= 0 && tamaño < array.length) {
            console.log(this.nombre, "es un ", array[tamaño]);
        }
        else {
            console.log("solo hay 3 tamaños, pequeño, mediano o grande");
        }
    };
    perro.prototype.buscarjuguete = function (juguete) {
        var array = ["pelota", "hueso"];
        if (juguete >= 0 && juguete < array.length) {
            console.log(this.nombre, "es un ", array[juguete]);
        }
        else {
            console.log(this.nombre, "no fue a buscar ningún juguete :c");
        }
    };
    perro.prototype.saludar = function () {
        console.log(this.nombre, "te dio la pata");
    };
    return perro;
}(animal));
var gato = /** @class */ (function (_super) {
    __extends(gato, _super);
    function gato(nombre, edad, raza) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.raza = raza;
        return _this;
    }
    gato.prototype.colordelgato = function (pelaje) {
        var array = ["negro", "blanco", "rojo", "azul"];
        if (pelaje >= 0 && pelaje < array.length) {
            console.log(this.nombre, "tiene un pelaje ", array[pelaje]);
        }
    };
    gato.prototype.jugarconjuguete = function (juguete) {
        var array = ["raton", "rascador", "vaiven", "pez"];
        if (juguete >= 0 && juguete < array.length) {
            console.log(this.nombre, "empezo a jugar con el ", array[juguete]);
        }
    };
    gato.prototype.estadurmiendo = function (duerme) {
        if (duerme === true) {
            console.log(this.nombre, "esta durmiendo");
        }
        else
            (console.log(this.nombre, "no esta durmiendo"));
    };
    return gato;
}(animal));
var pájaro = /** @class */ (function (_super) {
    __extends(pájaro, _super);
    function pájaro(nombre, edad, raza) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.raza = raza;
        return _this;
    }
    pájaro.prototype.tipodepico = function (pico) {
        var array = ["frugívoro", "granívoro", "filtrador", "rapaz"];
        if (pico >= 0 && pico < array.length) {
            console.log(this.nombre, "tiene un pico de tipo ", array[pico]);
        }
    };
    pájaro.prototype.volar = function (vuela) {
        if (vuela === true) {
            console.log(this.nombre, "esta volando");
        }
        else
            (console.log(this.nombre, "no esta volando"));
    };
    pájaro.prototype.estacomiendo = function (comida) {
        var array = ["semillas", "bayas", "frutas", "insectos", "peces"];
        if (comida >= 0 && comida < array.length) {
            console.log(this.nombre, "esta comiendo ", array[comida]);
        }
    };
    return pájaro;
}(animal));
var perrito = new perro("juan", 6, "Gran danés");
console.log(perrito);
perrito.tamañodeperro(1);
perrito.moverse(6);
perrito.hacersonido("woof woof");
perrito.saludar();
perrito.buscarjuguete(2);
var gatito = new gato("edwin", 2, "Persa");
console.log(gatito);
gatito.moverse(30);
gatito.hacersonido("miau");
gatito.colordelgato(2);
gatito.jugarconjuguete(2);
gatito.estadurmiendo(false);
var pajarito = new pájaro("anastacia", 16, "Chaja");
console.log(pajarito);
pajarito.moverse(600);
pajarito.hacersonido("crooooow");
pajarito.tipodepico(2);
pajarito.volar(false);
pajarito.estacomiendo(2);
