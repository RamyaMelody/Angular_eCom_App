import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListDBComponent } from './prod-list-db.component';

describe('ProdListDBComponent', () => {
  let component: ProdListDBComponent;
  let fixture: ComponentFixture<ProdListDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdListDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdListDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
