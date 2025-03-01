import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deletar-pessoas',
  templateUrl: './deletar-pessoas.component.html',
  styleUrls: ['./deletar-pessoas.component.scss']
})
export class DeletarPessoasComponent {
  id: string = '';
  
    constructor(private route: ActivatedRoute){ }

    ngOnInit(){
      this.id = this.route.snapshot.params['id'];
    }
}
