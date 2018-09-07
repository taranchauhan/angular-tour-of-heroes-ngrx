import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  RootStoreState,
  HeroStoreActions,
  HeroStoreSelectors
} from '@app/root-store';

import { Hero } from '@app/models/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetail implements OnInit {
  hero: Hero;
  error$: Observable<string>;
  isLoading$:Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private store$: Store<RootStoreState.State>,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.store$.select(
      HeroStoreSelectors.selectHeroById(id)
    ).subscribe((hero) => {
      this.hero = hero;
    });

    this.error$ = this.store$.select(
      HeroStoreSelectors.selectHeroError
    );
    this.isLoading$ = this.store$.select(
      HeroStoreSelectors.selectHeroIsLoading
    );

    this.store$.dispatch(
      new HeroStoreActions.GetHeroAction({ id })
    );
  }

  goBack(): void {
    this.location.back();
  }
 
  save(): void {
    const update = { id: this.hero.id, changes: this.hero };
    this.store$.dispatch(new HeroStoreActions.UpdateHeroAction({ item: update, location: this.location }));
  }
}
