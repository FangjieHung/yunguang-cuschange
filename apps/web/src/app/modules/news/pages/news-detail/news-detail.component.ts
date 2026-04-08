import { Component, inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment as env } from '../../../../../environments/environment';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { AppNewsMsgView } from '@core/models';
import { AppMsgApiServ, SEOServ } from '@core/services';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent extends BBDBaseComponent implements OnInit {
  private _appMsgApiServ = inject(AppMsgApiServ);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _seoServ = inject(SEOServ);

  private _uniqueId = '';
  response: AppNewsMsgView | null = null;

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this._uniqueId = params.get('uniqueId') || '';
      this.doDataInit();
    });
  }

  doDataInit(): void {
    this._appMsgApiServ.getAppNewsMsgViewByUniqueId(this._uniqueId)
      .subscribe({
        next: (res) => {
          if (!res) {
            this.onGoHome();
            return;
          }

          this.response = res;

          // SEO tags
          const seoData = this._route.snapshot.data;
          this._seoServ.updateMetaTags(
            `${this.response.title}｜${env.siteName}`,
            `${env.siteServer}/news/detail/${this._uniqueId}`,
            seoData['image'],
            this.response.title);

          // JSON-LD: NewsArticle (AEO 信號)
          this._seoServ.injectStructuredData('page-ld', {
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            'headline': this.response.title,
            'url': `${env.siteServer}/news/detail/${this._uniqueId}`,
            'datePublished': new Date(this.response.startAt).toISOString(),
            'dateModified': new Date(this.response.endAt).toISOString(),
            'image': seoData['image'],
            'description': this.response.title,
            'publisher': {
              '@type': 'Organization',
              '@id': 'https://tslmai.org.tw/#organization',
              'name': env.siteName,
              'logo': {
                '@type': 'ImageObject',
                'url': `${env.siteServer}/assets/image/og/tslmai.png`
              }
            }
          });
        },
        error: (err) => {
          this.bbdNotifyServ.error(`截入失敗: 錯誤訊息：「${err?.errorMessage}」`);
          this.onGoHome();
        },
      });
  }

  onGoHome(): void {
    this._router.navigate(['/']);
  }

}
