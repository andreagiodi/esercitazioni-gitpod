import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificStadiumComponent } from './specific-stadium.component';

describe('SpecificStadiumComponent', () => {
  let component: SpecificStadiumComponent;
  let fixture: ComponentFixture<SpecificStadiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificStadiumComponent]
    });
    fixture = TestBed.createComponent(SpecificStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
