import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  showProgressbar = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const url = this.router.url;
      this.showProgressbar =
        url.includes('mass-refinement') ||
        url.includes('mass-comparison') ||
        url.includes('project/integrate') ||
        url.includes('render-list') ||
        url.includes('render-detail');
      ;
    });
  }
}
