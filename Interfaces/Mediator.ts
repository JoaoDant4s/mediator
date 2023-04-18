import { Comprador } from "../comprador";
import { Vendedor } from "../vendedor";

export interface MediatorInterface {
    vendedores: Vendedor[];
    compradores: Comprador[];
}