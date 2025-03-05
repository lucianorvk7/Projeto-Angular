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
    console.log("Chamando API:", this.pessoasService.url + "/pessoa");

    this.pessoasService.buscarTodasPessoas().subscribe({
      next:(response: IPeople[]) => {
        console.log("📌 [DEBUG] Dados recebidos:", response);
        this.people = response;
        
      },
      error: (error) => {
        console.error(error.message);
        console.error("❌ [ERRO API]:", error);
      }   
    });
  }
}
