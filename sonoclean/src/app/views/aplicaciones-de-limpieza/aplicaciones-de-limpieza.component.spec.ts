import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionesDeLimpiezaComponent } from './aplicaciones-de-limpieza.component';

describe('AplicacionesDeLimpiezaComponent', () => {
  let component: AplicacionesDeLimpiezaComponent;
  let fixture: ComponentFixture<AplicacionesDeLimpiezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionesDeLimpiezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionesDeLimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
