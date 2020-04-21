import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bootsnip1Component } from './bootsnip1.component';

describe('Bootsnip1Component', () => {
  let component: Bootsnip1Component;
  let fixture: ComponentFixture<Bootsnip1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bootsnip1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bootsnip1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
