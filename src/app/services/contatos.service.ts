import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  
  dadosContatos: any[] = [];

  constructor() { }

  adicionarContato(item: any) {
    this.dadosContatos.push(item);
    console.log('Item adicionado com sucesso!', item);
  }
  
}
