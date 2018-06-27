export class UsuarioModel{

    private _listaComunas: any;
    private _listaTipoColegios: any;
    private _listaColegios: any;
    constructor() { }


    get listaComunas() {
        return this._listaComunas;
    }

    // Set
    set listaComunas(param: any) {
        this._listaComunas = param;
    }

    get listaColegios() {
        return this._listaColegios;
    }

    // Set
    set listaColegios(param: any) {
        this._listaColegios = param;
    }

    get listaTipoColegios() {
        return this._listaTipoColegios;
    }

    // Set
    set listaTipoColegios(param: any) {
        this._listaTipoColegios = param;
    }
    



}