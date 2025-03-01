import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarPessoasComponent } from './pesquisar-pessoas.component';

describe('PesquisarPessoasComponent', () => {
  let component: PesquisarPessoasComponent;
  let fixture: ComponentFixture<PesquisarPessoasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisarPessoasComponent]
    });
    fixture = TestBed.createComponent(PesquisarPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
