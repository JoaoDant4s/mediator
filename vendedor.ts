import { Mediator } from "./mediator";

export type Produto = {id: string, nome: string, valor: number}

export class Vendedor {
    private produtos: Produto[] = [];
    private mediator?: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    mostrarProdutos(): void{
        this.produtos.forEach(produto => console.log(produto.nome, produto.valor))
    }

    adicionarProduto(...produtos: Produto[]):void {
        produtos.forEach(produto => this.produtos.push(produto))
    }

    sell(id: string):Produto | void {       
        let produtoVendido: Produto | undefined
        for(const produto of this.produtos){
            if(produto.id === id){
                produtoVendido = produto
                break
            }
        }

        this.produtos = this.produtos.filter(produto => produto !== produtoVendido)
        return produtoVendido
    }

    dadosDoComprador(nome: string): void {
        this.mediator?.mostrarComprador(nome)
    }
}