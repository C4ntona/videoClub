import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaConComponent } from './contacta-con.component';

describe('ContactaConComponent', () => {
  let component: ContactaConComponent;
  let fixture: ComponentFixture<ContactaConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactaConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactaConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
