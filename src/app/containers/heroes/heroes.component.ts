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
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class Heroes implements OnInit {
  heroes$: Observable<Hero[]>;
  error$: Observable<string>;
  isLoading$:Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.heroes$ = this.store$.select(
      HeroStoreSelectors.selectAllHeroes
    );
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.store$.dispatch(
      new HeroStoreActions.AddHeroAction({ item: { name } as Hero }),
    );
  }

  delete(hero: Hero): void {
    this.store$.dispatch(
      new HeroStoreActions.DeleteHeroAction({ item: hero }),
    );
  }
}