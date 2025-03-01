import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarContatosComponent } from './pesquisar-contatos.component';

describe('PesquisarContatosComponent', () => {
  let component: PesquisarContatosComponent;
  let fixture: ComponentFixture<PesquisarContatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisarContatosComponent]
    });
    fixture = TestBed.createComponent(PesquisarContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
