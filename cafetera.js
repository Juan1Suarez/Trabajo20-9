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
var cafetera = /** @class */ (function () {
    function cafetera() {
        this.capmax = 1000;
        this.cantactual = 0;
    }
    cafetera.prototype.llenarcafetera = function (cafalmax) {
        if (cafalmax == true) {
            this.cantactual = this.capmax;
        }
    };
    cafetera.prototype.servirtaza = function (servir) {
        if (servir <= this.cantactual) {
            this.cantactual -= servir;
            console.log("Se sirvio la cantidad y sobro ", this.cantactual);
        }
        else if (servir > this.cantactual) {
            var cantidadfaltante = servir - this.cantactual;
            this.cantactual = 0;
            console.log("Se sirvio y faltaron ", cantidadfaltante);
        }
    };
    cafetera.prototype.agregarcafe = function (cafe) {
        if (cafe + this.cantactual < this.capmax) {
            this.cantactual += cafe;
            console.log("Se sirvio lo que había pero no se lleno la cafetera");
        }
        else if (cafe + this.cantactual == this.capmax) {
            this.cantactual += cafe;
            console.log("Se sirvio al maximo la cafetera");
        }
        else {
            var sobracafe = cafe + this.cantactual - this.capmax;
            (cafe + this.cantactual > this.capmax);
            this.cantactual = this.capmax;
            console.log("se sirvio hasta el maximo y sobro", sobracafe);
        }
    };
    cafetera.prototype.vaciarcafetera = function (vaciar) {
        if (vaciar == true) {
            this.cantactual = 0;
        }
    };
    return cafetera;
}());
var cafeterallena = /** @class */ (function (_super) {
    __extends(cafeterallena, _super);
    function cafeterallena() {
        var _this = _super.call(this) || this;
        _this.capmax = 1000;
        _this.cantactual = 1000;
        return _this;
    }
    return cafeterallena;
}(cafetera));
var cafeteraconx = /** @class */ (function (_super) {
    __extends(cafeteraconx, _super);
    function cafeteraconx(cantactual) {
        var _this = _super.call(this) || this;
        _this.capmax = 1000;
        _this.cantactual = cantactual;
        return _this;
    }
    cafeteraconx.prototype.checkcantidad = function () {
        if (this.cantactual > 1000) {
            this.cantactual = 1000;
            console.log("Se lleno la cafetera");
        }
    };
    return cafeteraconx;
}(cafetera));
var cafetera1 = new cafetera();
var cafetera2 = new cafetera();
var cafetera3 = new cafeterallena();
var cafetera4 = new cafeterallena();
var cafetera5 = new cafeteraconx(102255);
var cafetera6 = new cafeteraconx(1);
var cafetera7 = new cafeteraconx(532);
var cafetera8 = new cafetera();
var cafetera9 = new cafeterallena();
var cafetera10 = new cafeteraconx(23);
var cafetera11 = new cafeteraconx(700);
cafetera1.llenarcafetera(true);
console.log(cafetera1);
console.log("--------------------------------------------------------------------");
cafetera2.llenarcafetera(false);
console.log(cafetera2);
console.log("--------------------------------------------------------------------");
cafetera3.vaciarcafetera(false);
console.log(cafetera3);
console.log("--------------------------------------------------------------------");
cafetera4.vaciarcafetera(true);
console.log(cafetera4);
console.log("--------------------------------------------------------------------");
cafetera5.llenarcafetera(false);
cafetera5.checkcantidad();
console.log(cafetera5);
console.log("--------------------------------------------------------------------");
cafetera6.vaciarcafetera(false);
cafetera6.checkcantidad();
console.log(cafetera6);
console.log("--------------------------------------------------------------------");
cafetera7.llenarcafetera(true);
cafetera7.checkcantidad();
console.log(cafetera7);
console.log("--------------------------------------------------------------------");
cafetera8.servirtaza(200);
console.log(cafetera8);
console.log("--------------------------------------------------------------------");
cafetera9.servirtaza(2);
console.log(cafetera9);
console.log("--------------------------------------------------------------------");
cafetera10.agregarcafe(10000);
console.log(cafetera10);
console.log("--------------------------------------------------------------------");
cafetera11.agregarcafe(200);
console.log(cafetera11);
