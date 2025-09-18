import { InjectionToken, ValueProvider } from "@angular/core";

// Custom packages
import { AppEnv } from '../../models'

export const APP_ENV = new InjectionToken<AppEnv>('app.env.token');
export class AppEnvHelper {
  static getValueProvider = (value: AppEnv): ValueProvider => ({
    provide: APP_ENV,
    useValue: value
  });
}
