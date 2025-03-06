import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IContatos } from '../../../interfaces/contatos';
import { ContatosService } from 'src/app/services/contatos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cadastrar-editar-contatos',
  templateUrl: './cadastrar-editar-contatos.component.html',
  styleUrls: ['./cadastrar-editar-contatos.component.scss']
})
export class CadastrarEditarContatosComponent {

  id: string = '';
  
  formGroupContatos: FormGroup = new FormGroup({
      tipo: new FormControl('', [Validators.required]),
      contato: new FormControl('', [Validators.required])
   });

  constructor(private contatosService: ContatosService, private route: ActivatedRoute, private router: Router){ }

  
  
  cadastrarContato(){
    const contato: IContatos= this.formGroupContatos.value;
    
    this.contatosService.cadastrarContatos(contato).subscribe({ 
      next:(response: any) => {
      console.log("Contato cadastrado com sucesso!", response);
      Swal.fire('Sucesso', 'Contato cadastrado com sucesso', 'success');
      this.router.navigate(['/contatos']);
      }, 
      error: (error: any) => {
        console.error("Erro ao cadastrar contatos", error);
      }
    });
  
  }
}