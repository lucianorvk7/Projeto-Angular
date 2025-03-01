import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarPessoasComponent } from './deletar-pessoas.component';

describe('DeletarPessoasComponent', () => {
  let component: DeletarPessoasComponent;
  let fixture: ComponentFixture<DeletarPessoasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletarPessoasComponent]
    });
    fixture = TestBed.createComponent(DeletarPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
