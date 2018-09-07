import { createSelector, MemoizedSelector } from '@ngrx/store';
import { HeroStoreSelectors } from './hero-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  HeroStoreSelectors.selectHeroError,
  (heroError: string) => {
    return heroError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  HeroStoreSelectors.selectHeroIsLoading,
  (hero: boolean) => {
    return hero;
  }
);
