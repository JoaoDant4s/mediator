import { MediatorInterface } from "./Interfaces/Mediator";
import { Comprador } from "./comprador";
import { Vendedor } from "./vendedor";

export class Mediator implements MediatorInterface {
  vendedores: Vendedor[] = [];
  compradores: Comprador[] = [];

  adicionarVendedor(...vendedores: Vendedor[]): void {
    vendedores.forEach((vendedor) => this.vendedores.push(vendedor));
  }

  adicionarComprador(...compradores: Comprador[]): void {
    compradores.forEach((comprador) => this.compradores.push(comprador));
  }

  comprarProduto(id: string) {
    let produto;
    for (let i = 0; i < this.vendedores.length; i++) {
      produto = this.vendedores[i].sell(id);

      if (produto) {
        console.log(`Produto ${produto.nome} vendido por ${produto.valor}`);
        return;
      }
    }
  }

  mediatorMostrarProdutos(): void {
    this.vendedores.forEach((vendedor) => vendedor.mostrarProdutos());
  }

  mostrarComprador(nome: string) {
    this.compradores.forEach((comprador) => {
      if (comprador.getNome() === nome) {
        comprador.mostrarDadosPessoais();
      }
    });
  }
}
