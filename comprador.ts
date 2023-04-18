import { Colleague } from "./Interfaces/Colleague";
import { Mediator } from "./mediator";

export class Comprador implements Colleague{
    mediator: Mediator;
    private nome: string;
    private endereco: string;

    constructor(nome: string, endereco: string, mediator: Mediator) {
        this.nome = nome;
        this.endereco = endereco;
        this.mediator = mediator;
    }

    verProdutos(): void{
        this.mediator.mediatorMostrarProdutos()
    }

    comprar(id: string): void {
        this.mediator.comprarProduto(id)
    }

    mostrarDadosPessoais(): void {
        console.log(this.nome, this.endereco)
    }

    getNome(): string{
        return this.nome
    }
}