import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent, NewsDetailComponent } from './pages';
import { NewsRoutingModule } from './news-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';

// Config settings
const CUSTOM_MODULES = [SharedModule];

@NgModule({
  declarations: [
    NewsListComponent,
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ...CUSTOM_MODULES
  ],
})
export class NewsModule { }