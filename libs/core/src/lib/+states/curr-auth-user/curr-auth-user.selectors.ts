import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CURR_AUTH_USER_FEATURE_KEY,
  CurrAuthUserState
} from './curr-auth-user.reducer';

export const getCurrAuthUserState =
  createFeatureSelector<CurrAuthUserState>(CURR_AUTH_USER_FEATURE_KEY);

export const getCurrAuthUserLoading = createSelector(
  getCurrAuthUserState,
  (state: CurrAuthUserState) => state.loading
);

export const getCurrAuthUserCache = createSelector(
  getCurrAuthUserState,
  (state: CurrAuthUserState) => state.cache
);

