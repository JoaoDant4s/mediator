"use strict";
exports.__esModule = true;
var comprador_1 = require("./comprador");
var mediator_1 = require("./mediator");
var vendedor_1 = require("./vendedor");
var mediator = new mediator_1.Mediator();
var vendedor1 = new vendedor_1.Vendedor(mediator);
vendedor1.adicionarProduto({ id: "1", nome: "Jogador Número 1", valor: 59.90 });
vendedor1.adicionarProduto({ id: "2", nome: "Flores para Algernon", valor: 69.90 });
var vendedor2 = new vendedor_1.Vendedor(mediator);
vendedor2.adicionarProduto({ id: "3", nome: "Um lugar bem longe daqui", valor: 49.90 });
vendedor2.adicionarProduto({ id: "4", nome: "O vilarejo", valor: 29.90 });
vendedor2.adicionarProduto({ id: "5", nome: "Laranja Mecânica", valor: 39.90 });
mediator.adicionarVendedor(vendedor1, vendedor2);
var comprador1 = new comprador_1.Comprador("João", "Rua Euclides da Cunha, 2245, Natal-RN", mediator);
mediator.adicionarComprador(comprador1);
var comprador2 = new comprador_1.Comprador("Ana", "Rua dos Caicós, 25, Natal-RN", mediator);
mediator.adicionarComprador(comprador2);
console.log("Produtos disponíveis:");
comprador1.verProdutos();
comprador1.comprar('2');
vendedor1.dadosDoComprador("João");
comprador2.comprar('5');
vendedor2.dadosDoComprador("Ana");