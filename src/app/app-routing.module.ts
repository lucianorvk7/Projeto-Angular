import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemPessoasComponent } from './pages/pessoas/listagem-pessoas/listagem-pessoas.component';
import { ListagemContatosComponent } from './pages/contatos/listagem-contatos/listagem-contatos.component';
import { CadastrarEditarPessoasComponent } from './pages/pessoas/cadastrar-editar-pessoas/cadastrar-editar-pessoas.component';
import { DeletarPessoasComponent } from './pages/pessoas/deletar-pessoas/deletar-pessoas.component';
import { PesquisarPessoasComponent } from './pages/pessoas/pesquisar-pessoas/pesquisar-pessoas.component';
import { CadastrarEditarContatosComponent } from './pages/contatos/cadastrar-editar-contatos/cadastrar-editar-contatos.component';

const routes: Routes = [
  {
    path: "pessoas", component: ListagemPessoasComponent
  },
  {
    path: "contatos", component: ListagemContatosComponent
  },
  {
    path: 'cadastrar-pessoa', component: CadastrarEditarPessoasComponent
  },
  {
    path: 'editar-pessoa/:id', component: CadastrarEditarPessoasComponent
  },
  {
    path: 'deletar-pessoa/:id', component: DeletarPessoasComponent
  },
  {
    path: 'pesquisar-pessoa/:id', component: PesquisarPessoasComponent
  },
  {
    path: 'cadastrar-contato', component: CadastrarEditarContatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
