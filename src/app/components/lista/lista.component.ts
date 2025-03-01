import { Component, Input, OnInit } from '@angular/core';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Input()
  people: any[] = [];

  constructor (private pessoasService: PessoasService) {}

  ngOnInit() {
    this.people = this.pessoasService.buscarTodasPessoas();
  }
}
