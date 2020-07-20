import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDeLimpiezaComponent } from './servicios-de-limpieza.component';

describe('ServiciosDeLimpiezaComponent', () => {
  let component: ServiciosDeLimpiezaComponent;
  let fixture: ComponentFixture<ServiciosDeLimpiezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosDeLimpiezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosDeLimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
