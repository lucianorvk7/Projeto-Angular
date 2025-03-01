import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarContatosComponent } from './deletar-contatos.component';

describe('DeletarContatosComponent', () => {
  let component: DeletarContatosComponent;
  let fixture: ComponentFixture<DeletarContatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletarContatosComponent]
    });
    fixture = TestBed.createComponent(DeletarContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
