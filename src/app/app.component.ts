import { Component, OnInit } from '@angular/core';
import { PessoasService } from './services/pessoas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Controle-Contatos';
  idButton = 1;
  people: any[] = [];

  constructor (private pessoasService: PessoasService) {}

  ngOnInit() {
    this.people = this.pessoasService.buscarTodasPessoas();
  }
  
  novaFuncao() {
    console.log('Nova Funcão');
    this.title = 'Novo Titulo';
  }


}
