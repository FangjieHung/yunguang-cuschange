import { Inject, Injectable  } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

// Custom packages
import * as CurrAuthUserActions from './curr-auth-user.actions';
import { APP_ENV } from '../../shared/helpers';
import { AppEnv } from '../../models';
import { AppUserApiServ } from '../../services';

@Injectable()
export class CurrAuthUserEffects {
  getCurrAuthUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrAuthUserActions.requestCurrAuthUserAction),
      switchMap(() => {
        return this.appUserApiServ.getCurrAuthUserInfo()
          .pipe(
            map(res => {
              if (res) {
                window.sessionStorage.setItem(this.appEnv.storageAuthUserName, JSON.stringify(res));
                return CurrAuthUserActions.successCurrAuthUserAction({ payload: res });
              } else {
                return CurrAuthUserActions.failureCurrAuthUserAction({ payload: new Error('無法取得有效使用者資訊') });
              }
            }),
            catchError(err => of(CurrAuthUserActions.failureCurrAuthUserAction({ payload: err })))
          );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    @Inject(APP_ENV) private appEnv: AppEnv,
    private appUserApiServ: AppUserApiServ,
  ) {}
}
