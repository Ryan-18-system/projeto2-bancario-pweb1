///<reference path="cliente.ts"/>
/// <reference path="conta.ts"/>
class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array();
    }
}
