import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDelDBComponent } from './prod-del-db.component';

describe('ProdDelDBComponent', () => {
  let component: ProdDelDBComponent;
  let fixture: ComponentFixture<ProdDelDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdDelDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDelDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
