class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    listar() {
        return this._clientes;
    }
    pesquisarCPF(cpf) {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
    removerCliente(cpf) {
        const clienteRemover = this.pesquisarCPF(cpf);
        if (clienteRemover) {
            const indiceCliente = this._clientes.indexOf(clienteRemover);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }
}
