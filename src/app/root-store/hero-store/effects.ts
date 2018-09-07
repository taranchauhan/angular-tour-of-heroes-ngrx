import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, mergeMap, startWith, switchMap } from 'rxjs/operators';
import { HeroService } from '@app/services/hero/hero.service';
import * as heroActions from './actions';

import { Hero } from '@app/models/hero.model'; 

@Injectable()
export class HeroStoreEffects {
  constructor(private heroService: HeroService, private actions$: Actions) {}

  @Effect()
  loadHeroesRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<heroActions.LoadHeroesAction>(
      heroActions.ActionTypes.LOAD_HEROES
    ),
    startWith(new heroActions.LoadHeroesAction()),
    switchMap(action =>
      this.heroService
        .getHeroes()
        .pipe(
          map(
            items =>
              new heroActions.LoadHeroesSuccessAction({
                items
              })
            ),
            catchError(error =>
              observableOf(new heroActions.LoadHeroesFailureAction({ error }))
            )
      	)
     )
  );

  @Effect()
  addHeroRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<heroActions.AddHeroAction>(
      heroActions.ActionTypes.ADD_HERO
    ),
    map((action: heroActions.AddHeroAction) => action.payload),
    mergeMap(payload =>
      this.heroService.addHero(payload.item)
        .pipe(
          map((hero) => new heroActions.AddHeroSuccessAction({ item: hero })),
          catchError(error =>
            observableOf(new heroActions.AddHeroFailureAction({ error }))
          )
        )
    )
  );

  @Effect()
  getHeroRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<heroActions.GetHeroAction>(
      heroActions.ActionTypes.GET_HERO
    ),
    map((action: heroActions.GetHeroAction) => action.payload),
    mergeMap(payload =>
      this.heroService.getHero(payload.id)
        .pipe(
          map((hero) => new heroActions.GetHeroSuccessAction({ item: hero })),
          catchError(error =>
            observableOf(new heroActions.GetHeroFailureAction({ error }))
          )
        )
    )
  );

  @Effect()
  updateHeroRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<heroActions.UpdateHeroAction>(
      heroActions.ActionTypes.UPDATE_HERO
    ),
    map((action: heroActions.UpdateHeroAction) => action.payload),
    mergeMap(payload =>
      this.heroService.updateHero({...payload.item.changes} as Hero)
        .pipe(
          map(() => {
            payload.location.back();
            return new heroActions.UpdateHeroSuccessAction({ item: payload.item })
          }),
          catchError(error => {
            console.log(error);
            return observableOf(new heroActions.UpdateHeroFailureAction({ error }))
          })
        )
    )
  );

  @Effect()
  deleteHeroRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<heroActions.DeleteHeroAction>(
      heroActions.ActionTypes.DELETE_HERO
    ),
    map((action: heroActions.DeleteHeroAction) => action.payload),
    mergeMap(payload =>
      this.heroService.deleteHero(payload.item)
        .pipe(
          map(() => new heroActions.DeleteHeroSuccessAction({ item: payload.item })),
          catchError(error =>
            observableOf(new heroActions.AddHeroFailureAction({ error }))
          )
        )
    )
  );
}
