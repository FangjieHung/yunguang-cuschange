import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import { AboutContentViewerComponent, CommitteeComponent, SupervisorComponent } from './pages';

// Config settings
const CUSTOM_MODULES = [SharedModule];

@NgModule({
  declarations: [
    AboutContentViewerComponent, CommitteeComponent, SupervisorComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ...CUSTOM_MODULES
  ],
})
export class AboutModule { }
