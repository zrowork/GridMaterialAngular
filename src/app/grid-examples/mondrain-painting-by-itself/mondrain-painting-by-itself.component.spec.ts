import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondrainPaintingByItselfComponent } from './mondrain-painting-by-itself.component';

describe('MondrainPaintingByItselfComponent', () => {
  let component: MondrainPaintingByItselfComponent;
  let fixture: ComponentFixture<MondrainPaintingByItselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondrainPaintingByItselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondrainPaintingByItselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
