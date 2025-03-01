import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-editar-pessoas',
  templateUrl: './cadastrar-editar-pessoas.component.html',
  styleUrls: ['./cadastrar-editar-pessoas.component.scss']
})
export class CadastrarEditarPessoasComponent {
  id: string = '';

  constructor(private route: ActivatedRoute){ }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
  }
}
