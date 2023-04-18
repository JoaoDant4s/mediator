"use strict";
exports.__esModule = true;
exports.Mediator = void 0;
var Mediator = /** @class */ (function () {
    function Mediator() {
        this.vendedores = [];
        this.compradores = [];
    }
    Mediator.prototype.adicionarVendedor = function () {
        var _this = this;
        var vendedores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vendedores[_i] = arguments[_i];
        }
        vendedores.forEach(function (vendedor) { return _this.vendedores.push(vendedor); });
    };
    Mediator.prototype.adicionarComprador = function () {
        var _this = this;
        var compradores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            compradores[_i] = arguments[_i];
        }
        compradores.forEach(function (comprador) { return _this.compradores.push(comprador); });
    };
    Mediator.prototype.comprarProduto = function (id) {
        var produto;
        for (var i = 0; i < this.vendedores.length; i++) {
            produto = this.vendedores[i].sell(id);
            if (produto) {
                console.log("Produto ".concat(produto.nome, " vendido por ").concat(produto.valor));
                return;
            }
        }
    };
    Mediator.prototype.mediatorMostrarProdutos = function () {
        this.vendedores.forEach(function (vendedor) { return vendedor.mostrarProdutos(); });
    };
    Mediator.prototype.mostrarComprador = function (nome) {
        this.compradores.forEach(function (comprador) {
            if (comprador.getNome() === nome) {
                comprador.mostrarDadosPessoais();
            }
        });
    };
    return Mediator;
}());
exports.Mediator = Mediator;
