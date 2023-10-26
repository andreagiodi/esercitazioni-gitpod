import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificItemComponent } from './specific-item.component';

describe('SpecificItemComponent', () => {
  let component: SpecificItemComponent;
  let fixture: ComponentFixture<SpecificItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificItemComponent]
    });
    fixture = TestBed.createComponent(SpecificItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
