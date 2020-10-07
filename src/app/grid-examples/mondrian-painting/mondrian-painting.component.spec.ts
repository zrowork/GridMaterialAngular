import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondrianPaintingComponent } from './mondrian-painting.component';

describe('MondrianPaintingComponent', () => {
  let component: MondrianPaintingComponent;
  let fixture: ComponentFixture<MondrianPaintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondrianPaintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondrianPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
