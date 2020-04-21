import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdList1Component } from './prod-list1.component';

describe('ProdList1Component', () => {
  let component: ProdList1Component;
  let fixture: ComponentFixture<ProdList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
