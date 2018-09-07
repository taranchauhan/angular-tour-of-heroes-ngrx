import { Action } from '@ngrx/store';
import { Hero } from '@app/models/hero.model';
import { Update } from '@ngrx/entity';
import { Location } from '@angular/common';

export enum ActionTypes {
  LOAD_HEROES = '[Hero] Load Heroes',
  LOAD_HEROES_FAILURE = '[Hero] Load Heroes Failure',
  LOAD_HEROES_SUCCESS = '[Hero] Load Heroes Success',
  ADD_HERO = '[Hero] Add Hero',
  ADD_HERO_FAILURE = '[Hero] Add Hero Failure',
  ADD_HERO_SUCCESS = '[Hero] Add Hero Success',
  GET_HERO = '[Hero] Get Hero',
  GET_HERO_FAILURE = '[Hero] Get Hero Failure',
  GET_HERO_SUCCESS = '[Hero] Get Hero Success',
  UPDATE_HERO = '[Hero] Update Hero',
  UPDATE_HERO_FAILURE = '[Hero] Update Hero Failure',
  UPDATE_HERO_SUCCESS = '[Hero] Update Hero Success',
  DELETE_HERO = '[Hero] Delete Hero',
  DELETE_HERO_FAILURE = '[Hero] Delete Hero Failure',
  DELETE_HERO_SUCCESS = '[Hero] Delete Hero Success',
}

export class LoadHeroesAction implements Action {
  readonly type = ActionTypes.LOAD_HEROES;
}

export class LoadHeroesFailureAction implements Action {
  readonly type = ActionTypes.LOAD_HEROES_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadHeroesSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_HEROES_SUCCESS;
  constructor(public payload: { items: Hero[] }) {}
}

export class AddHeroAction implements Action {
  readonly type = ActionTypes.ADD_HERO;
  constructor(public payload: { item: Hero }) {}
}

export class AddHeroFailureAction implements Action {
  readonly type = ActionTypes.ADD_HERO_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class AddHeroSuccessAction implements Action {
  readonly type = ActionTypes.ADD_HERO_SUCCESS;
  constructor(public payload: { item: Hero }) {}
}

export class GetHeroAction implements Action {
  readonly type = ActionTypes.GET_HERO;
  constructor(public payload: { id: number }) {}
}

export class GetHeroFailureAction implements Action {
  readonly type = ActionTypes.GET_HERO_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class GetHeroSuccessAction implements Action {
  readonly type = ActionTypes.GET_HERO_SUCCESS;
  constructor(public payload: { item: Hero }) {}
}

export class UpdateHeroAction implements Action {
  readonly type = ActionTypes.UPDATE_HERO;
  constructor(public payload: { item: Update<Hero>, location: Location }) {}
}

export class UpdateHeroFailureAction implements Action {
  readonly type = ActionTypes.UPDATE_HERO_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class UpdateHeroSuccessAction implements Action {
  readonly type = ActionTypes.UPDATE_HERO_SUCCESS;
  constructor(public payload: { item: Update<Hero> }) {}
}

export class DeleteHeroAction implements Action {
  readonly type = ActionTypes.DELETE_HERO;
  constructor(public payload: { item: Hero }) {}
}

export class DeleteHeroFailureAction implements Action {
  readonly type = ActionTypes.DELETE_HERO_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class DeleteHeroSuccessAction implements Action {
  readonly type = ActionTypes.DELETE_HERO_SUCCESS;
  constructor(public payload: { item: Hero }) {}
}

export type Actions = 
LoadHeroesAction | LoadHeroesFailureAction | LoadHeroesSuccessAction |
AddHeroAction | AddHeroFailureAction | AddHeroSuccessAction |
GetHeroAction | GetHeroFailureAction | GetHeroSuccessAction |
UpdateHeroAction | UpdateHeroFailureAction | UpdateHeroSuccessAction |
DeleteHeroAction | DeleteHeroFailureAction | DeleteHeroSuccessAction;
