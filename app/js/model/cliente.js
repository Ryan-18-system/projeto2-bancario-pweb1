class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(newNome) {
        this._nome = newNome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(newCpf) {
        this._cpf = newCpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(newConta) {
        this._conta = newConta;
    }
    toString() {
        return `Nome: ${this._nome} /
                Cpf: ${this._cpf} /
                Conta- ${this._conta}`;
    }
}
