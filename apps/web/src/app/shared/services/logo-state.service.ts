// logo-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoStateService {
  private isLargeLogoSubject = new BehaviorSubject<boolean>(false);
  isLargeLogo$: Observable<boolean> = this.isLargeLogoSubject.asObservable();

  setLogoScale(isLarge: boolean): void {
    // 新增setTimeout防止 錯誤：ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.isLargeLogoSubject.next(isLarge);
    });
  }
}