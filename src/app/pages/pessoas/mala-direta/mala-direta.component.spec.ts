import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalaDiretaComponent } from './mala-direta.component';

describe('MalaDiretaComponent', () => {
  let component: MalaDiretaComponent;
  let fixture: ComponentFixture<MalaDiretaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MalaDiretaComponent]
    });
    fixture = TestBed.createComponent(MalaDiretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
