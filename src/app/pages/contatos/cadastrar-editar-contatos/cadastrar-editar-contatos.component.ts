import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContatosService } from 'src/app/services/contatos.service';
import { IContatos } from '../../../interfaces/contatos';

@Component({
  selector: 'app-cadastrar-editar-contatos',
  templateUrl: './cadastrar-editar-contatos.component.html',
  styleUrls: ['./cadastrar-editar-contatos.component.scss']
})
export class CadastrarEditarContatosComponent {

  contatosService = inject(ContatosService);
  id: string = '';

  formGroupContatos: FormGroup = new FormGroup({
      id: new FormControl('', [Validators.required]),
      tipo: new FormControl(''),
      contato: new FormControl(''),
      people: new FormControl(''),
   });

  constructor(private route: ActivatedRoute){ }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
  }

  cadastrarContato(){
    const contato: IContatos= this.formGroupContatos.value;

    console.log(this.formGroupContatos.value);
  }
}
