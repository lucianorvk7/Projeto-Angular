import { IContatos } from "./contatos";

export interface IPeople {
  id?: number;
  nome: string;
  cep: string;
  endereco: string;
  cidade: string;
  uf: string;
  contatos: IContatos[];
}
