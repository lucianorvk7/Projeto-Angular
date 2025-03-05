import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatosService } from '../../../services/contatos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPeople } from 'src/app/interfaces/people';
import { PessoasService } from '../../../services/pessoas.service';
import Swal from 'sweetalert2';


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

  constructor(private readonly route: ActivatedRoute, private readonly pessoasService: PessoasService, private readonly router: Router){ }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.pessoasService.buscarPessoaPorId(this.id).subscribe((response) => {
        console.log(response);
      });
    }
  }

  cadastrarPessoa(){
    const pessoa: IPeople = this.formGroupPessoas.value;

    this.pessoasService.cadastrarPessoa(pessoa).subscribe((response) => {
      console.log(response);
      Swal.fire('Sucesso', 'Pessoa cadastrada com sucesso', 'success');
      this.router.navigate(['/pessoa']);
    });

    console.log(this.formGroupPessoas.value);
  }

}
