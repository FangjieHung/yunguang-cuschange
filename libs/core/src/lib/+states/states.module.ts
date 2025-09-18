import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCurrAuthUser from './curr-auth-user/curr-auth-user.reducer';
import { CurrAuthUserEffects } from './curr-auth-user/curr-auth-user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {
        [fromCurrAuthUser.CURR_AUTH_USER_FEATURE_KEY]: fromCurrAuthUser.currAuthUserReducer
      }
    ),
    EffectsModule.forRoot([CurrAuthUserEffects]),
  ],
})
export class StatesModule {}
