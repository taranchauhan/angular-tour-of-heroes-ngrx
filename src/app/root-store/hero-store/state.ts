import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Hero } from '@app/models/hero.model';

export const featureAdapter: EntityAdapter<
  Hero
> = createEntityAdapter<Hero>({
  selectId: model => model.id,
  sortComparer: (a: Hero, b: Hero): number => a.id - b.id
});

export interface State extends EntityState<Hero> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);