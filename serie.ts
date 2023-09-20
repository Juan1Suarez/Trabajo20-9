class serie {
    protected titulo: string;
    protected estreno: number;
    protected episodios: number;
    protected temporadas: number;
    protected visto: number;
    protected fin: boolean;
    protected cancelado:boolean;

    constructor(titulo: string, estreno: number, episodios: number, temporadas: number, cancelado: boolean) {
        this.titulo = titulo;
        this.estreno = estreno;
        this.episodios = episodios;
        this.temporadas = temporadas;
        this.visto = 0;
        this.fin = this.serievista();
        this.cancelado= cancelado;
    }

    verep(ver: number) {
        if (ver < 0) {
        } else if (ver > this.episodios) {
        } else {
            this.visto += ver;
        }
    }

    porver() {
        let faltan = this.episodios - this.visto;
        return faltan
    }

    serievista() {
        if (this.visto == this.episodios) {
            this.fin = true;
        } else {
            this.fin = false;
        }
        return this.fin;
    }
    tostring() {
        return `Título: ${this.titulo}\nAño de estreno: ${this.estreno}\nNumero de episodios  ${this.episodios} \nNumero de temporadas  ${this.temporadas} \nEpisodios vistos: ${this.visto}\n¿Finalizo la serie?: ${this.fin}\nEpisodios que faltan por ver: ${this.porver()}\n¿Se cancelo:?  ${this.cancelado}`
    }

}

let breakingbad = new serie("Breaking bad", 2008, 62, 5, false);
let GOT = new serie("Game of thrones", 2006, 155, 8, true);
let strangerthings = new serie("Stranger things", 2017, 42, 4, true);
let JOJOs = new serie("La bizarra aventura de Jojos", 2012, 182, 6, false);



breakingbad.verep(-2);
breakingbad.porver();
breakingbad.serievista();
console.log(breakingbad.tostring());
console.log("-------------------------------------------------------------------")

GOT.verep(36);
GOT.porver();
GOT.serievista();
console.log(GOT.tostring());
console.log("-------------------------------------------------------------------")

strangerthings.verep(200);
strangerthings.porver();
strangerthings.serievista();
console.log(strangerthings.tostring());
console.log("-------------------------------------------------------------------")

JOJOs.verep(182);
JOJOs.porver();
JOJOs.serievista();
console.log(JOJOs.tostring());