import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariRegistroComponent } from './formulari-registro.component';

describe('FormulariRegistroComponent', () => {
  let component: FormulariRegistroComponent;
  let fixture: ComponentFixture<FormulariRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
