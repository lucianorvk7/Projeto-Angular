import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  people = [
    {
      id: 1,
      name: 'Luciano',
      cep: '01313-000',
      endereco: 'Av: 9 de julho',
      cidade: 'São Paulo',
      uf: "SP",
    },
    {
      id: 2,
      name: 'Marta',
      cep: '01414-000',
      endereco: 'Av: 9 de julho',
      cidade: 'São Paulo',
      uf: "SP",
    },
    {
      id: 3,
      name: 'Nadia',
      cep: '01515-000',
      endereco: 'Av: 9 de julho',
      cidade: 'São Paulo',
      uf: "SP",
    },
    {
      id: 4,
      name: 'Junior',
      cep: '01616-000',
      endereco: 'Av: 9 de julho',
      cidade: 'São Paulo',
      uf: "SP",
    },
  ];

  constructor() { }

  buscarTodasPessoas(){
    return this.people;
  }
}
