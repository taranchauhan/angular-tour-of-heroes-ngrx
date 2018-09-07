import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '@app/models/hero.model';

import {
  RootStoreState,
  HeroStoreActions,
  HeroStoreSelectors
} from '@app/root-store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class Dashboard implements OnInit {
  heroes: Hero[];
  error$: Observable<string>;
  isLoading$:Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.store$.select(
      HeroStoreSelectors.selectAllHeroes
    ).subscribe((heroes) => {
      this.heroes = heroes.slice(0, 5);
    });

    this.error$ = this.store$.select(
      HeroStoreSelectors.selectHeroError
    );
    this.isLoading$ = this.store$.select(
      HeroStoreSelectors.selectHeroIsLoading
    );
    this.store$.dispatch(
      new HeroStoreActions.LoadHeroesAction()
    );
  }
}
