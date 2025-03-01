import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { PessoasService } from './services/pessoas.service';
import { ContatosService } from './services/contatos.service';
import { ListagemPessoasComponent } from './pages/pessoas/listagem-pessoas/listagem-pessoas.component';
import { CadastrarEditarPessoasComponent } from './pages/pessoas/cadastrar-editar-pessoas/cadastrar-editar-pessoas.component';
import { PesquisarPessoasComponent } from './pages/pessoas/pesquisar-pessoas/pesquisar-pessoas.component';
import { MalaDiretaComponent } from './pages/pessoas/mala-direta/mala-direta.component';
import { DeletarPessoasComponent } from './pages/pessoas/deletar-pessoas/deletar-pessoas.component';
import { CadastrarEditarContatosComponent } from './pages/contatos/cadastrar-editar-contatos/cadastrar-editar-contatos.component';
import { PesquisarContatosComponent } from './pages/contatos/pesquisar-contatos/pesquisar-contatos.component';
import { ListagemContatosComponent } from './pages/contatos/listagem-contatos/listagem-contatos.component';
import { DeletarContatosComponent } from './pages/contatos/deletar-contatos/deletar-contatos.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent, ListagemPessoasComponent, CadastrarEditarPessoasComponent, PesquisarPessoasComponent, MalaDiretaComponent, DeletarPessoasComponent, CadastrarEditarContatosComponent, PesquisarContatosComponent, ListagemContatosComponent, DeletarContatosComponent, ListaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PessoasService, ContatosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
