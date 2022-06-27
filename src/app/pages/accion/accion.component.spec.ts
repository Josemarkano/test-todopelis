import { ComponentFixture, TestBed } from '@angular/core/testing';

import { accionComponent } from './accion.component';

describe('ContactComponent', () => {
  let component: accionComponent;
  let fixture: ComponentFixture<accionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ accionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(accionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
