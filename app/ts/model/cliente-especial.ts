///<reference path="cliente.ts"/>
/// <reference path="conta.ts"/>
class ClienteEspecial extends  Cliente{
    private _dependentes: Array<Cliente>
    constructor(nome:string, cpf: string, conta: Conta) {
        super(nome,cpf,conta);
    }
}