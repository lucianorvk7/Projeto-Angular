import { Component, OnInit } from '@angular/core';
import { PessoasService } from 'src/app/services/pessoas.service';
import { IPeople } from 'src/app/interfaces/people';
@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.scss'],
})
export class ListagemPessoasComponent implements OnInit {
  people: IPeople[] = [];

  constructor(private pessoasService: PessoasService) {}
  ngOnInit() {
    this.pessoasService.buscarTodasPessoas().subscribe((response) => {
      this.people = response.products; // Now correctly assigning the array
    });
  }
}
