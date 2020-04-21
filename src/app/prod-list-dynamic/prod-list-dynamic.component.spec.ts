import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListDynamicComponent } from './prod-list-dynamic.component';

describe('ProdListDynamicComponent', () => {
  let component: ProdListDynamicComponent;
  let fixture: ComponentFixture<ProdListDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdListDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdListDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
