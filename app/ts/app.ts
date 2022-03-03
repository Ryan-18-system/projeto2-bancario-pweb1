let contaController = new ContaController();
contaController.listar();
const clientes = new Clientes()
const c1 = new Conta('1', 100);
const c2 = new Conta('12', 200)
const cliente1 = new Cliente("Ryan", '1234',c1)
const cliente2 = new Cliente("Alxeandra", '4321',c2)
clientes.inserir(cliente1)
clientes.inserir(cliente2)
console.log(clientes.listar())
console.log(cliente1)
console.log(cliente2)
// const c1 = new Conta('1', 100);
// const p1 = new Poupanca('2', 100);
// const cb1 = new ContaBonificada('3', 0);
//
// console.log('Conta: ' + c1.saldo);
//
// p1.atualizarSaldoAniversario();
// console.log('Poupanca: ' + p1.saldo);
//
// cb1.creditar(100);
// console.log('Conta Bonificada: ' + cb1.saldo);
