import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPerifericosComponent } from './servicios-perifericos.component';

describe('ServiciosPerifericosComponent', () => {
  let component: ServiciosPerifericosComponent;
  let fixture: ComponentFixture<ServiciosPerifericosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosPerifericosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosPerifericosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
