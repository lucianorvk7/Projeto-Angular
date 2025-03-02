import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisar-pessoas',
  templateUrl: './pesquisar-pessoas.component.html',
  styleUrls: ['./pesquisar-pessoas.component.scss']
})
export class PesquisarPessoasComponent {
  id: string = '';
    
      constructor(private route: ActivatedRoute){ }
  
      ngOnInit(){
        this.id = this.route.snapshot.params['id'];
      }
}
