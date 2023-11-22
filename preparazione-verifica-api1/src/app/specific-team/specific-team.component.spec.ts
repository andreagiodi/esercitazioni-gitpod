import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTeamComponent } from './specific-team.component';

describe('SpecificTeamComponent', () => {
  let component: SpecificTeamComponent;
  let fixture: ComponentFixture<SpecificTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificTeamComponent]
    });
    fixture = TestBed.createComponent(SpecificTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
