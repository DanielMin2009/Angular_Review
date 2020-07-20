import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaIntegralComponent } from './logistica-integral.component';

describe('LogisticaIntegralComponent', () => {
  let component: LogisticaIntegralComponent;
  let fixture: ComponentFixture<LogisticaIntegralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticaIntegralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticaIntegralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
