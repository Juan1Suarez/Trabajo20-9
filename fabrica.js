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
var vehiculo = /** @class */ (function () {
    function vehiculo(marca, modelo, asientos, carga) {
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
        this.carga = carga;
    }
    vehiculo.prototype.tostring = function () {
        return "Marca: ".concat(this.marca, "\nModelo: ").concat(this.modelo, "\nCantidad de asientos  ").concat(this.asientos, " \nCapacidad de carga  ").concat(this.carga, " ");
    };
    return vehiculo;
}());
var auto = /** @class */ (function (_super) {
    __extends(auto, _super);
    function auto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    auto.prototype.crearvehiculo = function () {
        return new auto(this.marca, this.modelo, this.asientos, this.carga);
    };
    return auto;
}(vehiculo));
var camioneta = /** @class */ (function (_super) {
    __extends(camioneta, _super);
    function camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    camioneta.prototype.crearvehiculo = function () {
        return new camioneta(this.marca, this.modelo, this.asientos, this.carga);
    };
    return camioneta;
}(vehiculo));
var motocicleta = /** @class */ (function (_super) {
    __extends(motocicleta, _super);
    function motocicleta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    motocicleta.prototype.crearvehiculo = function () {
        return new motocicleta(this.marca, this.modelo, this.asientos, this.carga);
    };
    return motocicleta;
}(vehiculo));
function vehiculoFactory(tipo, marca, modelo, asientos, carga) {
    if (tipo === "auto") {
        return new auto(marca, modelo, asientos, carga);
    }
    else if (tipo === "camioneta") {
        return new camioneta(marca, modelo, asientos, carga);
    }
    else if (tipo === "motocicleta") {
        return new motocicleta(marca, modelo, asientos, carga);
    }
    throw new Error("Vehiculo no valido");
}
var vehiculo1 = vehiculoFactory("auto", "Fiat", "espacio TR", 3, 4);
console.log(vehiculo1 === null || vehiculo1 === void 0 ? void 0 : vehiculo1.tostring());
console.log("-------------------------------------------------------------------");
var vehiculo2 = vehiculoFactory("camioneta", "Ford", "F100", 1, 2);
console.log(vehiculo2 === null || vehiculo2 === void 0 ? void 0 : vehiculo2.tostring());
console.log("-------------------------------------------------------------------");
var vehiculo3 = vehiculoFactory("motocicleta", "Honda", "Titan", 1, 2);
console.log(vehiculo3 === null || vehiculo3 === void 0 ? void 0 : vehiculo3.tostring());
console.log("-------------------------------------------------------------------");
var vehiculo4 = vehiculoFactory("tractor", "Jhon deere", "5060E", 1, 1);
console.log(vehiculo4 === null || vehiculo4 === void 0 ? void 0 : vehiculo4.tostring());
