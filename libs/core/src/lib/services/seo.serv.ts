import { Inject, Injectable, Injector } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { AppEnv } from '../models/shared';
import { APP_ENV } from '../shared/helpers';

@Injectable({
  providedIn: 'root'
})
export class SEOServ {
  appEnv: AppEnv;

  get metaTitle(): string {
    return this.title.getTitle();
  }

  set metaTitle(content: string) {
    if (!content) {
      this.title.setTitle(this.appEnv.siteName);
      return;
    }

    this.title.setTitle(content);
  }

  constructor(
    private meta: Meta,
    private title: Title,
    protected injector: Injector,
    @Inject(DOCUMENT) private doc: Document) {
      this.appEnv = injector.get(APP_ENV);
      // this.initMetaTags();
  }

  initMetaTags() {
    this.metaTitle = '';
    this.meta.addTags([
      { property: 'og:site_name', content: this.appEnv.siteName },
      { property: 'og:title', content: this.appEnv.siteName },
      { property: 'og:url', content: this.appEnv.siteServer },
      { property: 'og:image', content: `${this.appEnv.siteServer}/assets/image/og/tslmai.png` },
      { property: 'og:description', content: this.appEnv.siteName },
      { name: 'keywords', content: '澐光客變系統,人工智慧,檢驗醫學' },
      { name: 'description', content: this.appEnv.siteName }
    ]);
  }

  updateMetaTags(
    title = this.appEnv.siteName,
    url = this.appEnv.siteServer,
    image = `${this.appEnv.siteServer}/assets/image/og/tslmai.png`,
    description = this.appEnv.siteName
  ) {
    this.metaTitle = title;
    this.meta.updateTag({ property: 'og:site_name', content: this.appEnv.siteName });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  updateCanonical(url = this.appEnv.siteServer): void {
    const link = this.doc.getElementById('canonical-link') as HTMLLinkElement;
    if (link) {
      link.href = url;
    }
  }

  injectStructuredData(id: string, schema: object): void {
    let script = this.doc.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.doc.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }

  removeStructuredData(id: string): void {
    const script = this.doc.getElementById(id);
    if (script) {
      script.remove();
    }
  }
}
