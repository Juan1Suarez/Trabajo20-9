var pesoAdapter = /** @class */ (function () {
    function pesoAdapter() {
    }
    pesoAdapter.prototype.cambioDolar = function (pesos) {
        return pesos * 0.0029; //conversión a 349
    };
    return pesoAdapter;
}());
var euroAdapter = /** @class */ (function () {
    function euroAdapter() {
    }
    euroAdapter.prototype.cambioDolar = function (euros) {
        return euros * 1.07;
    };
    return euroAdapter;
}());
var cuenta = /** @class */ (function () {
    function cuenta(nombre, id) {
        this.nombre = nombre;
        this.id = id;
        this.transacciones = [];
    }
    cuenta.prototype.agregarTransaccion = function (transaccion) {
        this.transacciones.push(transaccion);
    };
    cuenta.prototype.obtenerSaldo = function () {
        var saldo = 0;
        for (var i = 0; i < this.transacciones.length; i++) {
            var transaccion_1 = this.transacciones[i];
            if (transaccion_1.getMoneda() === "pesos") {
                saldo += pesosAdapter.cambioDolar(transaccion_1.getCantidad());
                console.log("cambio de balance de ", transaccion_1, "convertido en dolares", pesosAdapter.cambioDolar(transaccion_1.getCantidad()));
            }
            else if (transaccion_1.getMoneda() === "euros") {
                saldo += eurosAdapter.cambioDolar(transaccion_1.getCantidad());
                console.log("cambio de balance de ", transaccion_1, "convertido en dolares", eurosAdapter.cambioDolar(transaccion_1.getCantidad()));
            }
            else if (transaccion_1.getMoneda() === "dolares") {
                saldo += transaccion_1.getCantidad();
                console.log("cambio de balance de ", transaccion_1);
            }
        }
        return saldo;
    };
    return cuenta;
}());
var transaccion = /** @class */ (function () {
    function transaccion(cantidad, moneda) {
        this.cantidad = cantidad;
        this.moneda = moneda;
    }
    transaccion.prototype.getCantidad = function () {
        return this.cantidad;
    };
    transaccion.prototype.getMoneda = function () {
        return this.moneda;
    };
    return transaccion;
}());
var cuenta1 = new cuenta("Juan Suarez", 203203);
var cuenta2 = new cuenta("Edwin Mostajo", 352325);
var pesosAdapter = new pesoAdapter();
var eurosAdapter = new euroAdapter();
var transaccion1c1 = new transaccion(777777, "pesos");
var transaccion2c1 = new transaccion(22, "euros");
var transaccion3c1 = new transaccion(-58, "dolares");
console.log(cuenta1);
cuenta1.agregarTransaccion(transaccion1c1);
cuenta1.agregarTransaccion(transaccion2c1);
cuenta1.agregarTransaccion(transaccion3c1);
console.log("Con un balance actual de ", cuenta1.obtenerSaldo(), "dolares");
console.log("------------------------------------------------------------");
var transaccion1c2 = new transaccion(-700, "pesos");
var transaccion2c2 = new transaccion(6, "euros");
var transaccion3c2 = new transaccion(-15, "dolares");
console.log(cuenta2);
cuenta2.agregarTransaccion(transaccion1c2);
cuenta2.agregarTransaccion(transaccion2c2);
cuenta2.agregarTransaccion(transaccion3c2);
console.log("Con un balance actual de ", cuenta2.obtenerSaldo(), "dolares");
