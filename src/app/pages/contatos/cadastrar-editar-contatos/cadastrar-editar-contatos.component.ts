import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContatosService } from 'src/app/services/contatos.service';

@Component({
  selector: 'app-cadastrar-editar-contatos',
  templateUrl: './cadastrar-editar-contatos.component.html',
  styleUrls: ['./cadastrar-editar-contatos.component.scss']
})
export class CadastrarEditarContatosComponent {

  contatosService = inject(ContatosService);
  id: string = '';
  
    constructor(private route: ActivatedRoute){ }
  
    ngOnInit(){
      this.id = this.route.snapshot.params['id'];
    }
}
