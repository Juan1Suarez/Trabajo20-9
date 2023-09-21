class cafetera {
    protected capmax: number;
    protected cantactual: number;

    constructor() {
        this.capmax = 1000
        this.cantactual = 0
    }
    llenarcafetera(cafalmax: boolean) {
        if (cafalmax == true) {
            this.cantactual = this.capmax;
        }
    }
    servirtaza(servir: number) {
        if (servir <= this.cantactual){
            this.cantactual-=servir;
            console.log("Se sirvio la cantidad y sobro ", this.cantactual)
        }
        else if (servir>this.cantactual){
            let cantidadfaltante= servir-this.cantactual;
            this.cantactual=0;
            console.log("Se sirvio y faltaron ", cantidadfaltante)
        }


    }
    agregarcafe(cafe: number) {
        if (cafe + this.cantactual < this.capmax) {
            this.cantactual += cafe;
            console.log("Se sirvio lo que había pero no se lleno la cafetera");
        }
        else if (cafe + this.cantactual == this.capmax) {
            this.cantactual += cafe;
            console.log("Se sirvio al maximo la cafetera");
        }
        else {
            let sobracafe = cafe + this.cantactual - this.capmax;
            (cafe + this.cantactual > this.capmax)
            this.cantactual = this.capmax;
            console.log("se sirvio hasta el maximo y sobro", sobracafe)
        }
    }
    vaciarcafetera(vaciar: boolean) {
        if (vaciar == true) {
            this.cantactual = 0
        }
    }
}


class cafeterallena extends cafetera {

    constructor() {
        super()
        this.capmax = 1000;
        this.cantactual = 1000
    }
}

class cafeteraconx extends cafetera {

    constructor(cantactual: number) {
        super()
        this.capmax = 1000;
        this.cantactual = cantactual;

    }
    checkcantidad() {
        if (this.cantactual > 1000) {
            this.cantactual = 1000;
            console.log("Se lleno la cafetera")
        }
    }

}


let cafetera1 = new cafetera();
let cafetera2 = new cafetera();
let cafetera3 = new cafeterallena();
let cafetera4 = new cafeterallena();
let cafetera5 = new cafeteraconx(102255);
let cafetera6 = new cafeteraconx(1);
let cafetera7 = new cafeteraconx(532);
let cafetera8 = new cafetera();
let cafetera9 = new cafeterallena();
let cafetera10= new cafeteraconx(23);
let cafetera11= new cafeteraconx(700)


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
console.log(cafetera8)
console.log("--------------------------------------------------------------------");

cafetera9.servirtaza(2);
console.log(cafetera9);
console.log("--------------------------------------------------------------------");

cafetera10.agregarcafe(10000);
console.log(cafetera10);
console.log("--------------------------------------------------------------------");

cafetera11.agregarcafe(200);
console.log(cafetera11);