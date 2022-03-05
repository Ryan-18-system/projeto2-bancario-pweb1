
let clienteController = new ClienteController();
clienteController.listar();
const clientes = new Clientes()
const c1 = new Conta('1', 100);
const c2 = new Conta('12', 200)
const cliente1 = new Cliente("Ryan", '1234',c1)
const cliente2 = new Cliente("Alxeandra", '4321',c2)
clientes.inserir(cliente1)
clientes.inserir(cliente2)
console.log(clientes.listar())

