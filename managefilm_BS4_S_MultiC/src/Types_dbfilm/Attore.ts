export class Attore{

    constructor(
        private _codAttore : number,
        private _nome : string,
        private _annoNascita: number,
        private _nazionalita: string,
    ){
    }

    get codAttore():number {return this._codAttore; }
    set codAttore(v: number) {this._codAttore = v; }
    get nome():string {return this._nome;}
    set nome(v: string) {this._nome = v; }
    get annoNascita():number {return this._annoNascita;}
    set annoNascita(v: number) { this._annoNascita = v; }
    get nazionalita():string {return this._nazionalita;}
    set nazionalita(v : string){this._nazionalita=v;}
}