class Clientes{
    private _clientes: Array<Cliente>
    constructor() {
        this._clientes = new  Array<Cliente>()

    }

    inserir(cliente:Cliente){
        this._clientes.push(cliente)
    }
    listar():Array<Cliente>{
        return this._clientes
    }
    pesquisarCPF(cpf: string): Cliente {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
    removerCliente(cpf:string){
        const clienteRemover = this.pesquisarCPF(cpf);
        if(clienteRemover){
            const indiceCliente = this._clientes.indexOf(clienteRemover)
            if(indiceCliente > -1){
                this._clientes.splice(indiceCliente,1)
            }
        }
    }
}