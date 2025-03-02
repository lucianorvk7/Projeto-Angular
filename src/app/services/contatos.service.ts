import { inject, Injectable } from '@angular/core';
import { IContatos } from '../interfaces/contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  buscarTodosContatos() {
    throw new Error('Method not implemented.');
  }

  dadosContatos: any[] = [];

  constructor() { }

  adicionarContato(item: any) {
    this.dadosContatos.push(item);

    console.log('Item adicionado com sucesso!', item);
  }

}
