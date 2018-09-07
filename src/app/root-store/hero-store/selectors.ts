import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
		
import { Hero } from '@app/models/hero.model';

import { featureAdapter, State } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectHeroState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('hero');

export const selectAllHeroes: (
  state: object
) => Hero[] = featureAdapter.getSelectors(selectHeroState).selectAll;

export const selectHeroById = (id: number) =>
  createSelector(selectAllHeroes, (allHeroes: Hero[]) => {
    if (allHeroes) {
      return allHeroes.find(h => h.id === id);
    } else {
      return null;
    }
  });

export const selectHeroError: MemoizedSelector<object, any> = createSelector(
  selectHeroState,
  getError
);

export const selectHeroIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectHeroState, getIsLoading);
