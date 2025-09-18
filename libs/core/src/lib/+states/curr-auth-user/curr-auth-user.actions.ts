import { createAction, props } from '@ngrx/store';

// Custom package
import { AuthUserInfo } from '../../models';

// States
export enum CurrAuthUserActionStates {
  Initial = '[CurrAuthUser] Initial',
  Request = '[CurrAuthUser] Request',
  Success = '[CurrAuthUser] Success',
  Failure = '[CurrAuthUser] Failure'
}


// Actions
export const initialCurrAuthUserAction = createAction(CurrAuthUserActionStates.Initial);
export const requestCurrAuthUserAction = createAction(CurrAuthUserActionStates.Request);

export const successCurrAuthUserAction = createAction(
  CurrAuthUserActionStates.Success,
  props<{ payload: AuthUserInfo }>()
);

export const failureCurrAuthUserAction = createAction(
  CurrAuthUserActionStates.Failure,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ payload: any }>()
);



