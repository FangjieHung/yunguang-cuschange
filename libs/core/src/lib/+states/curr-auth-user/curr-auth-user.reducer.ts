import { createReducer, on, Action } from '@ngrx/store';

// Custom packages
import * as CurrAuthUserActions from './curr-auth-user.actions';
import { AuthUserInfo } from '../../models';

export const CURR_AUTH_USER_FEATURE_KEY = 'curr-auth-user';

export interface CurrAuthUserState {
  cache: AuthUserInfo | null;
  loading: boolean;
}

export const initialCurrAuthUserCacheState: CurrAuthUserState = {
  cache: null,
  loading: false
};

const reducer = createReducer(
  initialCurrAuthUserCacheState,
  on(CurrAuthUserActions.initialCurrAuthUserAction, (state) => ({
    ...state,
    cache: null,
    loading: false
  })),
  on(CurrAuthUserActions.requestCurrAuthUserAction, (state) => ({
    ...state,
    cache: null,
    loading: true
  })),
  on(CurrAuthUserActions.successCurrAuthUserAction, (state) => ({
    ...state,
    cache: state.cache,
    loading: false
  })),
  on(CurrAuthUserActions.failureCurrAuthUserAction, (state) => ({
    ...state,
    cache: null,
    loading: false
  }))
);

export function currAuthUserReducer(state: CurrAuthUserState | undefined, action: Action) {
  return reducer(state, action);
}
