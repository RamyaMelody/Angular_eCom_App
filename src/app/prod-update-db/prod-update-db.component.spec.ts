import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdUpdateDbComponent } from './prod-update-db.component';

describe('ProdUpdateDbComponent', () => {
  let component: ProdUpdateDbComponent;
  let fixture: ComponentFixture<ProdUpdateDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdUpdateDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdUpdateDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
