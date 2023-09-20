var serie = /** @class */ (function () {
    function serie(titulo, estreno, episodios, temporadas, cancelado) {
        this.titulo = titulo;
        this.estreno = estreno;
        this.episodios = episodios;
        this.temporadas = temporadas;
        this.visto = 0;
        this.fin = this.serievista();
        this.cancelado = cancelado;
    }
    serie.prototype.verep = function (ver) {
        if (ver < 0) {
        }
        else if (ver > this.episodios) {
        }
        else {
            this.visto += ver;
        }
    };
    serie.prototype.porver = function () {
        var faltan = this.episodios - this.visto;
        return faltan;
    };
    serie.prototype.serievista = function () {
        if (this.visto == this.episodios) {
            this.fin = true;
        }
        else {
            this.fin = false;
        }
        return this.fin;
    };
    serie.prototype.tostring = function () {
        return "T\u00EDtulo: ".concat(this.titulo, "\nA\u00F1o de estreno: ").concat(this.estreno, "\nNumero de episodios  ").concat(this.episodios, " \nNumero de temporadas  ").concat(this.temporadas, " \nEpisodios vistos: ").concat(this.visto, "\n\u00BFFinalizo la serie?: ").concat(this.fin, "\nEpisodios que faltan por ver: ").concat(this.porver(), "\n\u00BFSe cancelo:?  ").concat(this.cancelado);
    };
    return serie;
}());
var breakingbad = new serie("Breaking bad", 2008, 62, 5, false);
var GOT = new serie("Game of thrones", 2006, 155, 8, true);
var strangerthings = new serie("Stranger things", 2017, 42, 4, true);
var JOJOs = new serie("La bizarra aventura de Jojos", 2012, 182, 6, false);
breakingbad.verep(-2);
breakingbad.porver();
breakingbad.serievista();
console.log(breakingbad.tostring());
console.log("-------------------------------------------------------------------");
GOT.verep(36);
GOT.porver();
GOT.serievista();
console.log(GOT.tostring());
console.log("-------------------------------------------------------------------");
strangerthings.verep(200);
strangerthings.porver();
strangerthings.serievista();
console.log(strangerthings.tostring());
console.log("-------------------------------------------------------------------");
JOJOs.verep(182);
JOJOs.porver();
JOJOs.serievista();
console.log(JOJOs.tostring());
