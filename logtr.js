var cuenta = /** @class */ (function () {
    function cuenta(nombre, id) {
        this.nombre = nombre;
        this.id = id;
        this.balance = 0;
    }
    cuenta.prototype.ingresodefondos = function (ingreso) {
        if (ingreso > 0) {
            this.balance += ingreso;
        }
        else {
            console.log("Transacción invalida, ingrese una cantidad positiva diferente a 0");
        }
    };
    cuenta.prototype.retirodefondos = function (retiro) {
        if (retiro > 0 && this.balance >= retiro) {
            this.balance -= retiro;
        }
        else {
            console.log("Cantidad invalida");
        }
    };
    return cuenta;
}());
var transEuro = /** @class */ (function () {
    function transEuro() {
    }
    transEuro.prototype.euroadolar = function (euro) {
        var pe = euro * 1.07;
        console.log(pe);
    };
    return transEuro;
}());
var transPeso = /** @class */ (function () {
    function transPeso() {
    }
    transPeso.prototype.pesoadolar = function (peso) {
        var pe = peso * 0.0029;
        console.log(pe);
    };
    return transPeso;
}());
var cuenta1 = new cuenta("Eustaquio", 2459855);
cuenta1.ingresodefondos(600);
cuenta1.retirodefondos(500);
console.log(cuenta1);
var prueba = new transEuro();
prueba.euroadolar(1);
var prueba2 = new transPeso();
prueba2.pesoadolar(349);
