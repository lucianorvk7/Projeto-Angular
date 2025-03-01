import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemContatosComponent } from './listagem-contatos.component';

describe('ListagemContatosComponent', () => {
  let component: ListagemContatosComponent;
  let fixture: ComponentFixture<ListagemContatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemContatosComponent]
    });
    fixture = TestBed.createComponent(ListagemContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
