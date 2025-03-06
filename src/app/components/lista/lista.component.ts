import { Component, inject, Input, OnInit } from '@angular/core';
import { PessoasService } from '../../services/pessoas.service';
import { ContatosService } from '../../services/contatos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent  {
  @Input()
  people: any[] = [];
  
  contatosService = inject(ContatosService);

  adicionarContato() {
    console.log(this.people)
   this.contatosService.cadastrarContatos(this.people[0]);
  }
}

