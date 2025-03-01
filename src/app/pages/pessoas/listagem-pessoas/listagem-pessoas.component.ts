import { Component } from '@angular/core';
import { PessoasService } from 'src/app/services/pessoas.service';
@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.scss']
})
export class ListagemPessoasComponent {

  people: any[] = [];

  constructor(private pessoasService: PessoasService) { }
  ngOnInit() {
    this.people = this.pessoasService.buscarTodasPessoas();
  }
}
