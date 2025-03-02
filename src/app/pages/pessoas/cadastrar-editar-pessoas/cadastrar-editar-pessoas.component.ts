import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContatosService } from '../../../services/contatos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPeople } from 'src/app/interfaces/people';
import { PessoasService } from '../../../services/pessoas.service';


@Component({
  selector: 'app-cadastrar-editar-pessoas',
  templateUrl: './cadastrar-editar-pessoas.component.html',
  styleUrls: ['./cadastrar-editar-pessoas.component.scss']
})
export class CadastrarEditarPessoasComponent {
  id: string = '';
  formGroupPessoas: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cep: new FormControl(''),
    endereco: new FormControl(''),
    cidade: new FormControl(''),
    uf: new FormControl('')
 });

  constructor(private readonly route: ActivatedRoute, private readonly pessoasService: PessoasService){ }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
  }

  cadastrarPessoa(){
    const pessoa: IPeople = this.formGroupPessoas.value;

    this.pessoasService.cadastrarPessoa(pessoa).subscribe((response) => {
      console.log(response);
    });

    console.log(this.formGroupPessoas.value);
  }

}
