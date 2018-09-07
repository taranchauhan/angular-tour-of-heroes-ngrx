import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

export function heroReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_HEROES: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_HEROES_SUCCESS: {
      return featureAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.LOAD_HEROES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    case ActionTypes.ADD_HERO: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.ADD_HERO_SUCCESS: {
      return featureAdapter.addOne(action.payload.item, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.ADD_HERO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    case ActionTypes.GET_HERO: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.GET_HERO_SUCCESS: {
      return featureAdapter.upsertOne(action.payload.item, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.GET_HERO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    case ActionTypes.UPDATE_HERO: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.UPDATE_HERO_SUCCESS: {
      return featureAdapter.updateOne(action.payload.item, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.UPDATE_HERO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    case ActionTypes.DELETE_HERO: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.DELETE_HERO_SUCCESS: {
      return featureAdapter.removeOne(action.payload.item.id, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.DELETE_HERO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}
