import { Component, OnInit, Injector } from '@angular/core';
import { BBDBaseComponent } from '@core/shared';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent extends BBDBaseComponent implements OnInit {

constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log();
  }

}