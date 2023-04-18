import { Comprador } from "./comprador";
import { Mediator } from "./mediator";
import { Vendedor } from "./vendedor";

const mediator = new Mediator();
const vendedor1 = new Vendedor(mediator);
vendedor1.adicionarProduto({id: "1", nome: "Jogador Número 1", valor: 59.90})
vendedor1.adicionarProduto({id: "2", nome: "Flores para Algernon", valor: 69.90})
const vendedor2 = new Vendedor(mediator);
vendedor2.adicionarProduto({id: "3", nome: "Um lugar bem longe daqui", valor: 49.90})
vendedor2.adicionarProduto({id: "4", nome: "O vilarejo", valor: 29.90})
vendedor2.adicionarProduto({id: "5", nome: "Laranja Mecânica", valor: 39.90})

mediator.adicionarVendedor(vendedor1, vendedor2)
const comprador1 = new Comprador("João", "Rua Euclides da Cunha, 2245, Natal-RN", mediator)
mediator.adicionarComprador(comprador1)
const comprador2 = new Comprador("Ana", "Rua dos Caicós, 25, Natal-RN", mediator)
mediator.adicionarComprador(comprador2)

console.log("Produtos disponíveis:")
comprador1.verProdutos()
comprador1.comprar('2')
vendedor1.dadosDoComprador("João")
comprador2.comprar('5')
vendedor2.dadosDoComprador("Ana")