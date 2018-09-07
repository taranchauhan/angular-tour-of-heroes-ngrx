import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heroes } from './heroes.component';

describe('Heroes', () => {
  let component: Heroes;
  let fixture: ComponentFixture<Heroes>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heroes ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heroes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
