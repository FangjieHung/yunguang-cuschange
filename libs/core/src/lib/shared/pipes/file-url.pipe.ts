import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AppAttachApiServ } from '../../services';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Pipe({
  name: 'fileUrl',
  pure: false // 非純 pipe 因為會訂閱 observable 並更新 view
})
export class FileUrlPipe implements PipeTransform {
  private cachedUrl: SafeUrl | null = null;
  private lastId: number | null = null;

  constructor(
    private appAttachApiServ: AppAttachApiServ,
    private sanitizer: DomSanitizer
  ) {}

  transform(attId: number): SafeUrl | null {
    if (!attId || attId <= 0) {
      return null;
    }

    // 如果 attId 有變化，重新請求
    if (attId !== this.lastId) {
      this.lastId = attId;
      this.cachedUrl = null;

      this.appAttachApiServ.downloadAppFileAtt(attId)
        .pipe(
          map(blob => {
            const url = URL.createObjectURL(blob);
            return this.sanitizer.bypassSecurityTrustUrl(url);
          }),
          catchError(() => {
            return of(null);
          })
        )
        .subscribe((safeUrl) => {
          this.cachedUrl = safeUrl;
        });
    }

    return this.cachedUrl;
  }
}
