"use strict";
exports.__esModule = true;
exports.Vendedor = void 0;
var Vendedor = /** @class */ (function () {
    function Vendedor(mediator) {
        this.produtos = [];
        this.mediator = mediator;
    }
    Vendedor.prototype.mostrarProdutos = function () {
        this.produtos.forEach(function (produto) { return console.log(produto.nome, produto.valor); });
    };
    Vendedor.prototype.adicionarProduto = function () {
        var _this = this;
        var produtos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            produtos[_i] = arguments[_i];
        }
        produtos.forEach(function (produto) { return _this.produtos.push(produto); });
    };
    Vendedor.prototype.sell = function (id) {
        var produtoVendido;
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            if (produto.id === id) {
                produtoVendido = produto;
                break;
            }
        }
        this.produtos = this.produtos.filter(function (produto) { return produto !== produtoVendido; });
        return produtoVendido;
    };
    Vendedor.prototype.dadosDoComprador = function (nome) {
        var _a;
        (_a = this.mediator) === null || _a === void 0 ? void 0 : _a.mostrarComprador(nome);
    };
    return Vendedor;
}());
exports.Vendedor = Vendedor;
