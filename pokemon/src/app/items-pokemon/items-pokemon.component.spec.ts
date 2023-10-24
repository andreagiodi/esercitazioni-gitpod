import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsPokemonComponent } from './items-pokemon.component';

describe('ItemsPokemonComponent', () => {
  let component: ItemsPokemonComponent;
  let fixture: ComponentFixture<ItemsPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsPokemonComponent]
    });
    fixture = TestBed.createComponent(ItemsPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
