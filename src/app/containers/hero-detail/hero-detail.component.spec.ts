import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetail } from './hero-detail.component';

describe('HeroDetail', () => {
  let component: HeroDetail;
  let fixture: ComponentFixture<HeroDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetail ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
