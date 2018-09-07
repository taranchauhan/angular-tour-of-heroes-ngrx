import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearch } from './hero-search.component';

describe('HeroSearch', () => {
  let component: HeroSearch;
  let fixture: ComponentFixture<HeroSearch>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearch ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
