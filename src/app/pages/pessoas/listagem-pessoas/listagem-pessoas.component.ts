import { Component, Input} from '@angular/core';
import { PessoasService } from 'src/app/services/pessoas.service';
import { IPeople } from 'src/app/interfaces/people';


@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.scss'],
})

export class ListagemPessoasComponent {
  @Input()  people: IPeople[] = [];

  constructor(private pessoasService: PessoasService) {}

  ngOnInit() {
   this.pessoasService.buscarTodasPessoas().subscribe({
      next:(pessoa: IPeople[]) => {
        this.people = pessoa;
     },
      error: (error) => {
        console.error(error.message);
        console.error("❌ [ERRO API]:", error);
      }   
    });
  }
}
