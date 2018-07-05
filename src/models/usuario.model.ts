export class UsuarioModel{

    private _listaComunas: Array<string>;
    private _listaCiudades: Array<string>;
    private _listaRegiones: Array<string>;
    private _listaTipoColegios: Array<string>;
    private _listaColegios: Array<string>;
    private _usuarioLogueado: boolean;

    constructor() { }


    get listaComunas() {
        return this._listaComunas;
    }

    // Set
    set listaComunas(param: Array<string>) {
        this._listaComunas = param;
    }

    get listaCiudades() {
        return this._listaCiudades;
    }

    // Set
    set listaCiudades(param: Array<string>) {
        this._listaCiudades = param;
    }

    get listaRegiones() {
        return this._listaRegiones;
    }

    // Set
    set listaRegiones(param: Array<string>) {
        this._listaRegiones = param;
    }

    get listaColegios() {
        return this._listaColegios;
    }

    // Set
    set listaColegios(param: Array<string>) {
        this._listaColegios = param;
    }

    get listaTipoColegios() {
        return this._listaTipoColegios;
    }

    // Set
    set listaTipoColegios(param: Array<string>) {
        this._listaTipoColegios = param;
    }
    
    get usuarioLogueado() {
        return this._usuarioLogueado;
    }

    // Set
    set usuarioLogueado(param: boolean) {
        this.usuarioLogueado = param;
    }



}