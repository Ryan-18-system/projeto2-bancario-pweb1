class ClienteController {
    private inputNome : HTMLInputElement;
    private inputCpf : HTMLInputElement;
    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;

    private clientes: Clientes;
    private contas : Contas;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf")
        this.inputNumero =
            <HTMLInputElement>document.querySelector("#conta")
        this.inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");
        this.clientes = new Clientes();
        this.contas = new Contas();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        const novaConta = new Conta(this.inputNumero.value,
            parseFloat(this.inputSaldo.value));
        const newCliente = new Cliente(this.inputNome.value, this.inputCpf.value, novaConta)

        this.contas.inserir(novaConta);
        this.clientes.inserir(newCliente);
        this.inserirClienteNoHTML(newCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente=> {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.removerCliente(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }


}