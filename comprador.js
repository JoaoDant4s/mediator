"use strict";
exports.__esModule = true;
exports.Comprador = void 0;
var Comprador = /** @class */ (function () {
    function Comprador(nome, endereco, mediator) {
        this.nome = nome;
        this.endereco = endereco;
        this.mediator = mediator;
    }
    Comprador.prototype.verProdutos = function () {
        this.mediator.mediatorMostrarProdutos();
    };
    Comprador.prototype.comprar = function (id) {
        this.mediator.comprarProduto(id);
    };
    Comprador.prototype.mostrarDadosPessoais = function () {
        console.log(this.nome, this.endereco);
    };
    Comprador.prototype.getNome = function () {
        return this.nome;
    };
    return Comprador;
}());
exports.Comprador = Comprador;
