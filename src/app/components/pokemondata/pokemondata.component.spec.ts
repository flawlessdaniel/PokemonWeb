import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemondataComponent } from './pokemondata.component';

describe('PokemondataComponent', () => {
  let component: PokemondataComponent;
  let fixture: ComponentFixture<PokemondataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemondataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
