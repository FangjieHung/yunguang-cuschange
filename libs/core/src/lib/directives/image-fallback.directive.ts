import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'img[appImageFallback]'
})
export class ImageFallbackDirective implements OnInit {
  @Input('appImageFallback') fallbackUrl?: string;

  private readonly defaultUrl = 'assets/img/illustration/default-image.svg';

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngOnInit() {
    // 若 input 為空字串或 undefined，改用預設圖
    if (!this.fallbackUrl || this.fallbackUrl.trim() === '') {
      this.fallbackUrl = this.defaultUrl;
    }

    const element = this.el.nativeElement;
    if (!element.src || element.src.trim() === '') {
      element.src = this.fallbackUrl;
    }
  }

  @HostListener('error')
  onError() {
    const element = this.el.nativeElement;
    if (element.src !== this.fallbackUrl) {
      element.src = this.fallbackUrl!;
    }
  }
}
