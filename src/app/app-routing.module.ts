import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemPessoasComponent } from './pages/pessoas/listagem-pessoas/listagem-pessoas.component';
import { ListagemContatosComponent } from './pages/contatos/listagem-contatos/listagem-contatos.component';

const routes: Routes = [
  {
    path: "pessoas", component: ListagemPessoasComponent
  },
  {
    path: "contatos", component: ListagemContatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
