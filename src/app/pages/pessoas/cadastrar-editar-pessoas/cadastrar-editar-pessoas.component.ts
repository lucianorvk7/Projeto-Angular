import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private readonly route: ActivatedRoute,
    private readonly pessoasService: PessoasService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; // Obtém o ID da URL
    console.log("ID recebido:", this.id);
  
    if (this.id) {
      this.pessoasService.buscarPessoaPorId(this.id).subscribe((response) => {
        if (response) {
          console.log("Pessoa encontrada:", response);
          this.formGroupPessoas.patchValue(response); // Preenche o formulário
        }
      });
    }
  }
  

  salvarPessoa() {
    if (this.id) {
      console.log("Chamando editarPessoa()...");
      this.editarPessoa();
    } else {
      console.log("Chamando cadastrarPessoa()...");
      this.cadastrarPessoa();
    }
  }
  

  cadastrarPessoa() {
    const pessoa: IPeople = this.formGroupPessoas.value;

    this.pessoasService.cadastrarPessoa(pessoa).subscribe((response) => {
      console.log(response);
      Swal.fire('Sucesso', 'Pessoa cadastrada com sucesso', 'success'); 
      this.router.navigate(['/home']); 
    });
  }

  editarPessoa() {
    const pessoa: IPeople = this.formGroupPessoas.value;
  
    this.pessoasService.editarPessoa(this.id, pessoa).subscribe({
      next: (response) => {
        console.log(response);
        Swal.fire('Sucesso', 'Pessoa editada com sucesso', 'success'); 
        this.router.navigate(['/home']); 
      },
      error: (erro) => {
        console.error("Erro ao editar pessoa:", erro);
        Swal.fire('Erro', 'Não foi possível editar a pessoa', 'error');
      }
    });
  }
  
}
