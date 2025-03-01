import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarContatosComponent } from './cadastrar-editar-contatos.component';

describe('CadastrarEditarContatosComponent', () => {
  let component: CadastrarEditarContatosComponent;
  let fixture: ComponentFixture<CadastrarEditarContatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarEditarContatosComponent]
    });
    fixture = TestBed.createComponent(CadastrarEditarContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
